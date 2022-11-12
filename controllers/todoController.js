const { Flights } = require('../models/Flight');
const { v4: uuid } = require('uuid');

// get all flights
exports.getAllFlights = async (req, res) => {
	try {
		const flights = Flights;
		res.status(200).json({
			message: 'All flights',
			flights: flights
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// get one flight
exports.getOneFlight = async (req, res) => {
    try {
        let id = req.params.id;
        let flight = Flights.find(flight => flight.id == id);
        res.status(200).json({
            message: 'Flight found',
            flight
        });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// create one flight
exports.createFlight = async (req, res) => {
	try {
        const { title, price, number, date, origin, destination } = await req.body;
        
        const flight = {
            id: uuid(),
            title,
            price,
            number,
            date,
            origin,
            destination
        }

       Flights.push(flight);
		res.status(201).json({
			message: 'Flight created',
			flight
		});
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// update one flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        let flight = Flights.find(flight => flight.id == id);
        const { title, price, number, date, origin, destination } = await req.body;
        
        flight.title = title;
        flight.price = price;
        flight.number = number;
        flight.date = date;
        flight.origin = origin;
        flight.destination = destination;

        res.status(200).json({
            message: 'Flight updated',
            flight
        });
    } catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// delete one flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;

        flight = Flights.find((flight) => flight.id == id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: 'Deleted flight',
            user,
        });

    }
    catch (err) {
		res.status(500).json({ message: err.message });
	}
};
