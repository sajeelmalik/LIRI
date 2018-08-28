//Sajeel Malik
//LIRI BOT


//require all .env files
require("dotenv").config();

//import keys.js and node-spotify-api so that we can access the spotify export
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var request = require("request");
var fs = require("fs");

var command = process.argv[2];
var searchTerm = process.argv[3];

function game(){
    switch (command){
      case "concert-this":
        songLocation();
        break;
      case "spotify-this-song":
        spotifySearch();
        break;
      case "movie-this":
        movieInfo();
        break;
      case "do-what-it-says":
        doRandom();
        break;
    }

}

game();


function songLocation(){

  var artist = searchTerm;
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

      //show just the first result
      // console.log(JSON.parse(body)[0]);

      console.log("Venue Name: " + JSON.parse(body)[0].venue.name);
      console.log("Venue Location: " + JSON.parse(body)[0].venue.city);
      console.log("Date of Show: " + JSON.parse(body)[0].datetime);
    }
  });
  
}

function spotifySearch(){

  if(searchTerm){

    spotify.search({ type: 'track', query: searchTerm }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
   
      // console.log(data.tracks.items[0]); 

      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album: " + data.tracks.items[0].album.name);
    });
  }
  else{
    spotify.search({ type: 'track', query: "The Sign by Ace of Base" }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
      console.log(data.tracks.items[0]); 
      });
  }
  
  
}

function movieInfo(){

  var movie = searchTerm;
  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("Movie Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].value);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
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
    var inputs = data.split(",");
    console.log(inputs);
  
    command = inputs[0];
    searchTerm = inputs[1];

    game();
  
  });
}