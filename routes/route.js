const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');

Router.get('/users', (req, res) => {
	mysqlConnection.query('SELECT * FROM USERS', (err, rows, fields) => {
		if (!err) res.send(rows);
	});
});

module.exports = Router;
