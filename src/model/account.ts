import Transaction from './transaction';
class Account {
    private static instance: Account;
    private balance: number;
    private isLock: boolean;
    private transactions: Array<Transaction>;

    private constructor() {
        this.balance = 100;
        this.isLock = false;
        this.transactions = new Array();
    }

    public static getInstance(): Account {
        if(!Account.instance){
            Account.instance = new Account();
        }
        return Account.instance;
    }

    public getBalance(){
        return this.balance;
    }

    public isAccountLock(){
        return this.isLock;
    }

}
export default Account;