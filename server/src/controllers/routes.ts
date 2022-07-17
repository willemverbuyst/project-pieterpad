import express from 'express';
import { getBadRequestController } from './getBadRequest';
import { getInfoController } from './getInfo';

export const router = express.Router();

router.route('/info').get(getInfoController);
router.route('*').get(getBadRequestController);
