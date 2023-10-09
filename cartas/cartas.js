let cardsAlreadySelected = [];
const numbersArray = ['2','3','4','5','6','7','8','9','10','J','Q','K']
let lastCard = [5, '\u2660'];
console.log(numbersArray.indexOf(lastCard[0]))
const suitsArray = ['\u2666','\u2663','\u2764','\u2660']
let newCard = []
console.log(newCard)
let score = 0;

const generateCard = () => {
    let newCard;
    let newCardNumber;
    let newCardSuit;
    while (true){
        newCardNumber = numbersArray[Math.floor(Math.random()*12)]
        newCardSuit = suitsArray[Math.floor(Math.random()*4)]
        newCard = `${newCardNumber} ${newCardSuit}`
        if (!cardsAlreadySelected.includes(newCard)) {
            break;
        }
    }
    cardsAlreadySelected.push(newCard)
    return newCard
}


const guessIsHigher = () => {
    const dom = document;
    const cardElement = document.querySelector('p')
    newCard = generateCard()
    cardElement.textContent = newCard
    console.log(numbersArray.indexOf(newCard[0]))
    if (numbersArray.indexOf(newCard[0])>numbersArray.indexOf(lastCard[0])){
        score += 1
        document.querySelector('h4').textContent = score
    } else if (numbersArray.indexOf(newCard[0])<numbersArray.indexOf(lastCard[0])){
        
    }
}

const guessIsLower = () => {
    const dom = document;
    const cardElement = document.querySelector('p')
    cardElement.textContent = generateCard()
}

const nextCard = () => {
    const dom = document;
    const cardElement = document.querySelector('p')
    cardElement.textContent = generateCard()
}


const higherElement = document.querySelector('.is-higher') 
higherElement.addEventListener('click',guessIsHigher)

const lowerElement = document.querySelector('.is-lower') 
lowerElement.addEventListener('click',guessIsLower)

const nextCardElement = document.querySelector('.next-card-button') 
nextCardElement.addEventListener('click',nextCard)