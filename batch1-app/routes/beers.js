let express = require('express')
let router = express.Router()
let models = require('../db//models');

router.get('/',function(res,req,next){
    models.Beer.findAll().then(function(resp){
        res.send(resp);
    });
});