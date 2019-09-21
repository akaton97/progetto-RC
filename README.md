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

- [The Movie DB](https://developers.themoviedb.org/3/getting-started/introduction)
- [Facebook API](https://developers.facebook.com/?locale=it_IT)

## Tecnologie usate

- [Node.js](https://nodejs.org/it/)
- [Express](https://expressjs.com/)
- [Jade](https://pugjs.org/api/getting-started.html)
- [Socket.io](https://socket.io/)
- [Bootstrap](https://getbootstrap.com/)

## Endpoints

### Films
* **URL:**
  /search/movie
* **Metodo:**
  'GET'
* **Parametri Url:**
  'Nome Film' = string
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** 
       {
            "page": 1,
            "results": [
              {
                "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
                "adult": false,
                "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
                "release_date": "2012-04-25",
                "genre_ids": [
                  878,
                  28,
                  12
                ],
                "id": 24428,
                "original_title": "The Avengers",
                "original_language": "en",
                "title": "The Avengers",
                "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
                "popularity": 7.353212,
                "vote_count": 8503,
                "video": false,
                "vote_average": 7.33
              },
              {
                "poster_path": "/7cJGRajXMU2aYdTbElIl6FtzOl2.jpg",
                "adult": false,
                "overview": "British Ministry agent John Steed, under direction from \"Mother\", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.",
                "release_date": "1998-08-13",
                "genre_ids": [
                  53
                ],
                "id": 9320,
                "original_title": "The Avengers",
                "original_language": "en",
                "title": "The Avengers",
                "backdrop_path": "/8YW4rwWQgC2JRlBcpStMNUko13k.jpg",
                "popularity": 2.270454,
                "vote_count": 111,
                "video": false,
                "vote_average": 4.7
              }, 
              
              ...
              
            "total_results": 14,
            "total_pages": 1
          }
* **Error Response**
  * **Code** 401 -> ERROR API KEY
  * **Content**
    {
      "status_message": "Invalid API key: You must be granted a valid key.",
      "success": false,
      "status_code": 7
    }
  * **Code** 404 -> ERROR NOT FOUND
  * **Content**
  {
    "status_message": "The resource you requested could not be found.",
    "status_code": 34
  }
 * **Esempio**
     "https://api.themoviedb.org/3/search/movie?api_key=807244b48f5as2431f123309248e6&language=it&query=Captain%20America&include_adult=false" 
### Film Details
* **URL:**
  /movie/{movie_id}
* **Metodo:**
  'GET'
* **Parametri Url:**
  'id film' = string
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content**
   {
      "adult": false,
      "backdrop_path": "/shg7ZGAGVxhM9ZfOtV6bp93QZwt.jpg",
      "belongs_to_collection": {
        "id": 285564,
        "name": "Jarhead Collection",
        "poster_path": "/aRFpBjCseFD6UmahAuLdqS7Or5q.jpg",
        "backdrop_path": "/ifSnip5tvaHvxLPAyjkiihE6T2I.jpg"
      },
      "budget": 72000000,
      "genres": [
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10752,
          "name": "War"
        }
      ],
      "homepage": null,
      "id": 25,
      "imdb_id": "tt0418763",
      "original_language": "en",
      "original_title": "Jarhead",
      "overview": "Jarhead is a film about a US Marine Anthony Swofford’s experience in the Gulf War. After putting up with an arduous boot camp, Swofford and his unit are sent to the Persian Gulf where they are eager to fight, but are forced to stay back from the action. Swofford struggles with the possibility of his girlfriend cheating on him, and as his mental state deteriorates, his desire to kill increases.",
      "popularity": 9.727,
      "poster_path": "/iEYnXqUsfTaKwO1svSa39Ap07of.jpg",
      "production_companies": [
        {
          "id": 33,
          "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
          "name": "Universal Pictures",
          "origin_country": "US"
        },
        {
          "id": 14440,
          "logo_path": null,
          "name": "Red Wagon Entertainment",
          "origin_country": ""
        },
        {
          "id": 1522,
          "logo_path": null,
          "name": "Neal Street Productions",
          "origin_country": "GB"
        },
        {
          "id": 19934,
          "logo_path": null,
          "name": "Motion Picture KAPPA Produktionsgesellschaft",
          "origin_country": ""
        }
      ],
      "production_countries": [
        {
          "iso_3166_1": "DE",
          "name": "Germany"
        },
        {
          "iso_3166_1": "US",
          "name": "United States of America"
        }
      ],
      "release_date": "2005-11-04",
      "revenue": 96889998,
      "runtime": 123,
      "spoken_languages": [
        {
          "iso_639_1": "en",
          "name": "English"
        },
        {
          "iso_639_1": "es",
          "name": "Español"
        },
        {
          "iso_639_1": "ar",
          "name": "العربية"
        },
        {
          "iso_639_1": "la",
          "name": "Latin"
        }
      ],
      "status": "Released",
      "tagline": "Welcome to the suck.",
      "title": "Jarhead",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 1334
    }
* **Error Response**
  * **Code** 401 -> ERROR API KEY
  * **Content**
    {
      "status_message": "Invalid API key: You must be granted a valid key.",
      "success": false,
      "status_code": 7
    }
  * **Code** 404 -> ERROR NOT FOUND
  * **Content**
    {
      "status_message": "The resource you requested could not be found.",
      "status_code": 34
    }
 * **Esempio**
    https://api.themoviedb.org/3/movie/25?api_key=807244b48f548asd245eab5dpijnf899248e6&language=en-US  
### Tv Shows
  * **URL:**
    /search/tv
  * **Metodo:**
    'GET'
  * **Parametri Url:**
    'nome tv show' = string
  * **Risposta con successo**
     * **Code** 200 -> OK
     * **Content**
      {
  "page": 1,
  "total_results": 221,
  "total_pages": 12,
  "results": [
    {
        "original_name": "Friends",
        "genre_ids": [
          35
        ],
        "name": "Friends",
        "popularity": 72.594,
        "origin_country": [
          "US"
        ],
        "vote_count": 1707,
        "first_air_date": "1994-09-22",
        "backdrop_path": "/efiX8iir6GEBWCD0uCFIi5NAyYA.jpg",
        "original_language": "en",
        "id": 1668,
        "vote_average": 7.9,
        "overview": "The misadventures of a group of friends as they navigate the pitfalls of work, life and love in Manhattan.",
        "poster_path": "/7buCWBTpiPrCF5Lt023dSC60rgS.jpg"
      },
      {
        "original_name": "Thomas & Friends",
        "genre_ids": [
          16
        ],
        "name": "Thomas & Friends",
        "popularity": 19.05,
        "origin_country": [
          "GB",
          "US"
        ],
        "vote_count": 29,
        "first_air_date": "1984-10-09",
        "backdrop_path": "/zIYvbWrFXdIANyxI0tENZOo40wA.jpg",
        "original_language": "en",
        "id": 2304,
        "vote_average": 6,
        "overview": "Thomas & Friends is a British children's television series, which had its first broadcast on the ITV network on 4 September 1984. It is based on The Railway Series of books by the Reverend Wilbert Awdry and his son, Christopher Awdry. These books deal with the adventures of a group of anthropomorphised locomotives and road vehicles who live on the fictional Island of Sodor. The books were based on stories Wilbert told to entertain his son, Christopher during his recovery from measles. From Series one to four, many of the stories are based on events from Awdry's personal experience.",
        "poster_path": "/7W3BOFklCri1Bg0yNTZXM3em1fK.jpg"
      },
      ...
      {
        "original_name": "Best Friends Whenever",
        "id": 62783,
        "name": "Best Friends Whenever",
        "popularity": 5.02,
        "vote_count": 11,
        "vote_average": 7.7,
        "first_air_date": "2015-06-26",
        "poster_path": "/88q1jmD895QpMxuYwdfIUr4cYuA.jpg",
        "genre_ids": [
          35,
          10751,
          10765
        ],
        "original_language": "en",
        "backdrop_path": "/x6Rd3XGUhFpICvq2LZcvSXNVazl.jpg",
        "overview": "The live-action comedy follows best friends Shelby and Cyd who, when their aspiring scientist friend Barry’s invention goes awry, gain the power to leap forward and backward in time whenever they want – and sometimes when they don’t. Now, they experience the twists and turns of friendship and must decide between fixing mistakes in the past or catching a glimpse of the future. While Barry and his assistant, Naldo, try to figure out how to replicate time travel for themselves, Cyd and Shelby use their newfound power to navigate high school life and Shelby’s mischievous twin brothers, Bret and Chet.",
        "origin_country": [
          "US"
        ]
      },
      {
        "original_name": "Franklin and Friends",
        "id": 46358,
        "name": "Franklin and Friends",
        "popularity": 1.226,
        "vote_count": 2,
        "vote_average": 5.5,
        "first_air_date": "2012-02-13",
        "poster_path": "/zqguMXkmOHM9VDdhz8CozSDG9C1.jpg",
        "genre_ids": [
          16
        ],
        ...
    }
* **Error Response**
  * **Code** 401 -> ERROR API KEY
  * **Content**
    {
      "status_message": "Invalid API key: You must be granted a valid key.",
      "success": false,
      "status_code": 7
    }
  * **Code** 404 -> ERROR NOT FOUND
  * **Content**
    {
      "status_message": "The resource you requested could not be found.",
      "status_code": 34
    }
 * **Esempio**  
    https://api.themoviedb.org/3/search/tv?api_key=807244b487024pok85eab5adgadg309248e6&language=en-US&query=friends&page=1
### Tv Shows
  * **URL:**
    /tv/{tv_id}
  * **Metodo:**
    'GET'
  * **Parametri Url:**
    'id Tv Show' = string
  * **Risposta con successo**
     * **Code** 200 -> OK
     * **Content**
     {
      "backdrop_path": "/wDYhc2hKnNCOCGVst8sXp7kK7u5.jpg",
      "created_by": [
        {
          "id": 1211936,
          "credit_id": "52532f8a19c2957940006873",
          "name": "Robert D. Cardona",
          "profile_path": null
        },
        {
          "id": 1211937,
          "credit_id": "52532f8c19c295794000687b",
          "name": "David Mitton",
          "profile_path": null
        }
      ],
      "episode_run_time": [
        15
      ],
      "first_air_date": "1988-11-26",
      "genres": [],
      "homepage": "",
      "id": 23,
      "in_production": false,
      "languages": [
        "en"
      ],
      "last_air_date": "1988-03-22",
      "last_episode_to_air": {
        "air_date": "1988-03-22",
        "episode_number": 13,
        "id": 42,
        "name": "4th of July",
        "overview": "An Ocean liner called Vienna is to come into Bigg City Port but Lillie Lightships needs to refuel, if there isn't a light Vienna can't come. Supplies are low, Ten Cents and Sunshine try to find oil for Lillie but they only find one which Zorran has and he won't give it to them, He says it's for Vienna. Sunshine knows where to find a light barge. Zip and Zug get the wrong end of the stick and trap Ten Cents and Sunshine by using a fire barge.\n\nBoth fleets are waiting anxiously for Vienna but there is no light. Luckily Warrior saves the day by setting his garbage barge alight for a light for Vienna. Ten Cents and Sunshine wait for the tide to set them free. Vienna comes to Bigg City, the tugs do their job and she goes on her way.",
        "production_code": "",
        "season_number": 1,
        "show_id": 23,
        "still_path": "/maLTEyq2su2IHv1pZ90PDcYH6Ou.jpg",
        "vote_average": 0,
        "vote_count": 0
      },
      "name": "Tugs",
      "next_episode_to_air": null,
      "networks": [
        {
          "name": "ABC",
          "id": 18,
          "logo_path": "/kMvN5R8g6L0SY5r9YZw9foYGQr0.png",
          "origin_country": "AU"
        }
      ],
      "number_of_episodes": 13,
      "number_of_seasons": 1,
      "origin_country": [
        "GB"
      ],
      "original_language": "en",
      "original_name": "Tugs",
      "overview": "Tugs is a British children's television series first broadcast in 1988. It was created by the producers of Thomas the Tank Engine & Friends, Robert D. Cardona and David Mitton. The series dealt with the adventures of two anthropomorphized tugboat fleets, the Star Fleet and the Z-Stacks, who compete against each other in the fictional Bigg City Port. The series was set in the Roaring Twenties, and was produced by Tugs Ltd., for TVS and Clearwater Features Ltd. Music was composed by Junior Campbell and Mike O'Donnell, who also wrote the music for Thomas the Tank Engine and Friends.\n\nDue to the bankruptcy of production company TVS, the series did not continue production past 13 episodes. Following the initial airing of the series throughout 1988, television rights were sold to an unknown party, while all models and sets from the series sold to Britt Allcroft. Modified set props and tugboat models were used in Thomas the Tank Engine and Friends from 1991 onwards, with footage from the original program being heavily dubbed and edited for use in American children's series Salty's Lighthouse. Mitton returned to working with Thomas & Friends in 1991, while Cardona would go on to direct Theodore Tugboat, a similarly natured animated series set in Canada. All thirteen episodes of the show were released on VHS between 1988 and 1993.",
      "popularity": 5.552,
      "poster_path": "/mMWOGVORdA1Si8PvK74OzTOc617.jpg",
      "production_companies": [],
      "seasons": [
        {
          "air_date": "1989-04-04",
          "episode_count": 13,
          "id": 1,
          "name": "Season 1",
          "overview": "",
          "poster_path": null,
          "season_number": 1
        }
      ],
      "status": "Ended",
      "type": "Scripted",
      "vote_average": 10,
      "vote_count": 1
    }
* **Error Response**
  * **Code** 401 -> ERROR API KEY
  * **Content**
    {
      "status_message": "Invalid API key: You must be granted a valid key.",
      "success": false,
      "status_code": 7
    }
  * **Code** 404 -> ERROR NOT FOUND
  * **Content**
    {
      "status_message": "The resource you requested could not be found.",
      "status_code": 34
    }
 * **Esempio**  
    https://api.themoviedb.org/3/tv/23?api_key=807244b48f548385eab5d1asfgatg3e9248e6&language=en-US
