//FACEBOOK

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
      testAPI();
      setButtons(true)

    } else {
      // The person is not logged into your app or we are unable to tell.
      setButtons(false)

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

    });
  }

  function setButtons(log){
    if(log){  
      document.getElementById('chat').style.display='block';
      document.getElementById('film').style.display='block';
      document.getElementById('tvshow').style.display='block';
    }else{
      document.getElementById('chat').style.display='none';
      document.getElementById('film').style.display='none';
      document.getElementById('tvshow').style.display='none';
    }
  }