//allerta messaggio
alert('Benvenuto!');

var userName = prompt ("Inserisci il tuo nome");
var userLastName = prompt ('Inserisci il tuo cognome');
var yourColour = prompt ('Inserisci il tuo colore preferito')
document.getElementById('name').innerHTML = userName + '';
document.getElementById('lastname').innerHTML = userLastName;
document.getElementById('password').innerHTML = userName+userLastName+yourColour+1342;
