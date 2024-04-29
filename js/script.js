// PALINDROMA
// Chiedere all’utente di inserire una parola.

// let word = document.querySelector('#wordAdd').value;
const myform = document.querySelector('form');
// console.log(word[0]);

// Creare una funzione per capire se la parola inserita è palindroma.
function palindromaOrNot(parola) {

    //la parola/frase al contrario
    let wordReverse = '';

    for (let i = parola.length - 1; i >= 0; i--) {
        const element = parola[i];
        // console.log(element);
        wordReverse += parola[i];
        // console.log(wordReverse);
    }

    //controllo che la parola/frase sia uguale a quella al contrario
    if (parola === wordReverse) {
        return ('Palindroma')
    } else {
        return ('Non Palindroma');
    }
}


//creazione bottone per inviare la risposta inserita dall'utente

const myResult = document.getElementById('result');

myform.addEventListener('submit', function (prevenzione) {
    
    let word = document.querySelector('#wordAdd').value;

    prevenzione.preventDefault();

    let risultato = palindromaOrNot(word);
    myResult.innerHTML = risultato;
})

// BONUS uso del ciclo.
// (Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.)
// ciclo while



//////////////////////////////////////////////////////////////
//             GIOCO D'AZZARDO

//l'utente seleziona pari o dispari



//l'utente seleziona un numero tra 1 e 5
let numUser = 2

//il computer estrae un numero random tra 1 e 5
let numRobot = numRandom();

function numRandom() {
    return Math.floor((Math.random() * 5) + 1);
}
console.log(numRobot);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

const numSomma = numUser + numRobot;

console.log(EvenOrOdd(numSomma));

//funzione per verifica numero pari o dispari
function EvenOrOdd(num) {
    if (num % 2 == 0) {
        return 'pari'
    }
    return 'dispari'
}

//Dichiariamo chi ha vinto.