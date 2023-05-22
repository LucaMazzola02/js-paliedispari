

const userNUmber = parseInt(document.getElementById('user-number').value);

const pariDispariElement = document.getElementById('pari-o-dispari').value; 

let outputElement = document.getElementById('output');

const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click', function(){

let pcRandomNumber = casual;

function casual(num) {
    num = Math.floor(Math.random() * (5 - 1) + 1);
    return num;
}

document.getElementById('pc-random').innerHTML = pcRandomNumber;

let somma = userNUmber + pcRandomNumber;

function sumVerify(addition){

    if(addition === 0){
        
        return true;

    }

        return false;

};

document.getElementById('sumNumbers').innerHTML = somma;

    if(userNUmber > 0 && userNUmber <= 5){

        if((sumVerify(somma)) === pariDispariElement){

        outputElement = 'complimenti hai vinto';

    }else{

        outputElement = 'Ritenta e sarai + fortunato';

    };
    }else{

        outputElement = 'Inserisci un numero compreso tra 1 e 5 grazie';

    };

});





