const express = require('express');
const userRoutes = require('./routes/route');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', userRoutes);

app.listen(5000, () => {
	console.log('Listening on 5000');
});
