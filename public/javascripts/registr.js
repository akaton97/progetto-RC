/*ISCRITTI*/

function resetStorageReg(){
    localStorage.reg = "[]";
}

function inizializzaStorageReg() { //RISOLTO.
    if(typeof(localStorage.reg)=="undefined"){
      localStorage.reg="[]"; 
    } 
}
   

function uguali(u,o){
    if(u.e == o.e) return true;
    return false;
}
  
function inserisciReg() {  //RISOLTO.
    if(document.signup.psw.value != document.signup.cpsw.value) {
        swal("Warning", "Le password non coincidono", "warning");
        document.signup.psw.value="";
        document.signup.cpsw.value="";
        return false;
        }
    var u = JSON.parse(localStorage.reg);  //mail salvata nello storage
    var nextpos = u.length;
    var o ={e:document.signup.email.value,
            p:document.signup.psw.value
           }
    for(i=0; i<nextpos; i++) {
        if(uguali(u[i],o)) {
            swal("Warning", "Indirizzo e-mail già attivo", "warning");
            document.signup.email.value="";
            document.signup.psw.value="";
            document.signup.cpsw.value="";
            return false;
            function inizializzaStorageAcc(){
              if(typeof(localStorage.acc)=="undefined"){
                localStorage.acc="[]"; 
               }
            }
            
        }
    }
    u[nextpos]=o;
    localStorage.reg = JSON.stringify(u);
    alert("Iscrizione effettuata con successo");
    //swal("Good job", "Iscrizione effettuata con successo!", "success")
    alert("verrai reindirizzato alla pagina di login");
    return true;
}  




//GESTIONE ACCESSI


function resetStorageAcc(){
    localStorage.acc = "[]";
}


function inizializzaStorageAcc(){
    if(typeof(localStorage.acc)=="undefined"){
        localStorage.acc="[]"; 
    }
}
  
function inizializzaStorageAcc(){
    if(typeof(localStorage.acc)=="undefined"){
      localStorage.acc="[]"; 
     }
  }
  
function inizializzaStorageAcc(){
  if(typeof(localStorage.acc)=="undefined"){
    localStorage.acc="[]"; 
   }
}
