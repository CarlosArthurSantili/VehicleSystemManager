import express from 'express';

import { getAbastecimento, getAbastecimentos, abastecer } from '../controllers/abastecimento.js';

const router = express.Router();

router.get('/:id', getAbastecimento);

router.get('/', getAbastecimentos);

router.post('/', abastecer);

export default router;