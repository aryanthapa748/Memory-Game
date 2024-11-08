const cardsArray = [
    {
        name: 'bird',
        img: 'images/bird.png'
    },
    {
        name: 'coconut',
        img: 'images/coconut.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'gift',
        img: 'images/gift.png'
    },
    {
        name: 'lily',
        img: 'images/lily.png'
    },
    {
        name: 'macaroon',
        img: 'images/macaroon.png'
    },
    
    {
        name: 'bird',
        img: 'images/bird.png'
    },
    {
        name: 'coconut',
        img: 'images/coconut.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'gift',
        img: 'images/gift.png'
    },
    {
        name: 'lily',
        img: 'images/lily.png'
    },
    {
        name: 'macaroon',
        img: 'images/macaroon.png'
    },
]

cardsArray.sort(() => 0.5 - Math.random()); // a smart way to shuffle objects inside array on every render

// QUERY SELECTORS
const resultDisplay = document.querySelector('#resultDisplay');
const container = document.querySelector('#container');

// NEW EMPTY ARRAYS
let cardsChosenNameArray = []; // to keep track of the name of the clicked card
let cardsChosenIdsArray = []; // to keep track if the ids of the clicked card
const cardsWon = []; // to keep track of the scores

// for loop for creating our array.length number of img element and setting its src attribute to default card and appending it to our html container
for (let i = 0; i < cardsArray.length; i++){
    const image = document.createElement('img');
    image.setAttribute('src', 'images/card.png');
    image.setAttribute('data-id', i);
    container.appendChild(image);
    image.addEventListener('click', flipCard);
}

// on click of the image we are now implementing the card to make a flip effect
function flipCard(){
    const imageId = this.getAttribute('data-id'); // very imp to use this because we basically cannot access const image.getAttribute() since its inside of the for loop so we have to use this in order to select the selected image
    cardsChosenNameArray.push(cardsArray[imageId].name);
    cardsChosenIdsArray.push(imageId);
    this.setAttribute('src', cardsArray[imageId].img ); // very imp to use this because we cannot access const image.setAttribute() since its not accessible in the global context so we have to use this in order to access the selected image's src path
    //logic to check once there is 2 item in the array which basically means if we select 2 images we have to create a logic to check if the two images are matching or not.
    if (cardsChosenNameArray.length === 2){ // so for this we are setting 500ms to run checkMatch function once we select 2 images
        setTimeout(checkMatch, 500) 
    }
    console.log(cardsChosenNameArray);
    console.log(cardsChosenIdsArray);
}

//function to actually check it 2 images are match or not
function checkMatch(){
    const cards = document.querySelectorAll('img'); // selecting the whole 12 <img> elements

    const firstImageCheckMatch = cardsChosenIdsArray[0]; // to make it easier to use later
    const secondImageCheckMatch = cardsChosenIdsArray[1];

    if(cardsChosenNameArray[0] === cardsChosenNameArray[1] && firstImageCheckMatch !== secondImageCheckMatch){ // if 2 images name's are same we are changing the attribute of the matched images to found image's
        alert('Yay You Found A Match');
        cards[firstImageCheckMatch].setAttribute('src', 'images/soldout.png'); // since cards is all 12 <img> element doing cards[0] / cards[3] will actually select either first <img> element or so on and change the src of that image.
        cards[secondImageCheckMatch].setAttribute('src', 'images/soldout.png'); // same as above

        cards[firstImageCheckMatch].removeEventListener('click', flipCard); // removing event listener because if we click again on the sold out card it gonna flip back again
        cards[secondImageCheckMatch].removeEventListener('click', flipCard); // same as above

        cardsWon.push(cardsChosenNameArray); // to increment / keep track of the scores of how many images did we find.

    } else {
        cards[firstImageCheckMatch].setAttribute('src', 'images/card.png');
        cards[secondImageCheckMatch].setAttribute('src', 'images/card.png');
        alert('Sorry try again.')
    }

    if  (cardsChosenNameArray[0] === cardsChosenNameArray[1] && firstImageCheckMatch === secondImageCheckMatch){ // if the same image is clicked 2 times 
        alert('You clicked the same image 2 times')
    }
    cardsChosenNameArray = []; // emptying on each 2 times click because if not its not gonna work as expected
    cardsChosenIdsArray = [];

    resultDisplay.textContent = cardsWon.length;

    if(cardsWon.length == cardsArray.length / 2 ){ // checking if we found all the cards
        resultDisplay.textContent = 'Congratulations!!! You found all the pair of cards';
    }

}


