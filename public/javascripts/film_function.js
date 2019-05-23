function initializeStorage() {
    if (typeof sessionStorage.recipes == "undefined") {
      sessionStorage.recipes = "[]";
    }
    if (sessionStorage.recipes == "[]") {
      $("#sessionStorage").css("display", "none");
    }
  }

  function addStorage(fj) {

    //var films = fj;
    alert("dioooo")
    alert(JSON.parse(fj));
    return false;
  }




/*    var u = JSON.parse(sessionStorage.recipes);
    var o = null;

    u.unshift(o);
    var len = u.length;
    while (len > 5) {
      u.pop();
      len--;
    }
    sessionStorage.recipes = JSON.stringify(u);
    return true;
  }*/
