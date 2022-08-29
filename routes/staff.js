import express from 'express';

import { getStaffs, createStaff, getStaff, deleteStaff, updateStaff } from '../controllers/staff.js';

const router = express.Router();

router.get('/', getStaffs);

router.post('/', createStaff);

router.get('/:id', getStaff);

router.delete('/:id', deleteStaff);

router.patch('/:id', updateStaff);

export default router;