const mysql = require('mysql');
const jwt = require('jsonwebtoken');

module.exports = {
	getAllUsers,
	insertUser,
	signIn,
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

function insertUser(req,res){
	console.log(req.body);
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var phone = req.body.phone;
	var newDate = new Date().toLocaleDateString();

	db.query("SELECT * FROM users WHERE email = ? OR username = ?",[email,username],(err,existingdata) => {
		if(err)
			throw err
		else{
			if(existingdata.length>1){
				console.log("Username or email already exists");
				res.json([{"Message":"Username or email Already Exists"}]);
			} else {
					db.query("INSERT INTO users (firstname, lastname, username, password, phone,email,createdAt) values(?,?,?,?,?,?,?)", [req.body.firstName, req.body.lastName,req.body.username, req.body.password, req.body.phone, req.body.email,newDate], (err, data) => {
					if(err){
						console.log(err);
					} else {
						console.log("User Added Successfully On: " + new Date());
					}
				});
			}
		}
	});
}

function signIn(req, res){
	var username = req.params.username;
	var password = req.params.password;

	db.query("SELECT * FROM users where username = ? OR email = ? AND password = ?",[username,username,password],(err,data) => {
		if(err)
			throw err
		else{
			if(data.length > 0){
				res.json(data);
				console.log("User successfully logged in on: " + new Date());
			}
		}
	})
}