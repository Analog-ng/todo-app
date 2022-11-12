const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');


router
    .get('/', controller.getAllFlights)
    .get('/:id', controller.getOneFlight)
    .post('/', controller.createFlight)
    .put('/:id', controller.updateFlight)
    .delete('/:id', controller.deleteFlight);


    
    

module.exports = router;

