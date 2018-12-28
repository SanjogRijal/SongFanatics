const mysql = require('mysql');
const jwt = require('jsonwebtoken');

module.exports = {
	getAllArtists,
	createArtist,
}
var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'SongFanatics'
});

var secretKey = '4570d05eft0909lsEE'

function getAllArtists(req, res) {
	db.query("SELECT * FROM artists",(err,data) => {
		if(err)
			throw err
		else {
			res.json(data);
		}
	});
}

function createArtist(req,res){
	console.log(req.body);
	var bandName = req.body.bandName;
	var artistName = req.body.artistName;
	var status = req.body.status;
	var	formationDate = req.body.formationDate;
	var createdAt = new Date().toLocaleDateString();

	db.query("SELECT * FROM artists WHERE artistName = ? OR bandName = ?",[artistName, bandName],(err,existingdata) => {
		if(err)
			throw err
		else{
			if(existingdata.length>1){
				console.log("Artist already exists");
				res.json([{"Message":"Artist Already Exists"}]);
			} else {
					db.query("INSERT INTO artists (bandName, artistName, status,formationDate, createdAt) values(?,?,?,?,?)", [bandName, artistName, status, formationDate, createdAt], (err, data) => {
					if(err){
						console.log(err);
					} else {
						console.log("Artist Added Successfully On: " + new Date());
					}
				});
			}
		}
	});
}

