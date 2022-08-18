let player = {
    name: "Madushan",
    chips: 122
}

let cards = []
let hasBlackjack = false
let isAlive = true
let message = ""
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')
let sum = 0

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ' : ' + player.chips + '$'

function getRandomCard() {

    randomNum = (Math.floor(Math.random() * 13) + 1)

    if (randomNum === 1) {

        return randomNum = 11

    } else if (randomNum >= 11) {

        return randomNum = 10
    } else {

        return randomNum
    }
}

function startGame() {

    isAlive = true

    let firstCard = Math.floor(Math.random() * 13) + 1
    let secondCard = Math.floor(Math.random() * 13) + 1
    cards = [firstCard, secondCard]
    let sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards :"

    for (let i = 0; i < cards.length; i++) {

        cardEl.textContent = cardEl.textContent + cards[i] + ' '
    }

    sumEl.textContent = 'sum : ' + sum

    if (sum <= 20) {

        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {

        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackjack = true
    } else {

        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }

}

