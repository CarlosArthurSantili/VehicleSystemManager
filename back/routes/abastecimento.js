import express from 'express';

import { getAbastecimento, getAbastecimentos, abastecer, relatorio } from '../controllers/abastecimento.js';

const router = express.Router();

router.get('/:id', getAbastecimento);

router.get('/', getAbastecimentos);

router.get('/relatorio', relatorio);

router.post('/', abastecer);

export default router;