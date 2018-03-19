  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0lJ0692c46AdStIP6c8MgSYZEF7P7e-Y",
    authDomain: "project-1-6583a.firebaseapp.com",
    databaseURL: "https://project-1-6583a.firebaseio.com",
    projectId: "project-1-6583a",
    storageBucket: "project-1-6583a.appspot.com",
    messagingSenderId: "916964143148"
  };
  firebase.initializeApp(config);

  var queryURL="https://www.zomato.com/&apikey=43766f39f91a89c030cfa51e6b49e21b";

  $.ajax({
    url:queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
  });