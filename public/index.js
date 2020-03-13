// JavaScript source code

const TimeOfDAY =
  {1:"MORNING", 2:"NOON", 3:"EVENING", 4:"NIGHT"};

var Conditions =
{
  SUNNY:   "Sunny.jpg",
  CLOUDY:  "Cloudy.png",
  PARTLY:  "Partly.jpg",
  RAIN:    "Rain.jpg",
  THUNDER: "Thunder.png",
  SNOW:    "Snow.png"
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
  new Forecast("MORNING", "MONDAY", 83,Conditions.THUNDER);
const testForecast2 =
  new Forecast("NOON", "TUESDAY", 65,Conditions.SUNNY);
  const testForecast3 =
    new Forecast("EVENING", "WEDNESDAY", 42,Conditions.RAIN);

const forecasts = [testForecast1, testForecast2, testForecast3];

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
  const dy = 20;
  const dx = 15;
  let width = 50;
  var height = 0;
  // Forecasts is a list of forecasts.
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var i;
  for(i = 0;i < forecasts.length; i++)
  {
    //Image position needs to be corrected for each forecast, once done you can replace
    //the line ctx.fillText(forecasts[i].Condition, dx + (width * 3), dy + height);
    //With the myImg.onload function.
    myImg = new Image();
    myImg.src = forecasts[i].Condition;
    myImg.onload = function(){
      ctx.drawImage(myImg, dx + width, dy + height, 20, 20);
    }

    ctx.fillText(forecasts[i].Temp, dx, dy + height);
    ctx.fillText(forecasts[i].TimeOfDAY, dx + width, dy + height);
    ctx.fillText(forecasts[i].Condition, dx + (width * 3), dy + height);
    height += 30;
  }
}

/*
var newDiv = document.createElement("div");
var image = document.createElement("img");
image.src = "Sunny.jpg";
newDiv.appendChild(image);
document.getElementById("demo").appendChild(newDiv);
*/

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
