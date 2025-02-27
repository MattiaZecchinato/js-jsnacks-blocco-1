// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// inizialize and set to 0 variable count
let count = 0;

// iteration for 10 times
for (let i = 0; i < 10; i++) {

    // user input
    let input = prompt('Inserisci un numero');
    // convert user input from string to int
    let inputInt = parseInt(input);
    // sum user input to count
    count += inputInt;
}

// print the total sum
console.log(`La somma dei numeri inseriti è ${count}`);