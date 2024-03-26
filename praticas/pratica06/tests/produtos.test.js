const supertest = require("supertest");
const app = require("../app")


const request = supertest(app)

describe("teste da api produtos", function() {

    test("POST / deve retornar 201 um array JSON", async function(){
        const novo = { nome: "uva", preco: "20.0"};
        const response = await request.post("/produtos").send(novo);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id",1);
        expect(response.body).toHaveProperty("nome", novo.nome);
        expect(response.body).toHaveProperty("preco", novo.preco);
    });

    test("POST /produtos sem um JSON e retorna o status 422 e um conteúdo do tipo JSON ", async function(){
        const response = await request.post("/produtos");
        expect (response.status).toBe(422);
        expect (response.type).toBe("application/json");
        expect (response.body).toHaveProperty("msg", "Nome e preço são obrigatórios");
    });

    test("GET / deve retornar 200 e um conteúdo do tipo JSON contendo um array de objetos", async function(){
        const response = await request.get("/produtos");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test("GET /produtos/1 retorna o status 200 e um conteúdo do tipo JSON", async function(){
        const response = await request.get("/produtos/1");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id",1);
        expect(response.body).toHaveProperty("nome");
        expect(response.body).toHaveProperty("preco");
    });

    test("GET /produtos/100 retorna o status 404  e um conteúdo do tipo JSON", async function(){
        const response = await request.get("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("msg", "Produto não encontrado");
    });

    test("PUT /id deve retornar 200 um objeto JSON", async function () {
        const atual = {nome: "biscoito globo", preco: 20.0}
        const response = await request.put("/produtos/1").send(atual);
        expect (response.status).toBe(200);
        expect (response.type).toBe("application/json");
        expect (response.body).toHaveProperty("id");
        expect (response.body).toHaveProperty("nome", atual.nome);
        expect (response.body).toHaveProperty("preco", atual.preco);
    });

    test("PUT /id deve retornar 404 um array JSON", async function () {
        const response = await request.put("/produtos/100");
        expect (response.status).toBe(404);
        expect (response.type).toBe("application/json");
        expect (response.body).toHaveProperty("msg", "Produto não encontrado");
    });

    test("DELETE /id deve retornar 204 e sem corpo", async function () {
        const response = await request.delete("/produtos/1");
        expect (response.status).toBe(204);
        expect (response.type).toBe("");
        expect (response.body).toEqual({});
    });

    test("DELETE /id deve retornar 404 um objeto JSON", async function () {
        const response = await request.delete("/produtos/100");
        expect (response.status).toBe(404);
        expect (response.type).toBe("application/json");
        expect (response.body).toHaveProperty("msg", "Produto não encontrado");
    });


})