
var express = require('express'),
    http = require('http'),
    path = require('path'),
    http = require('http'),
    path = require('path'),
    app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	res.render('index', { title: 'Welcome',
	  images: ['front.jpg', 'front1.jpg', 'front2.jpg'] 
	});
});

app.get('/about', function(req, res){
	res.render('about_us', { 
  	title: 'About Us', 
  	address: '123 somewhere street', 
  	contact: '12345', 
  	email:'user@email.com'
  });
});

app.get('/*', function(req, res){
  res.render('404', { title: 'Page Not found', fallbackpage: '/' });
});


var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke! Please ask the admin to check for logs');
});