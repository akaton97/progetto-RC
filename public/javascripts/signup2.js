/*ISCRITTI*/
  function inizializzaStorageReg() { 
   if(typeof(localStorage.reg)=="undefined"){
     localStorage.reg="[]"; 
    }
  }
  
  function uguali(u,o){
    if(u.e == o.e) return true;
    return false;
  }
 
  function inserisciReg() {  //SIGN UP
    if(document.signup.psw.value != document.signup.cpsw.value) {
    swal("Warning", "Le password non coincidono", "warning");
    //alert("le password non coincidono");
      document.signup.psw.value="";  //document.nomeForm.campoNome.value
      document.signup.cpsw.value="";
      document.signup.psw.focus();
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
      return true;
   }
     
  //LOGIN CHECK
  function ugualidue(u,o){  
    if(u.e==o.e && u.p==o.p) return true;
    return false;
  }
  
  function logCheck(){  //LOGIN
    var u = JSON.parse(localStorage.reg);  //mail salvata nello storage
    var nextpos = u.length;
    var o = { e:document.login.email.value,
              p:document.login.psw.value
              }  //mail inserita
  
    for(i=0; i<nextpos; i++) {
      if(ugualidue(u[i],o)){
        alert("Accesso effettuato con successo");
        //swal("Good job", "Accesso effettuato con successo", "success");
        var x = JSON.parse(localStorage.acc);
        var pos = x.length;
        x[pos]='true';
        localStorage.acc = JSON.stringify(x);
        return true;
        
      }
    }
    swal("Oops...", "Email o password errata", "error");
    document.login.psw.value="";
    return false;
  }
  
  function inizializzaStorageAcc(){
    if(typeof(localStorage.acc)=="undefined"){
      localStorage.acc="[]"; 
     }
  }

  //LOGOUT
  function gestisciAcc(){
    var x = JSON.parse(localStorage.acc);
    if(x!="") {
      document.getElementById("userlog").innerHTML =   '<a onclick="resetStorageAcc();>Logout</a>';
    }
    return true;
  }

  function resetStorageAcc(){
    var domanda =confirm("Sei sicuro di uscire?")
    if(domanda == true){
    localStorage.acc="[]";
    window.location.reload()
    }
    
  }