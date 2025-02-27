// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// user input
const firstInput = prompt('Inserisci un numero');
const secondInput = prompt('Inserisci un numero');

// convert user input from string to int
const firstInputInt = parseInt(firstInput);
const secondInputInt = parseInt(secondInput);


if (firstInputInt > secondInputInt) {

    // print the greater number
    console.log(`Il numero maggiore è ${firstInput}`);
}
else if (secondInputInt > firstInputInt) {
    // print the greater number
    console.log(`Il numero maggiore è ${secondInput}`);
}
else {

    // print if are equal number
    console.log('I numeri sono equivalenti');
}