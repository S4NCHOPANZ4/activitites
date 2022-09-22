const player = document.getElementById('avatar');
const coin = document.getElementById('coin');
const score = document.getElementById('score');

const maxWidth = 1790;
const maxHeight = 810;

var Posy = 250;
var Posx = 800;
var puntaje = 0;

window.addEventListener('keypress',function(e){
    //Up
    moveCoin();

   if(e.keyCode === 119){
    if(Posy > 0){
        Posy = Posy - 20;
        player.style.top = `${Posy}px`
    }
   }
   //Down
   if(e.keyCode === 115){
    if(Posy < maxHeight){
        Posy = Posy + 20;
        player.style.top = `${Posy}px`
    }
   }
   //Right
   if(e.keyCode === 100){
    if(Posx < maxWidth){
        Posx = Posx + 20;
        player.style.left = `${Posx}px`
    }
   }
   //left
   if(e.keyCode === 97){
    if(Posx > -10){
        Posx = Posx -20;
        player.style.left = `${Posx}px`
    }
   }
   console.log(Posx , Posy)
})
function moveCoin(){
   if(isTouching(player,coin)){
        puntaje = puntaje+1
        score.innerText = `Your Score is: ${puntaje} / Controls: W - A - S - D`
        coin.style.top = `${getRandomInt(maxHeight)}px`
        coin.style.left = `${getRandomInt(maxWidth)}px`
   }
    
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

