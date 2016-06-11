console.log('this is loaded');

var twitterKeys = {
  consumer_key: 'gnZoG3NmUaCsZcJMIhuFjSPYf',
  consumer_secret: 'aPilntTyHLxvCzRNZzqLzyUTe1CLwvXbcNmZlQO7np1A4TsXLK',
  access_token_key: '1362970628-11AFNPC3OjyzoGqlOie6Raju5oPG9gDW4Lcrp0w',
  access_token_secret: 'RaNadSwIwpj3tGDNKOiDQVFMeqovsnzvU8MlNHf3oOKSz',
}

module.exports = twitterKeys;


// NPM Package for reading and writing files
var fs = require('fs'); 

// This block of code will create a file called "movies.txt".
// It will then print "I Want It That Way"
fs.writeFile("random.txt", 'spotify-this-song, "I Want It That Way"', function(err) {
    
	// If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

    // Otherwise, it will print: "random.txt was updated!"
    console.log("random.txt was updated!");
}); 
