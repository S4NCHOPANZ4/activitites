let ul = document.querySelector('#list')

document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault();
    let addInput = document.getElementById('add-input');

    if(addInput.value !== ''){
        var li = document.createElement('li'),
                firstP = document.createElement('p'),
                secondP = document.createElement('p'),
                firstIcon = document.createElement('i'),
                secondIcon = document.createElement('i'),
                input = document.createElement('input');

    firstIcon.className = 'fa fa-pencil-square-o'
    secondIcon.className = 'fa fa-times'
    input.className = 'edit-note'
    input.setAttribute("type","text")


    firstP.textContent = addInput.value;
    secondP.appendChild(firstIcon);
    secondP.appendChild(secondIcon);

    li.appendChild(firstP)
    li.appendChild(secondP)
    li.appendChild(input)

    ul.appendChild(li)

    addInput.value = '';
    }
})

ul.addEventListener("click", function(e) {

    if(e.target.classList[1] === 'fa-pencil-square-o'){
        let parentP = e.target.parentNode
        parentP.style.display = 'none';

        let note = parentP.previousElementSibling;
        let input = parentP.nextElementSibling;

        input.style.display="block";
        input.value = note.textContent;

        input.addEventListener('keypress' , function(e){
            if(e.keyCode ===13){
              if(input.value !== ''){
                note.textContent = input.value 
                input.style.display = 'none'
                parentP.style.display = 'block'

              }
              else{
                let li =input.parentNode
                li.parentNode.removeChild(li)
              }
              
            }
        })
    }
    if(e.target.classList[1] === 'fa-times'){
        const list = e.target.parentNode.parentNode
        list.parentNode.removeChild(list)
    }


})