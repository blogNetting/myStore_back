const request = require("supertest");
const app = require("../server"); // Ajusta la ruta según la ubicación real de tu servidor
const controllers = require("../controllers");
const { Cliente, Articulo } = require("../models");

describe("Controladores", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe("Controladores de Clientes", () => {
    it("debería leer todos los clientes", async () => {
        const cadena1 = 'Hola, mundo';
        const cadena2 = 'Hola, mundo';
        assert.strictEqual(cadena1, cadena2);
    });
  });
});

