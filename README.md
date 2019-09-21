# MOVIE KRAKEN
## progetto per Reti di Calcolatori
il progetto consiste nella creazione di una web app che utilizzi un paradigma RESTFULL con api REST a protocollo CRUD.
## Requisiti
1. Il servizio REST deve offrire delle API esterne documentate e accessibili
2. Si deve interfacciare con almeno due servizi REST “esterni”, cioè non su localhost
3. Almeno uno dei servizi REST esterni deve essere “commerciale” (es: twitter, google, facebook, pubnub, parse, firbase etc)
4. Almeno uno dei servizi REST esterni deve richiedere oauth
5. Si devono usare Websocket e/o AMQP (o simili es MQTT)
6. Il progetto deve essere su GIT (GITHUB, GITLAB ...) e documentato con un README
7. Le API  REST implementate devono essere documentate su GIT e devono essere validate con un caso di test 
## Avvio
- Per installare le dipendenze eseguire `npm install`, verranno lette dal file _package.json_ e installate.
- Per avviare il server eseguire `npm start`
## Descrizione
Il progetto realizzato utilizza le API fornite da [https://www.themoviedb.org/]((https://www.edamam.com/), per la ricerca dei film e la stampa a schermo delle informazioni sui singoli film, e da [https://www.facebook.com/](https://www.facebook.com/)
Si potraà fare una ricerca, tramite barra apposita, delle serie tv o dei film desiderati che verranno poi mostrati a schermo. Sarà possibile muoversi fra le principali categorie proposte da The Movie DB (ovvero film e serie tv). 
Infine bisognerà effettuare l'accesso tramite OAUTH per poter accedere ad una chatroom realizzata tramite websocket.

La pagina iniziale contiene i link per le sezioni "film" e "serie tv", altrimenti raggiungibili tramite i due card appositi al centro della pagina. Il footer contiene informazioni varie sul sito. Inoltre è presente un pulsante "sign up" che permette di registrarsi e di accedere alla chatroom.
## SignIn
![immagine1] 
Per poter accedere alla sezione "chatroom", o fare l'accesso in generale, bisogna effettiame il signup o signin tramite l'apposita pagina, dove sarà possibile accedere tramite servizio social esterno (Facebook)
## ricerca Film/Serie Tv
![immagine2] 
una volta giunti su una delle due pagine, si può o selezionare uno dei tre elementi posti in vetrina, oppure effettuare una ricerca tramite barra apposita.
![immagine3] 
se non sarà inserito nulla, verrà mostrato un messaggio d'errore
![immagine4]
nel caso in cui la ricerca sia andata a buon fine, verrà mostrato un elenco di film/serie tv che corrispondono a al nome ricercato (nb tutti gli elementi che conterrano la parola ricercata) 

## API reference

Le API utilizzate nel sito sono:

- [The Movie DB](https://www.themoviedb.org/documentation/api?language=it-IT)
- [Facebook API](https://developers.facebook.com/?locale=it_IT)

## Tecnologie usate

- [Node.js](https://nodejs.org/it/)
- [Express](https://expressjs.com/)
- [Jade](https://pugjs.org/api/getting-started.html)
- [Socket.io](https://socket.io/)
- [Bootstrap](https://getbootstrap.com/)
