const supertest = require('supertest');
const app = require('../app');
const { application } = require('express');

const request = supertest(app);

let id = null

describe('API Loja Virtual', () => {
    test('Deve retornar 201 e um JSON no POST /produtos', async () =>{
        const response = await request.post('/produtos').send({nome: 'alcatra', preco: 22.0});
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        id = response.body._id;
    });

    test('Deve retornar 422 e um JSON? no POST /produtos', async () => {
        const response = await request.post("/produtos").send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    });

    test('Deve retornar 200 e um array no GET /produtos', async () => {
        const response = await request.get('/produtos');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        if (response.body.length > 0) {
            id = response.body[0]._id.toString();
        }
    });

    test('Deve retornar 200 e um JSON no GET /produtos/id', async () => {
        const response = await request.get(`/produtos/${id}`);
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
    })

    test('Deve retornar 404 e um JSON no GET /produtos/id', async () => {
        const response = await request.get('/produtos/6643eb670a1e917ee0581e35');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });

    test('Deve retornar 200 e um JSON no PUT /produtos/id', async () => {
        const response = await request.put(`/produtos/${id}`).send({ nome: "Ancho bovino", preco: 45.0 });
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    });

    test('Deve retornar 404 e um JSON no PUT /produtos/id', async () => {
        const response = await request.put('/produtos/6643eb670a1e917ee0581e85');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });

    test('Deve retornar 422 e um JSON? no PUT /produtos', async () => {
        const response = await request.put(`/produtos/${id}`).send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    });

    test('Deve retornar 204 no DELETE /produtos/id', async () => {
        const response = await request.delete(`/produtos/${id}`);
        expect(response.status).toBe(204);
        expect(response.type).toBe('');
    });

    test('Deve retornar 404 e um JSON no DELETE /produtos/id', async () => {
        const response = await request.delete(`/produtos/${id}`);
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
});