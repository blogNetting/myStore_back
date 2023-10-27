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
      // Mock de la función find de Cliente
      const clientesMock = [{ nombre: "Cliente1" }, { nombre: "Cliente2" }];
      Cliente.find = jest.fn().mockResolvedValue(clientesMock);

      await controllers.readClientes(req, res);
      expect(res.json).toHaveBeenCalledWith(clientesMock);
    });

    it("debería crear un cliente", async () => {
      // Mock de la función create de Cliente
      const nuevoCliente = { nombre: "NuevoCliente" };
      Cliente.create = jest.fn().mockResolvedValue(nuevoCliente);

      req.body = nuevoCliente; // Simula una solicitud con el cuerpo del cliente
      await controllers.createCliente(req, res);
      expect(res.json).toHaveBeenCalledWith(nuevoCliente);
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

    it("debería crear un artículo", async () => {
      // Mock de la función create de Articulo
      const nuevoArticulo = { nombre: "NuevoArticulo", precio: 10 };
      Articulo.create = jest.fn().mockResolvedValue(nuevoArticulo);

      req.body = nuevoArticulo; // Simula una solicitud con el cuerpo del artículo
      await controllers.createArticulo(req, res);
      expect(res.json).toHaveBeenCalledWith(nuevoArticulo);
    });
  });
});

