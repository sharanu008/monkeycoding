const express = require('express');
const app = express();
const config = require('./config/database');

const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(config.uri,(err) => {
if(err)
{
   console.log("Couldn't connect to database", err);
}
else
{
   console.log("Connected to database:" + config.db);

}

});

/* Provide access to dist directory of angular */

app.use(express.static(__dirname + '/kkclient/dist'));

app.get('/', (req, res)=> {
/*res.send("<h1>Hello world</h1>");*/

res.sendFile(path.join(__dirname + '/kkclient/dist/index.html'));

});

app.listen(8080, () => { 
console.log ("Listening on port 8080");
});


