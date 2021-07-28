// richiesta nome
var nome= (prompt("Inserisci il tuo nome:"));
// richiesta cognome
var surname= (prompt("Inserisci il tuo cognome:"));
// richiesta colore preferito
var color= (prompt("Inserisci il tuo colore preferito:"));
// inserimento dei valori ottenuti in un unica variabile
var passwordGenerated = nome + surname + color + "40";
// inserimento contenuto della variabile contenente tutto all'interno del contenuto del tag html
document.getElementById("password").innerHTML += passwordGenerated;