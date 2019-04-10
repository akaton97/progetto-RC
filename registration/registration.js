
  function onFailure(error) {
    console.log(error);
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById("profileID").innerHTML = profile.getName() +"<br>" + "<a href='mailto'" + profile.getEmail() + ">" +
    "</a>" + "</br>" + "<img src='" + profile.getImageUrl() + "'/>";
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}