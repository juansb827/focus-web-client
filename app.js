var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));

//Deploys on port 3000 unless production environemt
var port= process.env.PORT || 4000;
app.listen(port,function(){
	console.log("Express server is listening on port",port);
});