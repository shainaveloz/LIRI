var keys = require('./keys.js');
var twitter = require('twitter');
var tweets = new twitter(keys.twitterKeys);

var params = {screen_name: 'shay2420'};
tweets.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});



var search = process.argv[2];


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