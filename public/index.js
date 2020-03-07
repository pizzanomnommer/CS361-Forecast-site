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
  if(document.getElementById("InputLocation").value)
  {
    document.cookie = new Date() + '=' + document.getElementById("InputLocation").value;

  // Create the list element:
  var list = document.getElementById("historylist");
  list.innerHTML='';
  for (var i = 0; i < document.cookie.split(';').length; i++) {
      // Create the list item:
      var item = document.createElement('li');
      item.innerHTML = document.cookie.split(';')[i];
      // Set its contents:
      list.appendChild(item);
  }
  }

})
