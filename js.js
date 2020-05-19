let cards = document.getElementById('cards');
let btn = document.getElementById('reset');
cards.addEventListener('click', reverseCard);
btn.addEventListener('click', resetCards);

function reverseCard(){
    let name = event.target.getAttribute('value')
    let txt = event.target.src;
    let tmp = txt.substr(txt.length-10);
    event.target.src = tmp=='img/'+name+'.png' ? 'img/blank.png' : 'img/'+name+'.png';
}

function resetCards(){
    let parent = document.getElementById('cards');
    let child = parent.getElementsByTagName('img');
    for(let i = 0; i < child.length; i++){
        child[i].src = 'img/'+child[i].getAttribute('value')+'.png';
    }
}