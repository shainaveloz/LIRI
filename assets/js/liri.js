var keys = require('./keys.js');
var twitter = require('twitter');
var tweets = new twitter(keys.twitterKeys);

var search = process.argv[2];
var value = process.argv[3];


// Twitter params
var params = {screen_name: 'Shay2420'};
tweets.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

// Spotify
var spotify = require('spotify');

function getThisSong(value){
	
    if (value){
    	var song = value;
    }
    else{
    	var song = "Hey Joe";
    }
    spotify.search({ type: 'I Want It That Way', query: song }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	    else{
    		console.log(data.tracks.items[0].artists[0].name);
		    console.log(data.tracks.items[0].name);
		    console.log(data.tracks.items[0].preview_url);
		    console.log(data.tracks.items[0].album.name);
	    }
	})  

}



// request npm package 
var request = require('request');

// a request to the OMDB API with the movie specified
request('http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&r=json', function (error, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!error && response.statusCode == 200) {

		// Parse the body of the site and recover just the imdbRating
		// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
		console.log("The movie's is: " + JSON.parse(body)["Title"])
	}
});


function run(search, value){

}