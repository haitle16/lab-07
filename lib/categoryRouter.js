'use strict';


const express = require('express');
const superagent = require('superagent');
const router = express.Router();
const API = 'http://localhost:3000';


//Routes
router.get('/list', listPage);
router.delete('/category', deleteListItem);
router.put('/category', editListItem);
router.post('/category', addListItem);

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
    superagent.delete( `${API}/categories/${req.body._id}`)
        .then(() => {
            res.redirect('/list');
        })
        .catch( error => {
            res.render('site', {page: './pages/error', title:'Error', error:error});
        });
}


 function editListItem (req, res) {
    superagent.put( `${API}/categories/${req.body._id}`)
        .send(req.body)
        .then(() => {
            res.redirect('/list');
        })
        .catch( error => {
            res.render('site', {page: './pages/error', title:'Error', error:error});
        });
 }
 function addListItem (req, res) {
    superagent.post( `${API}/categories`)
        .send(req.body)
        .then(() => {
            res.redirect('/list');
        })
        .catch( error => {
            res.render('site', {page: './pages/error', title:'Error', error:error});
        });
}
// need to add put post

module.exports = router;

