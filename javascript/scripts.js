// richiesta nome
var name= parseInt(prompt("Inserisci il tuo nome:"));
// richiesta cognome
var surname= parseInt(prompt("Inserisci il tuo cognome:"));
// richiesta colore preferito
var color= parseInt(prompt("Inserisci il tuo colore preferito:"));
// inserimento dei valori ottenuti in un unica variabile
var password = name + surname + color + "40";
console.log(password);
// inserimento contenuto della variabile contenente tutto all'interno del contenuto del tag html