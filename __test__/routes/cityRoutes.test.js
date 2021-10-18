// import what we need to test 
import request from 'supertest';
import router from '../../api/routes/citiesRoute.js';
import allCities from '../../api/controllers/citiesController.js';


describe('test api routes', ()=>{
    test('should respond to /api/cities', async ()=>{
        // we make it async to not block the api
        // request to the server and response to the client
        const response = await request(router).get('/');

        expect(response.header['content-type']).toContain('application/json');
        expect(response.statusCode).toBe(200);
    })
})