// JavaScript source code

const TimeOfDAY =
  {1:"MORNING", 2:"NOON", 3:"EVENING", 4:"NIGHT"};

var Conditions =
{
  SUNNY: { imgSrc : "/Sunny.jpg" },
  CLOUDY: { imgSrc : "/Cloudy.png"},
  PARTLY: { imgSrc : "/Partly.jpg"},
  RAIN: { imgSrc : "/Rain.jpg"},
  THUNDER: { imgSrc : "/Thunder.png" },
  SNOW: { imgSrc : "/Snow.png"}
};

//Test information for DayBreakdown

class Forecast
{
  constructor(timeOfDay, day, temp, condition)
  {
    this.TimeOfDAY = timeOfDay;
    this.Day = day;
    this.Temp = temp;
    this.Condition = condition;
  }

//We Do not need getters because without setters the object
//will give warnings that you need setters.
/*

  get TimeOfDay() { return this.TimeOfDay; }
  get Day() { return this.Day; }
  get Temp() { return this.Temp; }
  get Condition() { return this.Condition; }
  */
}

const testForecast1 =
  new Forecast("MORNING", "MONDAY", 83,Conditions.THUNDER.imgSrc);
const testForecast2 =
  new Forecast("NOON", "TUESDAY", 65,Conditions.SUNNY.imgSrc);

const forecasts = [testForecast1, testForecast2];

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
// ctx.fillText Most likely displaying undefined due to it cannot handle information
// Directly from an integer or forecasts. Further testing required
function DayBreakdown()
{
  const dy = 10;
  const dx = 10;
  // Forecasts is a list of forecasts.
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var j = 0;
  var i;
  for(i = 0;i < forecasts.length; i++)
  {
    if(i % 4 == 0) { j++; }
    var img = forecasts[i].Condition;
    let myImg = new Image(100,100);
    myImg.src = img;
    ctx.drawImage(myImg, 10, 10);
    ctx.fillText(forecasts[i].temp, dx * i, dy * j);
    ctx.fillText(forecasts[i].TimeOfDay, dx * i, dy * j);
    ctx.fillText(forecasts[i].Condition, dx * i, dy * j);
  }
}

// Testing DayBreakdown, Since DayBreakdown doesn't draw it will not draw.
// But it is successfully taking in information through manual testing (can confirm the corecast condition)
DayBreakdown();

// Get list of forecast info's, and average them. Return the average forecast
function Aggregate()
{

}

// query api for weather data, in future should pass in location, and time
function GetAPIData()
{

}
