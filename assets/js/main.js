//allerta messaggio
alert('Benvenuto!');

// prompt name request
var userName = prompt ("Inserisci il tuo nome");

//prompt last name request
var userLastName = prompt ('Inserisci il tuo cognome');

//prompt favourite colour request
var yourColour = prompt ('Inserisci il tuo colore preferito')

//var id name
document.getElementById('name').innerHTML = userName + '';

//var id last name
document.getElementById('lastname').innerHTML = userLastName;

//password id generator
document.getElementById('password').innerHTML = userName+userLastName+yourColour+1342;
