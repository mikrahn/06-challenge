// var requestUrl =
//   "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=741d97bc71c8ca5c1f48ea8404358f9c";
// // "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=741d97bc71c8ca5c1f48ea8404358f9c";

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(
//     function (data) {
//       // for (var i = 0; i < data.length; i++) {
//       console.log(data.daily[0]);
//     }
//     // }
//   );

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(
//     function (data) {
//       console.log("Github Repo Issues \n----------");
//       // for (var i = 0; i < data.length; i++) {
//       console.log(current.dt);
//       console.log(current.sunrise);
//     }
//     // }
//   );

$("#search-btn").click(function getCoords() {
  var cityInput = $("input:text").val();

  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=741d97bc71c8ca5c1f48ea8404358f9c`;
  // "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=741d97bc71c8ca5c1f48ea8404358f9c";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // for (var i = 0; i < data.length; i++) {
      console.log(data);
    });
});

// var cityInput = "New Haven";
/*
var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=741d97bc71c8ca5c1f48ea8404358f9c`;
// "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=741d97bc71c8ca5c1f48ea8404358f9c";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // for (var i = 0; i < data.length; i++) {
    console.log(data.name, data.coord);
  });
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

*/
