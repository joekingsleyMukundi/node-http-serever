//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

//this enables the use of dynamic templating in node js
app.set('view engine', 'ejs');

//setting headers
app.use((req, res, next) => {
  req.setHeader('Content-Type', 'application/json');
  req.setHeader('Content-Length', Buffer.byteLength(p));
  next();
});

//start of force https
app.enable('trust proxy');

// Add a handler to inspect the req.secure flag (see 
// http://expressjs.com/api#req.secure). This allows us 
// to know whether the request was via http or https.
app.use (function (req, res, next) {
        if (req.secure) {
                // request was via https, so do no special handling
                next();
        } else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
        }
});
//end of force https

// a siple get request handler
app.get('/', (req, res) => {
  res.status(200).send('hello')
})

//if on local host it will run on port 8080 and if deployed we use the port given
const port =  8080||process.env.PORT;
app.listen(port,()=>{
  console.log(`tcp`);
})