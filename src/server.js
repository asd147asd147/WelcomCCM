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

const { Client } = require('pg');

const client = new Client({
	user : 'postgres',
	host : 'localhost',
	database : 'ccm',
	password : 'postgres',
	port : 5432,
});


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

client.connect();

const query = 'SELECT * FROM public.user;';

client.query(query)
	.then(res => {
		const rows = res.rows;
		rows.map(row => {
			console.log(`Read: ${JSON.stringify(row)}`);
		});
		app.get('/', function(req, res){
			res.send(rows);
		});
		client.end();
		
	})
	.catch(err => {
		console.log(err);
	});

//test fork commit

module.exports = app;
