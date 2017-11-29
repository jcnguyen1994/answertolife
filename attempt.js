var elLocation = document.getElementById("locationType");
var elKey = document.getElementById("uniqueKey");
var elDate = document.getElementById("reportDate");
var elZip = document.getElementById("zipCode");
var elAddress = document.getElementById("address");
var elCity = document.getElementById("city");
var elLatitude = document.getElementById("latitude");
var elLongitude = document.getElementById("longitude");
var childrenCount;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $(".login-cover").hide();
  } else {
    // No user is signed in.
		var dialog = document.querySelector('#loginDialog');
		dialog.showModal();
  }
});

$("#loginBtn").click(
	function() {
		var email = $("#loginEmail").val();
		var password = $("#loginPassword").val();
		if (email != "" && password != "") {
			$("#loginProgress").show();
			$("#loginBtn").hide();
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        $("#loginError").show().text(error.message);
        $("#loginProgress").hide();
  			$("#loginBtn").show();
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    }


	}
);


$("#logoutBtn").click(

  function() {
    firebase.auth().signOut();
    window.location = "index.html";
    $("#loginProgress").hide();
    $("#loginBtn").show();
    $("#loginForm")[0].reset();
    }

);
$("#reportSighting").on('click', function(){
     var loco = elLocation.value;
     var keykey = elKey.value;
     var datedate = elDate.value;
     var zipzip = elZip.value;
     var addadd = elAddress.value;
     var citcit = elCity.value;
     var latlat = elLatitude.value;
     var longlong = elLongitude.value;
     var firebaseRef = firebase.database().ref("Sightings");
     firebaseRef.on("value", function(snapshot) {
       childrenCount = snapshot.numChildren().toString();
       firebaseRef.child(childrenCount).child("Unique Key`:").set(keykey);
       firebaseRef.child(childrenCount).child("Location Type:").set(loco);
       firebaseRef.child(childrenCount).child("Date:").set(datedate);
       firebaseRef.child(childrenCount).child("Zipcode:").set(zipzip);
       firebaseRef.child(childrenCount).child("Address:").set(addadd);
       firebaseRef.child(childrenCount).child("City:").set(citcit);
       firebaseRef.child(childrenCount).child("Latitude:").set(latlat);
       firebaseRef.child(childrenCount).child("Longitude:").set(longlong);
     });
     // firebaseRef.child(childrenCount).child("Unique Key`:").set(keykey);
     // firebaseRef.child(childrenCount).child("Location Type:").set(loco);
     // firebaseRef.child(childrenCount).child("Date:").set(datedate);
     // firebaseRef.child(childrenCount).child("Zipcode:").set(zipzip);
     // firebaseRef.child(childrenCount).child("Address:").set(addadd);
     // firebaseRef.child(childrenCount).child("City:").set(citcit);
     // firebaseRef.child(childrenCount).child("Latitude:").set(latlat);
     // firebaseRef.child(childrenCount).child("Longitude:").set(longlong);
});


$("#goReport").on('click', function(){
     window.location = "report.html";
});

$("#goHome").on('click', function(){
     window.location = "index.html";
});
