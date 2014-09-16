
var express = require('express'),
    http = require('http'),
    path = require('path'),
    http = require('http'),
    path = require('path'),
    app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	res.render('index', { title: 'Brandsmith Lifesciences',
	  images: ['front.jpg', 'front1.jpg', 'front2.jpg'] 
	});
});

app.get('/about', function(req, res){
	res.render('about_us', { 
  	title: 'About Us', 
  	address: 'N-146, GROUND FLOOR NARAYAN NAGAR LAXMI NAGAR EXTENTION DELHI-110092', 
  	contact: 'Gaurav Gupta', 
  	email:'brandsmithlifesciences@yahoo.Cefomith'
  });
});

app.get('/news', function(req, res) {
   res.render('news', {date: new Date().getDate()+'-'+new Date().getMonth()+'-'+new Date().getFullYear() });
});

app.get('/health', function(req, res) {
   res.render('health');
});

app.get('/products', function(req, res) {
    res.render('products', {
      product_details: {
        'Acemith' : 'The acemith advantage - this product delivers quality drug injection methodologies.',
        'Cefomith' : 'Is a generic pain relieving medicine that acts as a suppressent without causing after effects like drowsiness',
        'Mithpanto-DSR' : 'Suppresses vomiting and nausea without causing any side effects',
        'Livobrand' : 'Provides relief from Respiratory Tract Infection',
        'Vykomith': 'This is a multivitamin syrup laced with protein, iron and vitamins'
      }
    });
})

app.get('/*', function(req, res){
  res.render('404', { title: 'Page Not found', fallbackpage: '/' });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke! Please ask the admin to check for logs');
});