  function mostraFilm(fj) {

    //var films = fj;
    alert("dioooo")
    alert(JSON.parse(fj));
    return false;
  }

  function addFilmz(j){
    if(j == "[]" || j == null){
      window.href = "/views/film.jade"
    }else{
      var lenght = j.length()
      var i = 0
      while(i<lenght)
      $("#filmz").append(

      )
      i++
    }
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
