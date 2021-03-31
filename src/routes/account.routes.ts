import { Router } from 'express';
import { getAccountBalance } from '../controller/account.controller';

const router = Router();

router.route('/v1/account').get(getAccountBalance);

export default router;