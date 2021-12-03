// Descrizione:
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// visualizzo in pagina 5 numeri 
// prendo il container in html e lo seleziono per mettere dentro i numeri
const container = document.querySelector(".container");
// creo array per conservare i numeri da usare per il confronto
const numbers = [];
const listNumbers = [];

// inserisco 5 numeri casuali dentro container. uso un array per conservarli in memoria
while (numbers.length < 5) {
    const number = Math.floor(Math.random() * 10) + 1; 
    console.log('numero generato', number);
    if (numbers.includes(number) == false) { 
      numbers.push(number);
      container.innerHTML = `<h1>${numbers}</h1>`;
    }
}

console.log(numbers.length);
console.log("lista numeri ", numbers);

// dopo 30 secondi il contenuto di container sparisce
