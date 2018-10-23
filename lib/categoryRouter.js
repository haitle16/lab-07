'use strict';


const express = require('express');
const superagent = require('superagent');
const router = express.Router();
const API = 'http://localhost:3000';


//Routes
router.get('/list', listPage);
router.delete('/category', deleteListItem);

// Route callBack function
function listPage(request, response) {
    superagent.get( `${API}/api/v1/categories`)
        .then(data => {
            response.render('site', {page: './pages/list', title:'Listings', items: data.body});
        })
        .catch( error => {
            response.render('site', {page: './pages/error', title:'Error', error:error});
        });
}
function deleteListItem (req, res) {
    res.send(`I am deleteing ${req.body._id}`)
}

module.exports = router;

