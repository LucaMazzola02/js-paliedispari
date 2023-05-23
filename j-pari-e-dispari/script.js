

const userNUmber = parseInt(prompt('Scegli un numero da 1 a 5'));

const userChoise = prompt('Scegli pari o dispari'); 

const aINumber = casual(1,5);

const sum = userNUmber + aINumber;


let result = "";

if ( isEven(sum)){

    result = 'even';

}else{

    result = 'odd';

};


if ( result === userChoise.toLocaleLowerCase()){

    document.getElementById('output').innerHTML = ('Hai vinto');
    document.getElementById('user-number').innerHTML = userNUmber;
    document.getElementById('pc-number').innerHTML = aINumber;
    document.getElementById('sum').innerHTML = sum;    

}else{

    document.getElementById('output').innerHTML = ('Ritenta, sarai + fortunato');
    document.getElementById('user-number').innerHTML = userNUmber;
    document.getElementById('pc-number').innerHTML = aINumber;
    document.getElementById('sum').innerHTML = sum;

};


function isEven(number){

    if(number % 2 === 0){

        return true;
    }
    
    return false;
};

function casual(massimo, minimo){

    return Math.floor(Math.random() * (massimo - minimo) + minimo);

}









