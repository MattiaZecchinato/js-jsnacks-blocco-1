// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
const firstInput = prompt('Inserisci un parola');
const secondInput = prompt('Inserisci un parola');

if (firstInput.length > secondInput.length) {

    console.log(`La parola più lunga è ${firstInput}`);
}
else {

    console.log(`La parola più lunga è ${secondInput}`);
}