// JavaScript source code

//const TimeOfDay = object.freeze({"MORNING":1, "NOON":2, "EVENING":3, "NIGHT":4});

var Conditions =
{
  SUNNY: { imgSrc : "../Conditions/Sunny.jpg" },
  CLOUDY: { imgSrc : "../Conditions/Cloudy.jpg"},
  PARTLY: { imgSrc : "../Conditions/Partly.jpg"},
  RAIN: { imgSrc : "../Conditions/Rain.jpg"}, 
  THUNDER: { imgSrc : "../Conditions/Thunder.jpg" },
  SNOW: { imgSrc : "../Conditions/Snow.jpg"}
};

class Forecast
{
  constructor(timeOfDay, day, temp, condition)
  {
    this.TimeOfDay = timeOfDay;
    this.Day = day;
    this.Temp = temp;
    this.Condition = condition;
  }

  get TimeOfDay() { return this.TimeOfDay; }
  get Day() { return this.Day; } 
  get Temp() { return this.Temp; }
  get Condition() { return this.Condition; }
}

console.log(Conditions.SUNNY.imgSrc);

//      geolocation

function ShowPosition(position) { // Test getlocation function by formating data
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

var x = document.getElementById("demo"); // Test code

var checkGeoLocButton = document.getElementById("test-geolocation"); // Tests geolocator

checkGeoLocButton.addEventListener("click", function(){

  //console.log("I was clicked");
  //var k = document.getElementById("demo");
  //k.innerHTML = "Button was clicked";

  navigator.geolocation.getCurrentPosition(ShowPosition);

  // check for Geolocation support

  if (navigator.geolocation) 
  {
    console.log("Geolocation is supported!");
  }

  else
  {
    console.log("Geolocation is not supported for this Browser/OS.");
  }

})

//                 * * * * * history * * * * *

//const input = document.querySelector('input');
//input.addEventListener("input",getcookieinput);
//var decodecookie= decodeURIComponent(document.cookie);

var test = document.getElementById("cookie-id");

test.addEventListener("click", function()
{
  //document.cookie =document.getElementById("InputLocation");
  if(document.getElementById("InputLocation").value)
  {
    document.cookie = new Date() + '=' + document.getElementById("InputLocation").value;

    // Create the list element:
    var list = document.getElementById("historylist");
    list.innerHTML='';

    for (var i = 0; i < document.cookie.split(';').length; i++)
    {
      // Create the list item:
      var item = document.createElement('li');
      item.innerHTML = document.cookie.split(';')[i];
      // Set its contents:
      list.appendChild(item);
    }

  }
  
});

//           Day breakdown

function DayBreakdown(forecasts)
{
  const dy = 10;
  const dx = 10;

  // Forecasts is a list of forecasts.
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var j = 0;
  for(i = 0; i < forecasts.length; i++)
  {
    if(i % 4 == 0) { j++; }
    var img = forecasts[i].condition;
    ctx.fillText(forecasts[i].temp, dx * i, dy * j);
    ctx.fillText(forecasts[i].TimeOfDay, dx * i, dy * j);
    ctx.fillText(forecasts[i].Condition), dx * i, dy * j;
  }
}

// Get list of forecast info's, and average them. Return the average forecast
function Aggregate()
{

}

// query api for weather data, in future should pass in location, and time 
function GetAPIData()
{

}
