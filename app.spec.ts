import { discount } from './src/utills';
import request from 'supertest';
import app from './src/app';

describe('App', () => {
    it('should calculate the discount', () => {
        const result = discount(100, 10);
        expect(result).toBe(10);
    });
    it('should return 200 status', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
