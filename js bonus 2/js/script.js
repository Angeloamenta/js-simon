const button = document.querySelector(".button-play");
const numbersCell = document.querySelector(".numbers");
const numbers = [];
const listNumbers = [];

button.addEventListener("click", function () {
    const difficulty = document.getElementById("difficulty").value;
    let cell = document.createElement("div");
    cell.classList.add("cell");
    console.log(difficulty);
    if (difficulty == "easy") {
        while (numbers.length < 5) {
            const number = Math.floor(Math.random() * 10) + 1; 
            console.log('numero generato', number);
            if (numbers.includes(number) == false) { 
              numbers.push(number);
              numbersCell.innerHTML += `
              <div class="cell"><h2>${number}</h2> </div>
              `;

            }

        }
        setTimeout(myFunction, 3000);
        function myFunction(){
          numbersCell.innerHTML = "";

          console.log("numeri random", numbers);
          
          let time = 10;

          const timer = setInterval(() => {
              if (time > 0) {
                  time -= 1;
                  numbersCell.innerHTML = `Tienili a mente per ${time} secondi`;
                  console.log(time)
              }else{

                  clearInterval(timer) 

                  for (let i = 0; i < 5; i++) {
                      let userNumbers = parseInt(prompt("inserisci 5 numeri"));
                      console.log(userNumbers);
                      
                      for (let x = 0; x < 5; x++) {
                          if (userNumbers == numbers[x]) {
                              listNumbers.push(userNumbers);
                              
                          }else if (userNumbers <= 0){
                              while (userNumbers <= 0 ) {
                                  userNumbers = parseInt(prompt("inserisci un numero maggiore di 0"));}
                          }else if (isNaN(userNumbers) == true){
                              while (isNaN(userNumbers) == true) {
                                  userNumbers = parseInt(prompt("inserisci 1 numero"));}
                          }else if (userNumbers == listNumbers[x]){
                              while (userNumbers == listNumbers[x]) {
                                  userNumbers = parseInt(prompt("numero già inserito"));}
                          }
                      }
                  }
      
                  console.log("numeri utente", listNumbers);
                  
                  console.log(listNumbers);
                  numbersCell.innerHTML = `<h1>Hai indovinato ${listNumbers.length} numeri. <br>
                     I numeri indovinati sono: ${listNumbers}</h1>`
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
      } else if (difficulty == "medium") {
        while (numbers.length < 7) {
            const number = Math.floor(Math.random() * 30) + 1; 
            console.log('numero generato', number);
            if (numbers.includes(number) == false) { 
              numbers.push(number);
              numbersCell.innerHTML += `
              <div class="cell"><h2>${number}</h2> </div>
              `;

            }

        }
        setTimeout(myFunction, 3000);
        function myFunction(){
          numbersCell.innerHTML = "";

          console.log("numeri random", numbers);
          
          let time = 10;

          const timer = setInterval(() => {
              if (time > 0) {
                  time -= 1;
                  numbersCell.innerHTML = `Tienili a mente per ${time} secondi`;
                  console.log(time)
              }else{

                  clearInterval(timer) 

                  for (let i = 0; i < 7; i++) {
                      let userNumbers = parseInt(prompt("inserisci 5 numeri"));
                      console.log(userNumbers);
                      
                      for (let x = 0; x < 7; x++) {
                          if (userNumbers == numbers[x]) {
                              listNumbers.push(userNumbers);
                              
                          }else if (userNumbers <= 0){
                              while (userNumbers <= 0 ) {
                                  userNumbers = parseInt(prompt("inserisci un numero maggiore di 0"));}
                          }else if (isNaN(userNumbers) == true){
                              while (isNaN(userNumbers) == true) {
                                  userNumbers = parseInt(prompt("inserisci 1 numero"));}
                          }else if (userNumbers == listNumbers[x]){
                              while (userNumbers == listNumbers[x]) {
                                  userNumbers = parseInt(prompt("numero già inserito"));}
                          }
                      }
                  }
      
                  console.log("numeri utente", listNumbers);
                  
                  console.log(listNumbers);
                  numbersCell.innerHTML = `<h1>Hai indovinato ${listNumbers.length} numeri. <br>
                     I numeri indovinati sono: ${listNumbers}</h1>`
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
      } if (difficulty == "hard") {
        while (numbers.length < 8) {
            const number = Math.floor(Math.random() * 50) + 1; 
            console.log('numero generato', number);
            if (numbers.includes(number) == false) { 
              numbers.push(number);
              numbersCell.innerHTML += `
              <div class="cell"><h2>${number}</h2> </div>
              `;

            }

        }
        setTimeout(myFunction, 3000);
        function myFunction(){
          numbersCell.innerHTML = "";

          console.log("numeri random", numbers);
          
          let time = 10;

          const timer = setInterval(() => {
              if (time > 0) {
                  time -= 1;
                  numbersCell.innerHTML = `Tienili a mente per ${time} secondi`;
                  console.log(time)
              }else{

                  clearInterval(timer) 

                  for (let i = 0; i < 8; i++) {
                      let userNumbers = parseInt(prompt("inserisci 5 numeri"));
                      console.log(userNumbers);
                      
                      for (let x = 0; x < 8; x++) {
                          if (userNumbers == numbers[x]) {
                              listNumbers.push(userNumbers);
                              
                          }else if (userNumbers <= 0){
                              while (userNumbers <= 0 ) {
                                  userNumbers = parseInt(prompt("inserisci un numero maggiore di 0"));}
                          }else if (isNaN(userNumbers) == true){
                              while (isNaN(userNumbers) == true) {
                                  userNumbers = parseInt(prompt("inserisci 1 numero"));}
                          }else if (userNumbers == listNumbers[x]){
                              while (userNumbers == listNumbers[x]) {
                                  userNumbers = parseInt(prompt("numero già inserito"));}
                          }
                      }
                  }
      
                  console.log("numeri utente", listNumbers);
                  
                  console.log(listNumbers);
                  numbersCell.innerHTML = `<h1>Hai indovinato ${listNumbers.length} numeri. <br>
                     I numeri indovinati sono: ${listNumbers}</h1>`
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
      }
})