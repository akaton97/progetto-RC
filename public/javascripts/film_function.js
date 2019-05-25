  function addFilmz(j){
    if(j == "[]" || j == null){
      window.href = "/views/film.jade"
    }else{
      var lenght = j.length()
      var i = 0
      while(i<lenght)
      $("#filmz").append(
        .row
            .col-sm
              a(href=link1,class='ricetta')
                div(class="res")
                  img(src = img1,class="img")
                  p #{fileJson1}
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
