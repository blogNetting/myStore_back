const request = require("supertest");
const app = require("../server"); // Ajusta la ruta según la ubicación real de tu servidor
const controllers = require("../controllers");
const { Cliente, Articulo } = require("../models");

beforeAll(async () => {
  // Configura tu base de datos para pruebas si es necesario
  // Aquí debes realizar la configuración necesaria para tus pruebas
});

afterAll(async () => {
  // Realiza la limpieza después de las pruebas
  // Cierra la conexión a la base de datos, libera recursos, etc.
});

describe("Rutas de la API", () => {
  it("debería responder a una solicitud GET a la ruta /api/clientes", async () => {
    // Mock de la función find de Cliente
    Cliente.find = jest.fn().mockResolvedValue([{ nombre: "Cliente1" }, { nombre: "Cliente2" }]);

    const response = await request(app).get("/api/clientes");
    expect(response.statusCode).toBe(200);
    expect(Cliente.find).toHaveBeenCalled();
    expect(response.body).toEqual([{ nombre: "Cliente1" }, { nombre: "Cliente2" }]);
  });

  it("debería responder a una solicitud GET a la ruta /api/articulos", async () => {
    // Mock de la función find de Articulo
    Articulo.find = jest.fn().mockResolvedValue([{ nombre: "Articulo1" }, { nombre: "Articulo2" }]);

    const response = await request(app).get("/api/articulos");
    expect(response.statusCode).toBe(200);
    expect(Articulo.find).toHaveBeenCalled();
    expect(response.body).toEqual([{ nombre: "Articulo1" }, { nombre: "Articulo2" });
  });
});

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
      // Mock de la función find de Cliente
      const clientesMock = [{ nombre: "Cliente1" }, { nombre: "Cliente2" }];
      Cliente.find = jest.fn().mockResolvedValue(clientesMock);

      await controllers.readClientes(req, res);
      expect(res.json).toHaveBeenCalledWith(clientesMock);
    });
  });

  describe("Controladores de Artículos", () => {
    it("debería leer todos los artículos", async () => {
      // Mock de la función find de Articulo
      const articulosMock = [{ nombre: "Articulo1" }, { nombre: "Articulo2" }];
      Articulo.find = jest.fn().mockResolvedValue(articulosMock);

      await controllers.readArticulos(req, res);
      expect(res.json).toHaveBeenCalledWith(articulosMock);
    });
  });
});
