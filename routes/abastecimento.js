import express from 'express';

import { getAbastecimento, getAbastecimentos, abastecimento } from '../controllers/abastecimento.js';

const router = express.Router();

router.get('/:id', getAbastecimento);

router.get('/', getAbastecimentos);

router.post('/', abastecimento);

export default router;