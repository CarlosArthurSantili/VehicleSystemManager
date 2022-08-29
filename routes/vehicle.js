import express from 'express';

import { getVehicles, createVehicle, getVehicle, deleteVehicle, updateVehicle } from '../controllers/Vehicles.js';

const router = express.Router();

router.get('/', getVehicles);

router.post('/', createVehicle);

router.post('/:id/abastecerVeiculo', abastecerVeiculo);

router.get('/:id', getVehicle);

router.delete('/:id', deleteVehicle);

router.patch('/:id', updateVehicle);

export default router;