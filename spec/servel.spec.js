var Request = require("request");

describe("Test para probar el Server", () => {
    var server;
    beforeAll(() => {
        server = require("../servel"); //Esta función tiene la labor de lanzar el servidor.
    });
    afterAll(() => {
        server.close(); // Cierra el servidor.
    });
    describe("Test para simular la petición  -->  GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Comprobar que devuelva ---- Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Comprobar que el Body es correcto.", () => {
            expect(data.body).toBe("Mi respuesta chachi");
        });
    });
    describe("Test para simular la petición --------> GET /test", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/test", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe("This is an error response");
        });
    });
});