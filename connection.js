var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'sql_store',
});

connection.connect((err) => {
	if (!err) console.log('connected');
});

module.exports = connection;
