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
var btnEnter;
var btnCancel;
var messageBox = document.getElementById('message-box');

// Var gioco dadi
var numberPlayer;
var numberNpc;
var btnPlay;

// Bottoni invio e annulla
btnEnter = document.getElementById('btnEnter');
btnCancel = document.getElementById('btnCancel');

btnEnter.addEventListener( 'click',
    function() {
        // 1. Acquisire email dall'utente
        userMail = document.getElementById('email').value;
        console.log(userMail);

        // 2. Verificare che sia nell'array
        for (var i = 0; i < accounts.length; i++) {
            if ( userMail === accounts[i]) {
                matchedAccount = true;
        
                // 3. Stampare messaggio di conferma
                messageBox.className = 'visible';
                message.className = 'visible';
                document.getElementById('message').innerHTML = 'Benvenuto ' + accounts[i] + '!'; 
            }
        }
        
        // Stampa messaggio di errore
        if (matchedAccount === false) {
            
            messageBox.className = 'visible';
            message.className = 'visible';
            console.log('errore');
            
            document.getElementById('message').innerHTML = 'Errore di autenticazione.'; 
        }
    }
);

btnCancel.addEventListener( 'click',
    function() {
        document.getElementById('email').value ='';

        //reset condizioni
        matchedAccount = false;
        messageBox.className = 'hidden';
    }
);

// 4. Generare due numeri casuali da 1 a 6

btnPlay = document.getElementById('btnPlay');

btnPlay.addEventListener( 'click',
    function() {
        dice.className = dice.classList + ' visible';
        numberPlayer = Math.floor((Math.random() * 6) + 1);
        numberNpc = Math.floor((Math.random() * 6) + 1);


        //Visualizzare numero
        document.getElementById('number-player').innerHTML = numberPlayer;
        document.getElementById('number-npc').innerHTML = numberNpc;
        console.log(numberPlayer, numberNpc);

        // 5. Stabilire vincitore (n più alto)
        if (numberPlayer > numberNpc) {
            document.getElementById('game-message').innerHTML = 'Hai vinto!';
        }   else if (numberPlayer < numberNpc) {
            document.getElementById('game-message').innerHTML = 'Hai perso!';
        }   else {
            document.getElementById('game-message').innerHTML = 'Avete pareggiato!';
            
        }
    }
);



