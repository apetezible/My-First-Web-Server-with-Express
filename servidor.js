var express = require ("express");
var app = express();

app.get ("/", startFarming);

app.use (express.static("Code"));
app.use ("/static", express.static("Code"));


function startFarming (peticion, respuesta){
respuesta.sendFile (__dirname+("/Code/Villa.html"));
}


app.listen(8989);
