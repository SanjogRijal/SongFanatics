const mysql = require('mysql');
const jwt = require('jsonwebtoken');

module.exports = {
	getAllSongs,
	createSong,
}
var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'SongFanatics'
});

var secretKey = '4570d05eft0909lsEE'

function getAllSongs(req, res) {
	db.query("SELECT * FROM songs",(err,data) => {
		if(err)
			throw err
		else {
			res.json(data);
		}
	});
}

function createSong(req,res){
	console.log(req.body);
	var songName = req.body.songName;
	var artistID = req.body.artistID;
	var albumID = req.body.albumID;
	var releaseDate = req.body.releaseDate;
	var singleFlag = req.body.singleFlag;
	var createdAt = new Date().toLocaleDateString();

	db.query("SELECT * FROM songs WHERE songName = ?",[songName],(err,existingdata) => {
		if(err)
			throw err
		else{
			if(existingdata.length>1){
				console.log("Song already exists");
				res.json([{"Message":"Song Already Exists"}]);
			} else {
					db.query("INSERT INTO songs (songName, artistID, albumID, singleFlag, releaseDate, createdAt) values(?,?,?,?,?,?)", [songName, artistID, albumID, singleFlag, releaseDate, createdAt], (err, data) => {
					if(err){
						console.log(err);
					} else {
						console.log("Song Added Successfully On: " + new Date());
					}
				});
			}
		}
	});
}

