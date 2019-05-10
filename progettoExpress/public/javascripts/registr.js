/*ISCRITTI*/

function resetStorageReg(){
    localStorage.reg = "[]";
}

function inizializzaStorageReg() { //RISOLTO.
    if(typeof(localStorage.reg)=="undefined"){
      localStorage.reg="[]"; 
      alert("localstorage creato")
    } 
}
   

function uguali(u,o){
    if(u.e == o.e) return true;
    return false;
}
  
function inserisciReg() {  //RISOLTO.
    if(document.signup.psw.value != document.signup.cpsw.value) {
        swal("Warning", "Le password non coincidono", "warning");
        //document.signup.psw.value="";  //document.nomeForm.campoNome.value
        //document.signup.cpsw.value="";
        //document.signup.psw.focus();
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
        }
    }
    u[nextpos]=o;
    localStorage.reg = JSON.stringify(u);
    alert("Iscrizione effettuata con successo");
    //swal("Good job", "Iscrizione effettuata con successo!", "success");
    window.location.href("/homepage.jade")
    alert("ok")
    return true;
}  