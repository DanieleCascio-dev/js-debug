/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// // ESERCIZIO 1
function checkAge() {
  const myAge = 32;
  const message = "";

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = "Hai più di 18 anni!";
  }
}
checkAge();

// Questa funzione dovrebbe fare un check per controllare se il numero inserito è maggiore o minore di 18 MA non prende nessun valore in ingresso e non ritorna alcun valore, la variabile messagge deve essere un let e non un const altrimenti non può essere modificata. Ad ogni mdodo manca un return.

// ESERCIZIO 2
function printColorsNumber() {
  const colors = ["blue", "red", "yellow", "green", "black"];
  console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// Questa funzione stampa Nella mia palette ci sono 5 colori!

// ESERCIZIO 3
function addNumbers() {
  const userNumber = prompt("Inserisci un numero");
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// dobbiamo usare parseInt nel prompt per avere un numero e non una stringa altrimenti farà una concatenazione di stringhe es: se insersisco 2 il risultato sarà 212. sarebbe meglio usare un let total = 0, e poi total += userNumber + 12

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

//GrantAcces ha valore di una stringa e non booleano, andrebbe settato let grantAccess = false; 
// nel primo if stiamo settando un nuovo valore di string

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();
// Mnaca la graffa di chiusura finale e grantAccess va settato come valore booleano