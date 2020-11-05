const express = require('express');
const userRoutes = require('./routes/route');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', userRoutes);

app.listen(5000, () => {
	console.log('Listening on 5000');
});
