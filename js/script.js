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

const dadiForm = document.getElementById('dadiForm');

dadiForm.addEventListener('submit', function (prevenzione) {
    prevenzione.preventDefault();

    //l'utente seleziona pari o dispari
    const odd = document.getElementById('dispari').checked;
    const even = document.getElementById('pari').checked;
    console.log('dispari', odd, 'pari', even);

    //l'utente seleziona un numero tra 1 e 5
    let numUser = parseInt(document.getElementById('numAdd').value);
    console.log('user:', numUser, typeof numUser);

    //il computer estrae un numero random tra 1 e 5
    let numRobot = numRandom();
    console.log('il numero Robot è:', numRobot);

    //Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
    const numSomma = numUser + numRobot;
    console.log('la somma è:', numSomma, typeof numSomma);

    //Dichiariamo chi ha vinto.
    if (odd == false && even == false) {
        console.log('Null');
    } else {
        if (EvenOrOdd(numSomma) == 'pari' && even == true) {
            console.log('hai vinto con pari')
        } else if (EvenOrOdd(numSomma) == 'dispari' && odd == true) {
            console.log('hai vinto con dispari')
        } else {
            console.log('hai perso')
        }
    }
})


//funzione per verifica numero pari o dispari
function EvenOrOdd(num) {
    if (num % 2 == 0) {
        return 'pari'
    }
    return 'dispari'
}

//funzione per l'estrazione di un numero random da 1 a 5
function numRandom() {
    return Math.floor((Math.random() * 5) + 1);
}