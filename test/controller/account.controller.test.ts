import { server } from '../../src/server';
import { agent as request } from 'supertest';

const transactionBody = {
    'type' : 'credit',
    'amount' : 26.2
};

describe ('account controller', () => {
    it('Should return getTransactions list', async () => {
        const response = await request(server).get('/api/v1/account/transactions');
        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined;
    });

    it('Should return a transaction created', async () => {
        const response = await request(server)
        .post('/api/v1/account/transactions')
        .set('Content-Type', 'application/json')
        .send(transactionBody);
        expect(response.status).toEqual(201);
        expect(response.body).toBeDefined;
    });

    it('Should return error for bad parameters', async () => {
        const transactionWrongRequest = {
            'type' : 'BAD_TRANSACTION',
            'amount' : 0
        }; 
        const response = await request(server)
        .post('/api/v1/account/transactions')
        .set('Content-Type', 'application/json')
        .send(transactionWrongRequest);
        expect(response.status).toEqual(400);
        expect(response.body).toBeDefined;
    });

    it('Should return balance', async () => {
        const response = await request(server)
        .get('/api/v1/account/balance')
        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined;
    });

    it('Should return found id ', async () => {
        const result= await request(server)
        .post('/api/v1/account/transactions')
        .set('Content-Type', 'application/json')
        .send(transactionBody);
        const response = await request(server)
        .get(`/api/v1/account/transactions/${result.body.id}`)
        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined;
    });

    it('Should return bad request id ', async () => {
        const response = await request(server)
        .get('/api/v1/account/transactions/1')
        expect(response.status).toEqual(400);
        expect(response.body).toBeDefined;
    });
    it('Should return not found id ', async () => {
        const response = await request(server)
        .get('/api/v1/account/transactions/3fa85f64-5717-4562-b3fc-2c963f66afa6')
        expect(response.status).toEqual(404);
        expect(response.body).toBeDefined;
    });

    
});