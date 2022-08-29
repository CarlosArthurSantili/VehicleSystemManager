import express from 'express';

import { getGasBombs, createGasBomb, getGasBomb, deleteGasBomb, updateGasBomb } from '../controllers/GasBombs.js';

const router = express.Router();

router.get('/', getGasBombs);

router.post('/', createGasBomb);

router.post('/:id/comprarCombustivel');

router.get('/:id', getGasBomb);

router.delete('/:id', deleteGasBomb);

router.patch('/:id', updateGasBomb);

export default router;