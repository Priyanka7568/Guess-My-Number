'use strict';
let secretNumber = Math.trunc(Math.random() * 20) +  1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = 'Please enter a number';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'You are correct!';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#008000';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =
            guess > secretNumber ? 'Number is too High!' : 'Number is too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#960000';
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
})