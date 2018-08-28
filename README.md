# LIRI-Bot

Language Interpretation and Recognition Interface: LIRI is a command line node.js app that takes in parameters and gives you back data. T

* Powered by Javascript and node.js, including npm request, node-spotify-api, moment, and dotenv!

## Getting Started and Prerequisites

Follow the instructions below to utilize the application.
 - Download node.js to properly utilize this application!
 - Once downloaded, head to your terminal and direct yourself to the location of the LIRI directory.

### Image Preview of LIRI
<!-- take a picture of the image and add it into the readme  -->
![LIRI Preview]( "LIRI Bot")

## Technology Used

* **Javascript** - the primary scripting logic powering the game
* [**node.js**](https://nodejs.org/en/) - a versatile Javascript runtime environment that processes user inputs in terminal
* [**Moment.js**](https://momentjs.com/docs) - a date-time Javascript library to enable ease of time manipulation


# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Explanation

```
//import keys.js and node-spotify-api so that we can access the spotify export
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

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

```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
* Moment JS allows developers to interact more fluidly with a generally difficult-to-deal-with user input - time

## Developers

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details