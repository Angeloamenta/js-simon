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
let daIndovinare = 0;
let indovinati = 0;
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
// imposto un timer e faccio sparire il contenuto con innerHTML sostituendo con una stringa vuota
setTimeout(myFunction, 3000);

function myFunction(){
    container.innerHTML = "";
    // chiedo al''utente di inserire 5 numeri e lo faccio con un prompt ed un for che cicla per 5 volte la domanda

    // dopo aver tentato con JSON.stringify, faccio un ciclo for di 5 ( ovvero i numeri presenti nell'array numbers, si sarebbe potuto usare anche .length).
    // girando sull'array ogni volta che;
    let time = 30;

    const timer = setInterval(() => {
        if (time > 0) {
            time -= 1;
            console.log(time)
        }else{
            clearInterval(timer)
            for (let i = 0; i < 5; i++) {
                let userNumbers = parseInt(prompt("inserisci 5 numeri"));
                console.log(userNumbers);
                for (let x = 0; x < numbers.length; x++) {
                    if (userNumbers == numbers[x]) {
                        listNumbers.push(userNumbers);
                        
                    }
                       
                }
            }


            
            console.log(listNumbers);
            container.innerHTML = `<h1>Hai indovinato ${listNumbers.length} numeri. <br>
               I numeri che hai indovinati sono: ${listNumbers}</h1>`
            // dopo l'operazione descritta sopra vado a sovrascrivere l'html ed inserisco grazie ai `backtick` il mio testo: con il numero degli elementi indovinati (listNumbers.length) ed i numeri indovinati (listNumbers)
            
            // if (listNumbers.length > 0) {
            //    container.innerHTML = `<h1>Hai indovinato ${listNumbers.length} numeri. <br>
            //    I numeri che hai indovinati sono: ${listNumbers}</h1>`
            // } else {
            //    container.innerHTML = `<h1>Hai indovinato ${listNumbers.length} numeri.</h1>`
            // }
        }

     }, 1000);
 
}
console.log(JSON.stringify(numbers));
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// quindi.. devo cercare sul mio array iniziale e confrontare se sono presenti i numeri che il mio utente ha inserito