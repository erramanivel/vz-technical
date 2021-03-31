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

    public getTransactions(): Array<Transaction>{
        return [... this.transactions];
    }

    private changeAccountLock(){
        this.isLock = !this.isLock;
    }

    public addTransaction(type: string, amount: number): Transaction{
        this.changeAccountLock();
        const transaction = new Transaction(type, amount);
        if(type.toUpperCase() === 'CREDIT'){
            this.balance += amount;
        }else{
            this.balance -= amount;
        }
        this.transactions.push(transaction);
        this.changeAccountLock();
        return transaction;
    }

    public isTransactionValid(type: string, amount: number): boolean{
        if(type.toUpperCase() === 'DEBIT' && this.balance - amount < 0){
            return false;
        }
        return true;
    }

}
export default Account;