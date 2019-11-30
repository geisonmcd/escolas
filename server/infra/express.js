const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/', express.static('client'));
app.get("/", function (req, res) {
	res.redirect("/#!/institutions");
});

app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
	next();
});

app.options('*', function (req, res, next) {
	res.end();
});

app.use('/institutions', require('routes/institutionsRoute'));
app.use('/institutions/:idInstitution/users/:idUser/reviews', require('routes/institutionsUsersReviewsRoute'));

module.exports = app;
