
  function onFailure(error) {
    alert(error)
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    window.location.href = "../homepage/homepage.html"
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}

var initClient = function() {
  gapi.load('auth2', function(){
      /**
       * Retrieve the singleton for the GoogleAuth library and set up the
       * client.
       */
      auth2 = gapi.auth2.init({
          client_id: '396784371487-m12odsnjlj8orvvh58bn21e13t0ji7dl.apps.googleusercontent.com'
      });

      // Attach the click handler to the sign-in button
      auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);
  })
}