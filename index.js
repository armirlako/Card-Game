import { shuffleArray } from './tools.js';
import { removeDuplicates } from './tools.js';
import { createImageObj } from './tools.js';
import { backImage } from './tools.js';
import { backArray} from './tools.js';
import { updateText} from './tools.js';
import { changeButtonText} from './tools.js';
import { displayClear} from './tools.js';
import { displayShow} from './tools.js';
import { displayBackShow} from './tools.js';

let cards = [];
let host = [];
let player1 = [];
let player2 = [];
let player3 = [];

let cardInfo = [
    { filename: '2 of clubs.png', alt: '2' },
    { filename: '2 of diamonds.png', alt: '2' },
    { filename: '2 of hearts.png', alt: '2' },
    { filename: '2 of spades.png', alt: '2' },

    { filename: '3 of clubs.png', alt: '3' },
    { filename: '3 of diamonds.png', alt: '3' },
    { filename: '3 of hearts.png', alt: '3' },
    { filename: '3 of spades.png', alt: '3' },

    { filename: '4 of clubs.png', alt: '4' },
    { filename: '4 of diamonds.png', alt: '4' },
    { filename: '4 of hearts.png', alt: '4' },
    { filename: '4 of spades.png', alt: '4' },

    { filename: '5 of clubs.png', alt: '5' },
    { filename: '5 of diamonds.png', alt: '5' },
    { filename: '5 of hearts.png', alt: '5' },
    { filename: '5 of spades.png', alt: '5' },

    { filename: '6 of clubs.png', alt: '6' },
    { filename: '6 of diamonds.png', alt: '6' },
    { filename: '6 of hearts.png', alt: '6' },
    { filename: '6 of spades.png', alt: '6' },

    { filename: '7 of clubs.png', alt: '7' },
    { filename: '7 of diamonds.png', alt: '7' },
    { filename: '7 of hearts.png', alt: '7' },
    { filename: '7 of spades.png', alt: '7' },

    { filename: '8 of clubs.png', alt: '8' },
    { filename: '8 of diamonds.png', alt: '8' },
    { filename: '8 of hearts.png', alt: '8' },
    { filename: '8 of spades.png', alt: '8' },

    { filename: '9 of clubs.png', alt: '9' },
    { filename: '9 of diamonds.png', alt: '9' },
    { filename: '9 of hearts.png', alt: '9' },
    { filename: '9 of spades.png', alt: '9' },

    { filename: '10 of clubs.png', alt: '10' },
    { filename: '10 of diamonds.png', alt: '10' },
    { filename: '10 of hearts.png', alt: '10' },
    { filename: '10 of spades.png', alt: '10' },

    { filename: 'ace of clubs.png', alt: 'ace' },
    { filename: 'ace of diamonds.png', alt: 'ace' },
    { filename: 'ace of hearts.png', alt: 'ace' },
    { filename: 'ace of spades.png', alt: 'ace' },

    { filename: 'jack of clubs.png', alt: 'jack' },
    { filename: 'jack of diamonds.png', alt: 'jack' },
    { filename: 'jack of hearts.png', alt: 'jack' },
    { filename: 'jack of spades.png', alt: 'jack' },

    { filename: 'king of spades.png', alt: 'king' },

    { filename: 'queen of clubs.png', alt: 'queen' },
    { filename: 'queen of diamonds.png', alt: 'queen' },
    { filename: 'queen of hearts.png', alt: 'queen' },
    { filename: 'queen of spades.png', alt: 'queen' },
];

let winners = [false, false, false, false]
let action = true

cardInfo.forEach(function(info) {
    var card = createImageObj(info.filename, info.alt);
    cards.push(card);
});

freshGame()

function freshGame(){
    
    changeButtonText("Play")

    host = [];
    player1 = [];
    player2 = [];
    player3 = [];

    displayClear(host, "hostDisplay")
    displayClear(player1, "player1Display")
    displayClear(player2, "player2Display")
    displayClear(player3, "player3Display")

    cards = shuffleArray(cards);

    for (let i = 0; i < 13; i++){
        host.push(cards[i])
    }

    for (let i = 13; i < 25; i++){
        player1.push(cards[i])
    }

    for (let i = 25; i < 37; i++){
        player2.push(cards[i])
    }

    for (let i = 37; i < 49; i++){
        player3.push(cards[i])
    }

    host = removeDuplicates(host)
    player1 = removeDuplicates(player1)
    player2 = removeDuplicates(player2)
    player3 = removeDuplicates(player3)

    displayShow(host, "hostDisplay")
    displayBackShow(player1, "player1Display")
    displayBackShow(player2, "player2Display")
    displayBackShow(player3, "player3Display")
}

document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('button').addEventListener('click', () => {

        if(action == true){
            changeButtonText("Continue")

            displayClear(host, "hostDisplay")
            displayClear(player1, "player1Display")
            displayClear(player2, "player2Display")
            displayClear(player3, "player3Display")

            if (host.length != 0){
                if (player1.length != 0){
                    let temp = Math.floor(Math.random() * player1.length);
                    host.push(player1[temp]);
                    updateText("Host picked the " + player1[temp].src.replace("https://armirlako.github.io/Card-Game/imgs/", ''))
                    player1.splice(temp, 1);
                    host = removeDuplicates(host)

                }
                else if(player2.length != 0){
                    let temp = Math.floor(Math.random() * player2.length);
                    host.push(player2[temp]);
                    updateText("Host picked the " + player2[temp].src.replace("https://armirlako.github.io/Card-Game/imgs/", ''))
                    player2.splice(temp, 1);
                    host = removeDuplicates(host)
                }
                else if(player3.length != 0){
                    let temp = Math.floor(Math.random() * player3.length);
                    host.push(player3[temp]);
                    updateText("Host picked the " + player3[temp].src.replace("https://armirlako.github.io/Card-Game/imgs/", ''))
                    player3.splice(temp, 1);
                    host = removeDuplicates(host)
                }
            }

            else{
                winners[0] = true;
                updateText("Host has already won! Keep clicking continue to see which player loses")
            }

            if (player1.length != 0){
                if (player2.length != 0){
                    let temp = Math.floor(Math.random() * player2.length);
                    player1.push(player2[temp]);
                    player2.splice(temp, 1);
                    player1 = removeDuplicates(player1)
                }
                else if(player3.length != 0){
                    let temp = Math.floor(Math.random() * player3.length);
                    player1.push(player3[temp]);
                    player3.splice(temp, 1);
                    player1 = removeDuplicates(player1)
                }
                else if(host.length != 0){
                    let temp = Math.floor(Math.random() * host.length);
                    player1.push(host[temp]);
                    host.splice(temp, 1);
                    player1 = removeDuplicates(player1)
                }
            }

            else{
                winners[1] = true;
            }

            if (player2.length != 0){
                if (player3.length != 0){
                    let temp = Math.floor(Math.random() * player3.length);
                    player2.push(player3[temp]);
                    player3.splice(temp, 1);
                    player2 = removeDuplicates(player2)
                }
                else if(host.length != 0){
                    let temp = Math.floor(Math.random() * host.length);
                    player2.push(host[temp]);
                    host.splice(temp, 1);
                    player2 = removeDuplicates(player2)
                }
                else if(player1.length != 0){
                    let temp = Math.floor(Math.random() * player1.length);
                    player2.push(player1[temp]);
                    player1.splice(temp, 1);
                    player2 = removeDuplicates(player2)
                }
            }

            else{
                winners[2] = true;
            }

            if (player3.length != 0){
                if (host.length != 0){
                    let temp = Math.floor(Math.random() * host.length);
                    player3.push(host[temp]);
                    host.splice(temp, 1);
                    player3 = removeDuplicates(player3)
                }
                else if(player1.length != 0){
                    let temp = Math.floor(Math.random() * player1.length);
                    player3.push(player1[temp]);
                    player1.splice(temp, 1);
                    player3 = removeDuplicates(player3)
                }
                else if(player2.length != 0){
                    let temp = Math.floor(Math.random() * player2.length);
                    player3.push(player2[temp]);
                    player2.splice(temp, 1);
                    player3 = removeDuplicates(player3)
                }
            }

            else{
                winners[3] = true;
            }

            displayShow(host, "hostDisplay")
            displayBackShow(player1, "player1Display")
            displayBackShow(player2, "player2Display")
            displayBackShow(player3, "player3Display")

            if (winners[0] == false && winners[1] == true && winners[2] == true && winners[3] == true){
                winners = [false, false, false, false]
                updateText("Host has the King! You have lost the round. Click Start Over to play again.")
                changeButtonText("Start Over")
                setTimeout(() => {
                    action = false;
                }, 1);
            }

            else if (winners[0] == true && winners[1] == false && winners[2] == true && winners[3] == true){
                displayClear(player1, "player1Display")
                displayShow(player1, "player1Display")
                winners = [false, false, false, false]
                updateText("Player 1 has the King and has lost the round! Click Start Over to play again")
                changeButtonText("Start Over")
                setTimeout(() => {
                    action = false;
                }, 1);
            }

            else if (winners[0] == true && winners[1] == true && winners[2] == false && winners[3] == true){
                displayClear(player2, "player2Display")
                displayShow(player2, "player2Display")
                winners = [false, false, false, false]
                updateText("Player 2 has the King and has lost the round! Click Start Over to play again")
                changeButtonText("Start Over")
                setTimeout(() => {
                    action = false;
                }, 1);
            }

            else if (winners[0] == true && winners[1] == true && winners[2] == true && winners[3] == false){
                displayClear(player3, "player3Display")
                displayShow(player3, "player3Display")
                winners = [false, false, false, false]
                updateText("Player 3 has the King and has lost the round! Click Start Over to play again")
                changeButtonText("Start Over")
                setTimeout(() => {
                    action = false;
                }, 1);
            }
        }

        if (action == false){
            updateText("Welcome to the Game! Click Play to start!")
            displayClear(host, "hostDisplay")
            displayClear(player1, "player1Display")
            displayClear(player2, "player2Display")
            displayClear(player3, "player3Display")
            freshGame()
            action = true;
        }
        
    })
});