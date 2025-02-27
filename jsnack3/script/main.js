// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let count = 0;

for (let i = 0; i < 10; i++) {

    let input = prompt('Inserisci un numero');
    inputInt = parseInt(input);
    count += inputInt;
}

console.log(`La somma dei numeri inseriti è ${count}`);