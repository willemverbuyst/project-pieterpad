import express from 'express';
import { getBadRequestController } from './getBadRequest';
import { getInfoController } from './getInfo';
import { getPieterpadController } from './getPieterpad';

export const router = express.Router();

router.route('/info').get(getInfoController);
router.route('/pieterpad').get(getPieterpadController);
router.route('*').get(getBadRequestController);
