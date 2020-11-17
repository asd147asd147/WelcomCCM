const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const routes = require('./routes');
const logger = require('./utils/logger');
const { fstat } = require('fs');
const app = express();

app.enable('trust proxy');

app.use(cors());
app.options('*', cors());

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev', { stream: logger.stream.write }));
} else {
  app.use(morgan('combined', { stream: logger.stream.write }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(xss());
app.use(compression());

app.use(session({ secret: 'ccm', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

app.use(routes);

app.use(function (err, req, res, next) {
  res.status(500).json({ code: 500, data: { msg: "Internal Server Error", err: err }});
});

const { Client } = require('pg');

const client = new Client({
	user : 'postgres',
	host : 'localhost',
	database : 'ccm',
	password : 'postgres',
	port : 5432,
});

var problem_cnt = 26;
app.get('/submit/', function(req, res){
	var ioexam = []
	var rest = []
	for(var i=0; i < req.query.input.length; i++){
		var input = (req.query.input[i]).toString();
		var output = (req.query.output[i]).toString();
		ioexam.push(JSON.stringify({"id":i+1,"input":input,"output":output}))
	}
	for(var i=0; i < req.query.rest.length; i++){
		var restric = (req.query.rest[i]).toString();
		rest.push(JSON.stringify({"id":i+1,"cont":restric}))
	}

	const io = (JSON.stringify(ioexam)).substring(1,JSON.stringify(ioexam).length-1)
	const re = (JSON.stringify(rest)).substring(1,JSON.stringify(rest).length-1)

	const query = 'INSERT INTO public.issues (num,title,level,category,writer,ioexam,restric,accuracy)\
	VALUES('+problem_cnt+',\''+req.query.title+'\','+req.query.level+',\'None\',\'USER\','+'\'{'+io+'}\','+'\'{'+re+'}\''+',0.5)'+';';
	problem_cnt++;
	client.query(query)
		.then(que => {
			console.log(que);
		})
		.catch(err => {
			console.log(err);
		});
	
});

client.connect();
app.get('/problem/', function(req, res){
	const query = 'SELECT * FROM public.issues WHERE num = '+req.query.num+';';
	// console.log(req)
	
	client.query(query)
		.then(que => {
			const rows = que.rows;
			// rows.map(row => {
			// 	console.log(`Read: ${JSON.stringify(row)}`);
			// });
			res.send(JSON.stringify(rows));
			// client.end();
		})
		.catch(err => {
			console.log(err);
		});
	
});
app.get('/problemlist/', function(req, res){
	const query = 'SELECT * FROM public.issues;';
	// console.log(query)
	
	client.query(query)
		.then(que => {
			const rows = que.rows;
			// rows.map(row => {
			// 	console.log(`Read: ${JSON.stringify(row)}`);
			// });
			res.send(JSON.stringify(rows));
			// client.end();
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = app;
