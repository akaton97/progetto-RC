function initializeStorage() {
    if (typeof sessionStorage.recipes == "undefined") {
      sessionStorage.recipes = "[]";
    }
    if (sessionStorage.recipes == "[]") {
      $("#sessionStorage").css("display", "none");
    }
    if (sessionStorage.recipes != "[]") {
      printStorage();
    }
  }

  function addStorage() {
    var x = document.getElementById("product_name").value.trim();
    if (x == "") {
      alert("Product name must be filled out");
      return false;
    }
    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    var u = JSON.parse(sessionStorage.recipes);
    var o = {
      product: x,
      date: datetime
    };

    u.unshift(o);
    var len = u.length;
    while (len > 5) {
      u.pop();
      len--;
    }
    sessionStorage.recipes = JSON.stringify(u);
    return true;
  }

  function printStorage() {
    var u = JSON.parse(sessionStorage.recipes);
    var l = u.length;
    var s = String("<h3>Search History: </h3>");
    var i = 0;
    while (i < l) {
      s +=
        "<div><strong>Product: </strong>" +
        "<span style='display:inline'>" +
        u[i].product +
        "</span>" +
        "<strong> Searched at: </strong>" +
        "<span style='display:inline'>" +
        u[i].date +
        "</div>";
      i++;
    }
    document.getElementById("sessionStorage").innerHTML = s;
    return true;
  }
