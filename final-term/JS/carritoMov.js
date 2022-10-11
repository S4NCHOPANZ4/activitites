const items  = document.getElementById('items');
const iList = document.getElementById('iList');
const templateList = document.getElementById('templateList').content;
const templateCard = document.getElementById('template').content;
const fragment = document.createDocumentFragment();
const deleteAllBtn = document.getElementById('delete_all');
const c = document.getElementById('comprar');
let carrito = {};
let count = 0;
let buttonList = [];



document.addEventListener('DOMContentLoaded',()=>{
    fetchData()
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito')); 
        pintarList();
    }
})
items.addEventListener('click',e =>{
    addCarrito(e)  
})
iList.addEventListener('click',e =>{
    deleteCarrito(e)
  
})



const fetchData = async () =>{
    try {
        const res = await fetch('/json/api.json')
        const data = await res.json();
        pintarCard(data);
     
    } catch (error) {
        console.log(error);
    }
}

const pintarCard = data =>{
    data.forEach(element => {
        templateCard.querySelector('h5').innerHTML = element.name;
        templateCard.querySelector('h6').innerHTML = element.price;
        templateCard.querySelector('h3').innerHTML = `CDN$  ${element.price}`;
        templateCard.querySelector('#img').setAttribute('src', element.image)
        templateCard.querySelector('button').dataset.id = element.id;
        templateCard.querySelector('button').id = element.id;

        templateCard.querySelector('#sub_img').setAttribute('src', element.subImage);


       
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);

}

const addCarrito= e =>{
   
    if(e.target.classList.contains('comprar')){
        setCarrito(e.target.parentElement.parentElement)
        e.target.style.backgroundColor= '#1b2838';
        e.target.style.borderColor= '#1b2838';
        e.target.style.color='#5492c6';
        e.target.textContent = 'Added!'

        buttonList.push(e.target);
       
       
    }
    e.stopPropagation()

   
}
const setCarrito = obj =>{
    const product = {
        id: obj.querySelector('.comprar').dataset.id,
        price: obj.querySelector('h6').textContent,
        name: obj.querySelector('h5').textContent,
        sub_image: obj.querySelector('#sub_img').src

    }

    carrito[product.id] = {...product}
    console.log(carrito[product.id])
    pintarList()

}
const pintarList = () =>{

    iList.innerHTML = '';
    count = 0
    Object.values(carrito).forEach(producto =>{

        templateList.querySelector('.name').textContent = producto.name
        templateList.querySelector('.price').innerHTML = `CDN$ ${producto.price}`;
        templateList.querySelector('img').setAttribute('src',  producto.sub_image)
        templateList.querySelector('.delete').dataset.id = producto.id;
        templateList.querySelector('.delete').innerHTML = producto.id;

        count += parseFloat(producto.price)

        const clone = templateList.cloneNode(true)
        fragment.appendChild(clone)

      

    })
    document.querySelector('#count').textContent = `CDN$ ${count}`
    iList.appendChild(fragment)
    localStorage.setItem('carrito',JSON.stringify(carrito));
}
const  deleteCarrito = e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.parentElement.remove()
        
        
        let ind = e.target.innerHTML
        Object.values(carrito).forEach(producto =>{
            if(ind === producto.id){
               
                count -= producto.price
                document.querySelector('#count').textContent = `CDN$ ${count}`
               delete carrito[e.target.dataset.id]
               pintarList();
                for (let i = 0; i <= buttonList.length; i++){
          

                    if(buttonList[i].id === producto.id){
                        buttonList[i].style.backgroundColor= '#a5d105';
                        buttonList[i].style.borderColor= '#a9d507';
                        buttonList[i].style.color='white';
                        buttonList[i].textContent = 'Add to Cart'
                    }
                }
               

                
          
            }
        })
     
   
    }
    

}
deleteAllBtn.addEventListener('click',e =>{
    carrito = {}
    pintarList()
    buttonList.forEach(repaint)
   
})
const repaint = list =>{
    list.style.backgroundColor= '#a5d105';
    list.style.borderColor= '#a9d507';
    list.style.color='white';
    list.textContent = 'Add to Cart'
}
