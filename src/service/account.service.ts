import Account from '../model/account';

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
}

export default AccountService;