const { stripGeneratedFileSuffix } = require("@angular/compiler/src/aot/util");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + '/dist/mobilemoney'));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/mobilemoney/index.html'));
})

app.listen(process.env.PORT);
