let express = require('express')
let router = express.Router()
let models = require('../db/models');
let params = require('strong-params');
let bodyparser = require('body-parser');

router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());
router.use(params.expressMiddleware());

router.get('/',function(req,res,next){
    models.Beer.findAll().then(function(resp){
        res.send(resp);
    });
});

router.post('/',function(req,res,next){
    let params = req.parameters;
    let beerParams = params.require('beer').permit('name','alcohol','type','brand','description','volume','price').value();
    models.Beer.create(beerParams).then(function(beer){
        res.status(201).send({beer:beer});
    }).catch(function(err){
        res.status(400).send({err:err.message});
    });
});

router.put('/:id',function(req,res,next){
    let params = req.parameters;
    let beerParams = params.require('beer').permit('name').value();
    let beerId = req.params.id;
    let beerQuery= {
        where:{
            id:beerId
        }
    }

    models.Beer.findOne(beerQuery).then(function(beer){
        if(!beer){ res.status(404).send({error:'Beer not found'})}
        beer.update(beerParams).then(function(updatedBeer){
            res.status(202).send({beer:updatedBeer});
        }).catch(function(err){
            res.status(400).send({err:err.message});
        });
    });
});

router.delete('/:id',function(req,res,next){
    let params = req.parameters;

    let beerId = req.params.id;
    let beerQuery= {
        where:{
            id:beerId
        }
    }

    models.Beer.destroy(beerQuery).then(function(){
        res.status(204).send({beer:'its dead'});
    }).catch(function(err){
        res.status(400).send({err:err.message});
    });
    
});

module.exports=router;