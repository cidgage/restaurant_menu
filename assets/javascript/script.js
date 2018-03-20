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

  var database = firebase.database();

  // var queryURL="https://www.zomato.com/&apikey=43766f39f91a89c030cfa51e6b49e21b";

  // $.ajax({
  //   url:queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   console.log(response)
  // });

  $("#addTrainBtn").on("click", function(event) {
    event.preventDefault();
  
    var trainName= $("#exampleInputtrainName").val().trim();
    var destination = $("#exampleInputDestination").val().trim();
    var trainTime = $("#exampleInputtrainTime").val().trim();
    var frequency = $("#exampleInputFrequency").val().trim();
    
   var newTrain = {
    name: trainName,
    place: destination,
    trainTime: trainTime,
    freq: frequency
 
   }
  
  console.log(newTrain);
   database.ref().push(newTrain);
 
    $("#exampleInputtrainName").val("");
    $("#exampleInputDestination").val("");
    $("#exampleInputtrainTime").val("");
    $("#exampleInputFrequency").val("");
 
    return false;
 
  });
 
   database.ref().on("child_added", function(childSnapshot) {
 
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().trainTime);
    console.log(childSnapshot.val().frequency);
 
  
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().place;
    var trainTime = childSnapshot.val().trainTime;
    var frequency = childSnapshot.val().freq;
 
    var firstTimeConverted = moment(trainTime, "HH:mm");
 
    var currentTime = moment().format("HH:mm");
  
    var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
 
    var timeReminder = timeDiff % frequency;
 
    var minToTrain = frequency - timeReminder;
 
    var nextTrain = moment().add( minToTrain, "minutes").format("HH:mm");
 
    $("#trainTable").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>"+ frequency  + "</td><td>"  + nextTrain + "</td><td>" + minToTrain + "</td></tr>");
 
    });