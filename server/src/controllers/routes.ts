import express from 'express';
import { requestLogger } from '../middleware/logger';
import { getBadRequestController } from './getBadRequest';
import { getInfoController } from './getInfo';
import { getPieterpadController } from './getPieterpad';

export const router = express.Router();

router.route('/info').get(requestLogger('request for info'), getInfoController);
router
  .route('/pieterpad')
  .get(requestLogger('request for pieterpad data'), getPieterpadController);
router.route('*').get(requestLogger('bad request'), getBadRequestController);
