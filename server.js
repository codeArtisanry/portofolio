//jshint esversion: 6
const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('HomePage')
});

app.get('/resume', function(req, res) {
  res.render('resume')
});

app.get('/projects', function(req, res){
  res.render('projects')
});


let port = process.env.PORT;
if(port == null || port == ''){
  port = 3000;
}
app.listen(port, function() {
  console.log("Server Started Sucessfully");
});
