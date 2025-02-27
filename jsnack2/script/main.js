// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// user input
const firstInput = prompt('Inserisci un parola');
const secondInput = prompt('Inserisci un parola');

if (firstInput.length > secondInput.length) {

    // print the longest word
    console.log(`La parola più lunga è ${firstInput}`);
    console.log(`La parola più corta è ${secondInput}`);
}
else if (secondInput.length > firstInput.length) {

    // print the longest word
    console.log(`La parola più lunga è ${secondInput}`);
    console.log(`La parola più corta è ${firstInput}`);
}
else {

    // print if are equal
    console.log('Le parole hanno la stessa lunghezza');
}