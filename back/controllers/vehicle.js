import { v4 as uuid } from 'uuid';

let vehicles = [];

export const getVehicles = (req, res) => {
    console.log(`Vehicles in the database: ${vehicles}`);

    res.send(vehicles);
}

export const createVehicle = (req, res) => {   
    const vehicle = req.body;

    vehicles.push({...vehicle, id: uuid()});
    
    console.log(`Vehicle [${vehicle.vehiclename}] added to the database.`);
};

export const getVehicle = (req, res) => {
    res.send(req.params.id)
};

export const deleteVehicle = (req, res) => { 
    console.log(`vehicle with id ${req.params.id} has been deleted`);
    
    vehicles = vehicles.filter((vehicle) => vehicle.id !== req.params.id);
};

export const updateVehicle =  (req,res) => {
    const vehicle = vehicles.find((vehicle) => vehicle.id === req.params.id);
    
    vehicle.vehiclename = req.body.vehiclename;
    vehicle.age = req.body.age;

    console.log(`vehiclename has been updated to ${req.body.vehiclename}.age has been updated to ${req.body.age}`)
};