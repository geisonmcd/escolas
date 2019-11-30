require('app-module-path').addPath(__dirname + "/server");
const express = require("infra/express");

const port = 5000;

express.listen(port, function (req, res) {
    console.log(`Server running on port ${port}`);
});