require("dotenv").config();

var request = require("request");
var fs = require("fs");

var command = process.argv[2];
var searchTerm = process.argv[3];

switch (command){
  case "concert-this":
    songLocation();
    break;
  case "spotify-this-song":
    spotifySearch(searchTerm);
    break;
  case "movie-this":
    movieInfo();
    break;
  case "do-what-it-says":
    break;
}

function songLocation(){

  var artist = searchTerm;
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("Venue Name: " + JSON.parse(body).venue.name);
      console.log("Venue Location: " + JSON.parse(body).venue.city);
      console.log("Date of Show: " + JSON.parse(body).datetime);
    }
  });
  
}

function spotifySearch(song){

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("Movie Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).Rating);
    }
  });
  
}

function movieInfo(){

  var movie = searchTerm;
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("Movie Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).Rating);
    }
  });
  
}

function doRandom(){
  fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // We will then print the contents of data as a single string
    console.log(data);
  
    spotifySearch(data);
  
  });
}