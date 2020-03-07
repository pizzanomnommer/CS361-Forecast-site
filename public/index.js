// JavaScript source code
function showPosition(position) { // Test getlocation function by formating data
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
var x = document.getElementById("demo"); // Test code

var checkGeoLocButton = document.getElementById("test-geolocation"); // Tests geolocator
checkGeoLocButton.addEventListener("click", function(){
  //console.log("I was clicked");
  //var k = document.getElementById("demo");
  //k.innerHTML = "Button was clicked";
  navigator.geolocation.getCurrentPosition(showPosition);
// check for Geolocation support
if (navigator.geolocation) {
    console.log("Geolocation is supported!");
  }
else {
    console.log("Geolocation is not supported for this Browser/OS.");
}
})
//const input = document.querySelector('input');
//input.addEventListener("input",getcookieinput);
var test= document.getElementById("cookie-id");
//var decodecookie= decodeURIComponent(document.cookie);
test.addEventListener("click", function(){
  //document.cookie =document.getElementById("InputLocation");
document.cookie = new Date() + '=' + document.getElementById("InputLocation").value;
  var decodedcookie = document.cookie.split(";");
})
