// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


function motore_ricerca(autore, libro, cerca){
 
 
  /*concateno autore e libro */
  const stringa = autore + " " + libro; 
 
  /*levo le maiuscole*/
 const autore_libro= stringa.toLowerCase();
 const inserimento= cerca.toLowerCase();

 /* se la stringa concatenata è uguale alla parola inserita allora rispondi trovato       se è differente rispondi non trovato*/
 
 if (autore_libro == inserimento)
   {
     return "trovato !";

   } else{
        return "non trovato !"; 
     }
}

console.log(motore_ricerca("Dante", "Commedia", "dante commedia"));