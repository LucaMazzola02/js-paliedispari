let parola = prompt('Inserisci una qualunque parola');

if(parola === wordReverser[parola]){

    console.log('la parola è palindroma');

  } else {

    console.log('la parola non è palindroma');

};
  
function wordReverser(wordToReverse){
  let reverseWord = "";
  for( let index = wordToReverse.length - 1 ; index >= 0 ; index--){
    reverseWord += wordToReverse[index];
  }

  return reverseWord;

};