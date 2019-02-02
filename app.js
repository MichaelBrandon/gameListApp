var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = 5000;
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//gets rid of warning 
mongoose.Promise = global.Promise;

//connect to mongodb using mongoose
mongoose.connect("mongodb://localhost:27017/gameentries", {
    useMongoClient:true
}).then(function(){console.log("MongoDB connected")})
.catch(function(err){console.log(err)});

//Load in Entry Model
require('./models/Entry');
var Entry = mongoose.model('Entries');

app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

//functions needed to run body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Route to index.html
router.get('/', function(req,res) {
    //res.sendFile(path.join(__dirname+'/index.html'));
    //var title = "Welcome to the GameApp Page";

    res.render('index');
});



//Route to entries.html
router.get('/entries', function(req,res) {
    res.render('gameentries/addgame');
});

//Route to entries.html
router.get('/login', function(req,res) {
    res.render('login');
});

app.get('/', function(req,res) {
    console.log("request made from fetch");
    Entry.find({})
    .then(function(entries){
        res.render('index', {
            entries:entries
        })
    });
});

/*
router.get('/entries', function(req,res) {
    res.sendFile(path.join(__dirname+'/entries.html'));
});
*/

//post from form on index.html
app.post('/addgame', function(req, res){
    console.log(req.body);
    var newEntry = {
        title:req.body.title,
        genre:req.body.genre
    }
    new Entry(newEntry)
    .save()
    .then(function(entry){
        res.redirect('/')
    });
});


//Delete Game Entry
app.post('/:id', function(req, res) {
    Entry.remove({_id:req.params.id}).then(function() {
        //req.flash("game removed");
        res.redirect('/');
    });
});



//routes for paths
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/scripts'));
app.use('/', router);
//starts server
app.listen(port, function() {
    console.log("Server is running on Port " + port);
});