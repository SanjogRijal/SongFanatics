const mysql = require('mysql');
const jwt = require('jsonwebtoken');

module.exports = {
	getAllUsers,
	insertUsers,
}
var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'SongFanatics'
});

var secretKey = '4570d05eft0909lsEE'

function getAllUsers(req,res) {
			db.query("SELECT * FROM users", (err,data)=> {
				if(err){
					throw err;
				} else {
					res.json(data);
				}
		
	});
}

function insertUsers(req,res){

}