// 1. Chiedere all'utente l'email
// 2. Verificare che sia all'interno dell'array
// 3. Se presente, stampare messaggio di conferma
// 4. Generare numeri random per i dadi
// 5. Stabilire il vincitore (n più alto)


// Inizializzazione variabili

// Var autenticazione email
var accounts = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
var userMail;
var matchedAccount = false;

// Var gioco dadi
var numberPlayer;
var numberNpc;


// 1. Chiedere all'utente di inserire la mail

userMail = prompt('Inserisci il tuo indirizzo email');

// 2. Verificare che sia nell'array

for (var i = 0; i < accounts.length; i++) {
    if ( userMail === accounts[i]) {
        matchedAccount = true;

        // 3. Stampare messaggio di conferma
        console.log('Benvenuto', accounts[i]); 
    }
}

// Stampa messaggio di errore
if (matchedAccount === false) {
    console.log('Errore di autenticazione');   
}

// 4. Generare due numeri casuali da 1 a 6

numberPlayer = Math.floor((Math.random() * 6) + 1);
numberNpc = Math.floor((Math.random() * 6) + 1);

console.log(numberPlayer, numberNpc);

if (numberPlayer > numberNpc) {
    console.log('Hai vinto!');
}   else if (numberPlayer < numberNpc) {
    console.log('Hai perso');
}   else {
    console.log('Avete pareggiato');
    
}


