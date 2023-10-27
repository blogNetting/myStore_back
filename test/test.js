const request = require("supertest");
const app = require("../server"); // Ajusta la ruta según la ubicación real de tu servidor
const controllers = require("../controllers");
const { Cliente, Articulo } = require("../models");

jest.setTimeout(5000);

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
