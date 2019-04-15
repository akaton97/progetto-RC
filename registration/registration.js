
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

var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'AIzaSyCYdv78ZfcuX8aJn7wDZVlQeRs6bBHUhes',
      'clientId': '396784371487-8nfv15leuls7jtlh1mtp6a7eevsj67om.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}