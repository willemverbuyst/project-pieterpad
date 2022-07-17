import express from 'express'
import { requestLogger } from '../middleware/requestLogger'
import { getBadRequestController } from './getBadRequest'
import { getInfoController } from './getInfo'
import { getPieterpadController } from './getPieterpad'

export const router = express.Router()

router.route('/info').get(requestLogger, getInfoController)
router.route('/pieterpad').get(requestLogger, getPieterpadController)
router.route('*').get(requestLogger, getBadRequestController)
