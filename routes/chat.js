var models = require("../models");

exports.view = function(req, res) {
	models.NewsFeed
	.find()
	.sort('-posted')
	.exec(displayNewsFeed);

	function displayNewsFeed(err, newsfeed_posts){
		var data = {data: newsfeed_posts};
    	res.render("chat", data);	

    	if(err) { 
			console.log(err);
			res.send(500);
		}
	}
};
