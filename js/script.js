// PALINDROMA
// Chiedere all’utente di inserire una parola.
// let word = prompt('inserisci una parola')
let word = 'anna';
// console.log(word[0]);

let wordReverse = '';
for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];
    console.log(element);
    wordReverse += word[i];
    console.log(wordReverse);
}

if (word === wordReverse) {
    console.log('Palindroma')
} else {
    console.log('Non Palindroma');
}




// Creare una funzione per capire se la parola inserita è palindroma.


// BONUS uso del ciclo.
// (Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.)