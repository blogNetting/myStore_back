const { Cliente, Articulo } = require('../models');
const controllers = require('../controllers');

describe('Controladores', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('Controladores de Clientes', () => {
    it('debería leer todos los clientes', async () => {
      // Mockea la función de búsqueda de clientes en el modelo Cliente
      const clientesMock = [{ nombre: 'Cliente1' }, { nombre: 'Cliente2' }];
      Cliente.find.mockResolvedValue(clientesMock); // Usa 'mockResolvedValue' directamente en lugar de 'jest.fn()'

      // Llama a la función del controlador y verifica la respuesta
      await controllers.readClientes(req, res);
      expect(res.json).toHaveBeenCalledWith(clientesMock);
    });

    // Agrega más pruebas para otros controladores de clientes aquí
  });

  describe('Controladores de Artículos', () => {
    it('debería leer todos los artículos', async () => {
      // Mockea la función de búsqueda de artículos en el modelo Articulo
      const articulosMock = [{ nombre: 'Articulo1' }, { nombre: 'Articulo2' }];
      Articulo.find.mockResolvedValue(articulosMock); // Usa 'mockResolvedValue' directamente en lugar de 'jest.fn()'

      // Llama a la función del controlador y verifica la respuesta
      await controllers.readArticulos(req, res);
      expect(res.json).toHaveBeenCalledWith(articulosMock);
    });

    // Agrega más pruebas para otros controladores de artículos aquí
  });
});

