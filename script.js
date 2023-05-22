let parola = prompt('Inserisci una qualunque parola');

let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){

    console.log('la parola è palindroma');

  } else {

    console.log('la parola non è palindroma');

};
  
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  
  return strInversa;
};