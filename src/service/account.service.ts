import Account from '../model/account';
import Transaction from '../model/transaction';

class AccountService {
    private static instance: AccountService;
    private account;

    private constructor() {
        this.account = Account.getInstance();
    }

    public static getInstance(): AccountService {
        if(!AccountService.instance){
            AccountService.instance = new AccountService();
        }
        return AccountService.instance;
    }

    public getAccountBalance(): object{
        if(!this.account.isAccountLock()){
            return {
                "balance" : this.account.getBalance(),
            }
        }
        throw new Error("Error getting balance");
    }

    public getAccountTransactions(): Array<Transaction>{
        if(!this.account.isAccountLock()){
            return this.account.getTransactions();
        }
        throw new Error("Error getting transactions");
    }

    public createAccountTransaction(transactionRequest: any): Transaction{
        if(this.account.isAccountLock()){
            throw new Error("409");
        }if(!this.account.isTransactionValid(transactionRequest.type, transactionRequest.amount)){
            throw new Error("422")
        }
        return this.account.addTransaction(transactionRequest.type, transactionRequest.amount);
    }

    public findTransactionById(uuid : string): Array<Transaction>{
        if(this.account.isAccountLock()){
            throw new Error("409");
        }
        return this.account.getTransactions().filter(t => uuid === t.getId());
    }
}

export default AccountService;