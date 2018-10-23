'use strict';

const express = require('express');

const methodOverride = require('method-override');

//esoteric library
const categoryRoutes = require('./categoryRouter.js');
const mainSitRoute = require('./mainSiteRouter.js');

//////////////////

const app = express();

// Set the view engine for templating
app.set('view engine', 'ejs');

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride((req,res) =>{
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Statics
app.use( express.static('./public') );

// Dynamic Routes
app.use(categoryRoutes);
app.use(mainSitRoute);




module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

