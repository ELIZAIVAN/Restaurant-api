const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://malavikavenu914:snjy5678@cluster0.8duiran.mongodb.net/Users?retryWrites=true&w=majority'

const app = express()

mongoose
  .connect(url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use(express.json())

const restaurantRouter = require('./routes/restaurants')
app.use('/restaurants',restaurantRouter)


app.listen(3000, () => {
  console.log('Server started')

})


