

const express = require('express');
const path = require('path');
// Constants

const PORT = 5602;

const HOST = '0.0.0.0';
const app = express();
// App


//CMD = node server.js "npm start"
app.use(express.static(__dirname + "/public"));
app.use('/diagram_folder',express.static(path.join(__dirname, ('./diagram_folder'))));


console.log(__dirname);
app.get('/', function(req, res) {
    res.sendFile( path . join (__dirname , './diagram.html'));
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);