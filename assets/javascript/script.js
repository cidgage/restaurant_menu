  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOuSESzpoEB5uBaQoTj999OkbYTdV36Tc",
    authDomain: "restaurant-menu-889c1.firebaseapp.com",
    databaseURL: "https://restaurant-menu-889c1.firebaseio.com",
    projectId: "restaurant-menu-889c1",
    storageBucket: "",
    messagingSenderId: "351346849745"
  };
  firebase.initializeApp(config);

  var database = firebase.database()

  // var queryURL="https://www.zomato.com/&apikey=43766f39f91a89c030cfa51e6b49e21b";

  // $.ajax({
  //   url:queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   console.log(response)
  // });

  $("#addResBtn").on("click", function(event) {
    event.preventDefault();
  
    var partyName= $("#InputPartyName").val().trim();
    var partySize = $("#InputPartySize").val().trim();
    var resTime = $("#InputResTime").val().trim();
    
    
   var newRes = {
    name: partyName,
    size: partySize,
    time: resTime,
    
 
   }
  
  console.log(newRes);
   database.ref().push(newRes);
 
    $("#InputPartyName").val("");
    $("#InputPartySize").val("");
    $("#InputResTime").val("");
 
    return false;
 
  });
 
   database.ref().on("child_added", function(childSnapshot) {
 
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().size);
    console.log(childSnapshot.val().time);
 
  
    var partyName = childSnapshot.val().name;
    var partySize = childSnapshot.val().size;
    var resTime = childSnapshot.val().time;
 
    $("#new-res").append("<tr><td>" + partyName + "</td><td>" + partySize + "</td><td>"+ resTime + "</td></tr>");
 
  });