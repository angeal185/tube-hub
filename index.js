const https = require('https'),
fs = require('fs-extra'),
express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
cors = require('cors'),
_ = require('lodash');
cl = console.log,
js = JSON.stringify,
jp = JSON.parse;

let options = {
  key: fs.readFileSync('./admin/cert/.localhost.key'),
  cert: fs.readFileSync('./admin/cert/.localhost.cert'),
  ciphers: "ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384:!MEDIUM:!LOW",
  ecdhCurve: "secp521r1:sect409k1:sect409r1:sect571k1:sect571r1:secp384r1",
  honorCipherOrder: true,
  minVersion: "TLSv1.2"
},
app = express();


app.use(cors({
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "origin": "*",
  "preflightContinue": true,
}))

app.options('*', cors({
  "methods": ['GET', 'PUT', 'POST'],
  "origin": "*"
}))


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(
  express.static('./',{
    maxAge: 0,
    //setHeaders:{'test': 'kkk'}
  })
);

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

const server = https.createServer(options, app);

server.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})


const get = require('./admin/get');

const obj = {
  url: 'youporn',
  cat: 'anal',
  page: 2
}

get(https, obj, function(err, res){
  if(err){return cl('error')}
  if()
  cl(js(res,0,2))
})
