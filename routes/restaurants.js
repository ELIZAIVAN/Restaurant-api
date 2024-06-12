const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

router.get('/', async(req,res) => {
    try{
        const restaurants = await Restaurant.find()
        res.json(restaurants)
    }catch(err){
        res.send('Error' + err)
    }
})


router.get('/:id', async(req,res) => {
    try{
           const restaurant = await Restaurant.findById(req.params.id)
           res.json(restaurant)
    }catch(err){
        res.send('Error' + err)
    }
})



router.post('/', async(req,res) => {
    const restaurant = new Restaurant({
        Name: req.body.Name,
        Location: req.body.Location,
        Locality: req.body.Locality,
        City: req.body.City,
        Cuisine: req.body.Cuisine,
        Rating: req.body.Rating,
        Votes: req.body.Votes,
        Cost: req.body.Cost
    })
    try{
        const a1 = await restaurant.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports = router