import { Router } from 'express';
import { getAccountBalance,
        getAccountTransactions,
        addTransaction,
        findTransactionById } from '../controller/account.controller';

const router = Router();

router.route('/v1/account/balance').get(getAccountBalance);
router.route('/v1/account/transactions').get(getAccountTransactions);
router.route('/v1/account/transactions').post(addTransaction);
router.route('/v1/account/transactions/:id').get(findTransactionById);


export default router;