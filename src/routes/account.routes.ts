import { Router } from 'express';
import { getAccountBalance } from '../controller/account.controller';

const router = Router();

router.route('/v1/account/balance').get(getAccountBalance);

export default router;