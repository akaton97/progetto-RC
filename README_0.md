# Movie Kraken 
## Progetto realizzato per il corso di Reti di Calcolatori; Sapienza di Roma.

il progetto consiste nella creazione di una web app che utilizzi un paradigma RESTFULL con api REST a protocollo CRUD.

## Requisiti

- [x] Il servizio REST deve offrire delle API esterne documentate e accessibili
- [x] Si deve interfacciare con almeno due servizi REST “esterni”, cioè non su localhost
- [x] Almeno uno dei servizi REST esterni deve essere “commerciale” (es: twitter, google, facebook, pubnub, parse, firbase etc)
- [x] Almeno uno dei servizi REST esterni deve richiedere oauth
- [x] Si devono usare Websocket e/o AMQP (o simili es MQTT)
- [x] Il progetto deve essere su GIT (GITHUB, GITLAB ...) e documentato con un README
- [x] Le API  REST implementate devono essere documentate su GIT e devono essere validate con un caso di test 

## Avvio

- Per installare le dipendenze eseguire `npm install`, queste verranno lette dal file _package.json_ e installate.
- Per avviare il server eseguire `npm start`

## Descrizione

Il progetto realizzato utilizza le API fornite da [https://www.themoviedb.org/]((https://www.edamam.com/) al fine di effettuare la ricerca dei film e delle serie TV nelle omonime categorie.

Inoltre vengono impiegate le API fornite da [https://www.facebook.com/](https://www.facebook.com/) al fine di poter accedere al sito e quindi alla Chat implementata attraverso WebSocket. Ciò viene effettuato utilizzando il protocollo OAuth e successivamente premendo il bottone Chat comparso dopo il login sulla navbar.

La pagina iniziale contiene i link per le sezioni film e serie TV, altrimenti raggiungibili tramite i due card appositi al centro della pagina. Il footer, a piè di pagina, contiene informazioni rigurdanti il sito. 

E' possibile effettuare una ricerca, tramite barra apposita, delle serie TV o dei film desiderati; verranno poi mostrate a schermo le informazioni associate attraverso il file risultato. 


## SignIn

![immagine1](https://github.com/akaton97/progetto-RC/blob/redme-branch/public/images/HomeRC.png)

Per effettuare l'accesso bisogna premere il pulsante login sulla navbar del sito, inserire l'email o numero di telefono di Facebook e la password.

![immagine1.2](https://github.com/akaton97/progetto-RC/blob/redme-branch/public/LogoutRC.png)

In alto a sinistra sulla navbar comparirà il pulsante Chat.

## Ricerca

![immagine2](https://github.com/akaton97/progetto-RC/blob/redme-branch/public/images/         NULL         )

Una volta giunti su una delle due pagine, si può o selezionare uno dei tre elementi posti in vetrina, oppure effettuare una ricerca tramite barra apposita.

![immagine2.2](https://github.com/akaton97/progetto-RC/blob/redme-branch/public/images/       NULL         )

In caso di insuccesso verrà mostrato un messaggio d'errore e un link permetterà di ritornare nella categoria precedentemente selezionata.

![immagine2.3](https://github.com/akaton97/progetto-RC/blob/redme-branch/public/images/Schermata_film.png)

Nel caso in cui la ricerca sia andata a buon fine verrà mostrato un elenco di film o serie TV, in base alla categoria visionata, che corrispondono al nome ricercato (NB: tutti gli elementi che conterrano la parola ricercata); è a questo punto possibile visionare il file risultato.

## Risultato

![immagine3](https://github.com/akaton97/progetto-RC/blob/redme-branch/public/images/Risultato_SerieTV.png)

Il risultato è composto dalla foto di copertina del film o della serie TV e dalle seguenti informazioni:
Nel caso in cui fosse stato richiesto un film viene fornito il Titolo, la Trama, la Data di uscita, il Produttore, il Genere e infine la Valutazione.

Nel caso in cui fosse stato richiesta una serie TV viene fornito il Titolo, la Trama, la Prima messa in onda, i Creatori, il Numero di episodi, la Valutazione e infine le Stagioni o gli episodi speciali.

## Chat

![immagine4](https://github.com/akaton97/progetto-RC/blob/redme-branch/public/images/Chatroom.png)

Il box della chat è costituita da una barra iniziale per inserire il nome utente che comparirà nella chat, una casella di testo in cui scrivere il messaggio da inviare e una finestra dinamica in cui compaiono i messaggi.
