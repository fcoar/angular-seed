var express = require('express');
//var morgan = require('morgan');
//var bodyParser = require('body-parser');
//var methodOverride = require('method-override');

app = express();

app.use(express.static(__dirname + '/'));
//app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(methodOverride());

var router = express.Router();

app.get('/', function(req, res){
			res.sendFile('/chapter2/angular-seed/index.html', {root:__dirname});
});

router.get('/main.ts', function(req, res){
	res.sendFile('/chapter2/angular-seed/app/main.ts', {root:__dirname});
});

router.get('/app.component.ts', function(req, res){
	res.sendFile('/chapter2/angular-seed/app/app.component.ts', {root:__dirname});
});

router.get('/app.module.ts', function(req, res){
	res.sendFile('/chapter2/angular-seed/app/app.module.ts', {root:__dirname});
});

app.use('/app', router);

app.listen(3000);
console.log('Open http://localhost:3000 to access the files now');