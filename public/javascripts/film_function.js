function initializeStorage() {
    if (typeof sessionStorage.recipes == "undefined") {
      sessionStorage.recipes = "[]";
    }
    if (sessionStorage.recipes == "[]") {
      $("#sessionStorage").css("display", "none");
    }
  }

  function addStorage() {
    var x = document.getElementById("product_name").value.trim();
    if (x == "") {
      alert("Product name must be filled out");
      return false;
    }

    var u = JSON.parse(sessionStorage.recipes);
    var o = x;

    u.unshift(o);
    var len = u.length;
    while (len > 5) {
      u.pop();
      len--;
    }
    sessionStorage.recipes = JSON.stringify(u);
    return true;
  }
