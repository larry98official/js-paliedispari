// verifica se una parola è polindroma
// 1 creo un prompt per richiedere parola
// 2 creo la funzione per invertire la parola
// 3

var parolaInserita = prompt('Inserisci una parola');
var parolaPalindroma = palindroma(parolaInserita);
console.log(parolaPalindroma);

if (parolaInserita == parolaPalindroma) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}


function palindroma(parola) {
    var parolaReverse = '';
    for (var i = parola.length - 1; i > 0; i--) {
        parolaReverse += parola[i];
    }
    return parolaReverse;
}



// prompt ---> “scegli Pari o Dispari”     --------> ES: Pari
// prompt ---> “Scegli un numero”         --------> ES: 5
// creo un numero RANDOM                --------> ES: 10
// 10 + 5 = 15 è un numero DISPARI
// log     -------->   Spiacente, hai scelto PARI,
// ma la somma del tuo numero e del mio numero random ha restituito un numero DISPARI, hai perso!!!

var scommessaUtente = prompt('Scegli pari o dispari');
var tuoNumero = parseInt(prompt('Scegli un numero da 1 a 5'));
var numeroRandom = generaRandomMinMax(1, 5);
var sommaNumeri = somma(tuoNumero, numeroRandom);
var risultato = pariDispari(sommaNumeri);

if (risultato === scommessaUtente.toLowerCase()) {
    console.log('Hai vinto');
} else {
    console.log('Non hai vinto');
}

function somma (valUno, valDue) {
    return valUno + valDue;
}

function pariDispari () {
    if (val % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}

// funzione che genera un numero random tra due valori dati in ingresso max min , estremi inclusi
function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min +1)) + min;
    return numeroRandom;
}
