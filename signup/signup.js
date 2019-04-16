
  function onFailure(error) {
    alert(error)
}

/**
 * Handle successful sign-ins.
 */
var onSuccess = function(user) {
  console.log('Signed in as ' + user.getBasicProfile().getName());
};

/**
* Handle sign-in failures.
*/
var onFailure = function(error) {
  console.log(error);
};

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    if(auth2.isSignedIn.get())
      window.location.href= "../homepage/homepage.html"
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert('User signed out.');
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

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}


  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      setButtons(true)
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      setButtons(false);
    }
  }

  function setButtons(isLoggedIn){
      if(isLoggedIn){
        document.getElementById("logout").style.display='block';
        document.getElementById("fb-button").style.display='none';
      }
      else{
        document.getElementById("logout").style.display='none';
        document.getElementById("fb-button").style.display='block';
      }
    }

      function logout(){
          FB.logout(function(response){
              setButtons(false)
          })
      }

      function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=name,email', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('profile').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }