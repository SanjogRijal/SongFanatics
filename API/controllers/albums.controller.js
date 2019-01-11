const mysql = require('mysql');
const jwt = require('jsonwebtoken');

module.exports = {
	getAllAlbums,
	getAlbumsByArtistID,
	createAlbum,

}
var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'SongFanatics'
});

var secretKey = '4570d05eft0909lsEE'

function getAllAlbums(req, res) {
	db.query("SELECT * FROM albums",(err,data) => {
		if(err)
			throw err
		else {
			res.json(data);
		}
	});
}

function getAlbumsByArtistID(req, res){
	var artistID = req.params.artistID;
	db.query("SELECT * FROM albums WHERE artistID = ?", [artistID], (err,data)=> {
		if(err)
			throw err
		else
			res.json(data);
	});
}

function createAlbum(req,res){
	console.log(req.body);
	var albumName = req.body.albumName;
	var releaseDate = req.body.releaseDate;
	var logo = req.body.logo;
	var youtubeID = req.body.youtubeID;
	var	createdBy = req.body.createdBy;
	var createdAt = new Date().toLocaleDateString();

	db.query("SELECT * FROM albums WHERE albumName = ?",[albumName],(err,existingdata) => {
		if(err)
			throw err
		else{
			if(existingdata.length>1){
				console.log("Album already exists");
				res.json([{"Message":"Album Already Exists"}]);
			} else {
					db.query("INSERT INTO albums (albumName, releaseDate, logo, youtubeID, createdBy, createdAt) values(?,?,?,?,?,?)", [albumName, releaseDate,logo,youtubeID,createdBy, createdAt], (err, data) => {
					if(err){
						console.log(err);
					} else {
						console.log("Album Added Successfully On: " + new Date());
					}
				});
			}
		}
	});
}

