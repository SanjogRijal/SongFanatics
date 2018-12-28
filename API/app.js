const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('./app.route');
const jwt = require('jsonwebtoken');
// Set up the express app
const app = express();



var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'SongFanatics'
});


db.connect(function(err){
		if (err) {
			console.log(err);

		} else {
			console.log("MySql was connected successfully");
		}
});

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, auth');

	next();
};


app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(routes);


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});