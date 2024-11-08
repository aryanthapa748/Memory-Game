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

const cardsChosen = [];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

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
    this.setAttribute('src', cardArray[cardId].img);

}