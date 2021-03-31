import { v4 as uuidv4 } from 'uuid';
class Transaction {
    private type: string;
    private amount: number;
    private id: string;
    private effectiveDate: string;

    public constructor(type: string, amount: number) {
        this.type = this.validateType(type);
        this.amount = amount;
        this.id = uuidv4();
        this.effectiveDate = new Date().toISOString();
    }

    private validateType(type: string): string{
        if(type && (type.toUpperCase() === 'CREDIT' || type.toUpperCase() === 'DEBIT')){
            return type;
        }else {
            throw new Error("Invalid type of transaction");
        }
    }

    public getId(){
        return this.id;
    }
}
export default Transaction;