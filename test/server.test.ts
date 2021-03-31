import { server } from '../src/server';
import { agent as request } from 'supertest';

describe('Index Test', () => {
    it('should return a string on root', async function ()  {
        const res = await request(server).get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toBeDefined;
        expect(res.body).toEqual('Ok, server up and running');
    });
});