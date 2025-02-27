// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

// inizialize empty array
const array = [];

// iteration for 6 times
for (let i = 0; i < 6; i++) {

    // user input
    let input = prompt('Inserisci un numero');
    // convert user input from string to int
    let inputInt = parseInt(input);
    
    if (inputInt % 2 === 1) {

        // add an element to the array
        array.push(inputInt);
    }
}

// print the array
console.log(array);