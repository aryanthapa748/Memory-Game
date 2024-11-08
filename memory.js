const cardArray = [
    {
        name: 'bird',
        img: 'images/bird.png',
    },

    {
        name: 'card',
        img: 'images/card.png',
    },

    {
        name: 'coconut',
        img: 'images/coconut.png',
    },

    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
        name: 'gift',
        img: 'images/gift.png',
    },

    {
        name: 'lily',
        img: 'images/lily.png',
    },

    {
        name: 'macaroon',
        img: 'images/macaroon.png',
    },

    {
        name: 'bird',
        img: 'images/bird.png',
    },

    {
        name: 'card',
        img: 'images/card.png',
    },

    {
        name: 'coconut',
        img: 'images/coconut.png',
    },

    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
        name: 'gift',
        img: 'images/gift.png',
    },

    {
        name: 'lily',
        img: 'images/lily.png',
    },

    {
        name: 'macaroon',
        img: 'images/macaroon.png',
    },

]

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#resultDisplay');

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

cardArray.sort(() => 0.5 - Math.random());

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/card.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);

    }
}

createBoard();

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId); 
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    } 

}

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/soldout.png');
        cards[optionTwoId].setAttribute('src', 'images/soldout.png');
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/soldout.png');
        cards[optionTwoId].setAttribute('src', 'images/soldout.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/card.png');
        cards[optionTwoId].setAttribute('src', 'images/card.png');
        alert('Sorry try again');
    }
    cardsChosen = [];
    cardsChosenIds =[];
    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!'

    }


}