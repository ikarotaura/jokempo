


const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, humanMachine())

}

const humanMachine = () => {

    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + 'Maquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate !! 😐"

    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        result.innerHTML = "Parabéns, você ganhou !! 😎 "
        humanScoreNumber ++
        humanScore.innerHTML = humanScoreNumber
    } 
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Que pena, você perdeu para Alexa ! 😭 "

    }



}

