const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header('Access-Control-Expose-Headers', 'Content-Length');
	res.header(
		'Access-Control-Allow-Headers',
		'Accept, Authorization, Content-Type, X-Requested-With, Range'
	);
	if (req.method === 'OPTIONS') {
		return res.send(200);
	} else {
		return next();
	}
});
app.use(express.static('static'));

app.get('/hello', async (req, res) => {
	// send a get request using axios
	const response = await axios.get('http://www.seed-server.com/action/friends/add?friend=59');
	res.json(response);
});

app.listen(80, () => {
	console.log('Example app listening on port 3000!');
});
