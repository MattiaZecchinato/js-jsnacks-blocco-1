// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const firstInput = prompt('Inserisci un numero');
const secondInput = prompt('Inserisci un numero');

const firstInputInt = parseInt(firstInput);
const secondInputInt = parseInt(secondInput);

if (firstInputInt > secondInputInt) {

    console.log(`Il numero maggiore è ${firstInput}`);
}
else {

    console.log(`Il numero maggiore è ${secondInput}`);
}