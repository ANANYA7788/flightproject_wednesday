import express from 'express';
import {createFlight, getAllFlights, updateFlight} from  '../controller/flightController.js';


const route=express.Router();
route.post('/create',createFlight);
route.get('/getall',getAllFlights)
route.put('/update/:id',updateFlight);

export default route;