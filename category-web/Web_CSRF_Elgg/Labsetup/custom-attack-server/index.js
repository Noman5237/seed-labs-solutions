const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
	// send a get request to www.seed-server.com with axios
	axios.get("http://www.seed-server.com").then((response) => {
		console.log(response.data);
	});
	res.render("index");
});

app.listen(3000);
console.log("Server is running on port 3000");