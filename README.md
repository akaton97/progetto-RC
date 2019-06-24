# MOVIE KRAKEN
## progetto per Reti di Calcolatori
il progetto consiste nella creazione di una web app che utilizzi un paradigma RESTFULL con api REST a protocollo CRUD.
## Requisiti
1. Il servizio REST deve offrire delle API esterne documentate e accessibili
2.Si deve interfacciare con almeno due servizi REST “esterni”, cioè non su localhost
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
