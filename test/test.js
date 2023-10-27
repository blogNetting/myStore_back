const sinon = require('sinon');
const { Cliente, Articulo } = require('../models'); 
const controllers = require('../controllers');

describe('Controladores', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: sinon.spy(),
      send: sinon.spy(),
    };
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Controladores de Clientes', () => {
    it('debería leer todos los clientes', async () => {
      // Mockea la función de búsqueda de clientes en el modelo Cliente
      const clientesMock = [{ nombre: 'Cliente1' }, { nombre: 'Cliente2' }];
      sinon.stub(Cliente, 'find').callsFake((query, callback) => {
        callback(null, clientesMock);
      });

      // Llama a la función del controlador y verifica la respuesta
      await controllers.readClientes(req, res);
      expect(res.json.calledOnce).toBeTruthy();
      expect(res.json.firstCall.args[0]).toEqual(clientesMock);
    });

    // Agrega más pruebas para otros controladores de clientes aquí
  });

  describe('Controladores de Artículos', () => {
    it('debería leer todos los artículos', async () => {
      // Mockea la función de búsqueda de artículos en el modelo Articulo
      const articulosMock = [{ nombre: 'Articulo1' }, { nombre: 'Articulo2' }];
      sinon.stub(Articulo, 'find').callsFake((query, callback) => {
        callback(null, articulosMock);
      });

      // Llama a la función del controlador y verifica la respuesta
      await controllers.readArticulos(req, res);
      expect(res.json.calledOnce).toBeTruthy();
      expect(res.json.firstCall.args[0]).toEqual(articulosMock);
    });

    // Agrega más pruebas para otros controladores de artículos aquí
  });
});
