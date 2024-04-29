// PALINDROMA
// Chiedere all’utente di inserire una parola.
// let word = prompt('inserisci una parola')
let word = 'anna';
// console.log(word[0]);

// let wordReverse = '';
// for (let i = word.length - 1; i >= 0; i--) {
//     const element = word[i];
//     console.log(element);
//     wordReverse += word[i];
//     console.log(wordReverse);
// }

// if (word === wordReverse) {
//     console.log('Palindroma')
// } else {
//     console.log('Non Palindroma');
// }

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

console.log(palindromaOrNot(word))

// BONUS uso del ciclo.
// (Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.)