const txtarr = document.querySelector('p').innerHTML.split(' ')
const txt = document.querySelector('p')
console.log(txtarr)

const newTxt = txtarr.map(word =>{
    if(word.length > 8){
        return `<span style="background-color:yellow">${word}</span>`
    }
    return word
}).join(' ')
txt.innerHTML = newTxt

const link = document.createElement('a')
link.href = "https://www.youtube.com/watch?v=j8xsk2W7TV4"
link.innerText = "YouTube video"
document.body.appendChild(link)

txt.innerHTML = txt.innerHTML.split(".").join(`<p></p>`)


const count = txt.innerHTML.split(' ').length;
const countHtml = document.createElement("div")
countHtml.innerHTML =   `${count} words`
document.body.insertBefore(countHtml, txt)


txt.innerHTML = txt.innerHTML.replaceAll('?', '🤔')
txt.innerHTML = txt.innerHTML.replaceAll('!', '😲')