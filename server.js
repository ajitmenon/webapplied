/**
 * Created by ajit on 13-09-2015.
 */
var express = require('express');
var app = express();
app.use(express.static(__dirname));
var port = process.env.PORT||3000;
app.listen(port);
console.log('list'+port);
