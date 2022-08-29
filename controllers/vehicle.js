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
    
    vehicle.placa = req.body.placa;
    vehicle.descricao = req.body.descricao;
    vehicle.capacidadeTanque = req.body.capacidadeTanque;

    console.log(`vehicle has been updated`)
};