class Transaction {
    private type: string;
    private amount: number;
    private id: string;
    private effectiveDate: string;

    private constructor(type: string, amount: number) {
        this.type = this.validateType(type);
        this.amount = amount;
        this.id = '0';
        this.effectiveDate = new Date().toLocaleDateString();
    }

    private validateType(type: string): string{
        if(type && (type.toUpperCase() === 'CREDIT' || type.toUpperCase() === 'DEBIT')){
            return type;
        }else {
            throw new Error("Invalid type of transaction");
        }
    }   
}
export default Transaction;