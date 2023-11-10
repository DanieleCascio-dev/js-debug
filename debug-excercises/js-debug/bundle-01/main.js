/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/
loopToFive();

// ESERCIZIO 1
for (let i = 0; i > 5; i++) {  //i deve essere minore di 5, i < 5, altrimenti non stampa nulla poichè la condizione sarà sempre falsa
    console.log(i);
}


// ESERCIZIO 2
function addIfEven(num) { // 
    if (num % 2 = 0) { // l'operatore = assegna un valore, bisogna inserire === o == per confrontare
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) { //Mancano i ; all'interno del for (let i = 0; i < 5;++)
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) { // 1. non va inserita l'ultima ; // 2. va usato <= oppure i < numbers.lenght
        if (numbers % 2 = 0); { // 3. non va usato = ma === // 4. va usatp numbers[i] invece di numbers // 5. non va inserita la ;
            evenNumbers.push(i);
        }
        return evenNumbers; //6. il return va fuori dal ciclo for
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8] // 7.la funzione ritorna un array quindi va assehnata ad una variabile