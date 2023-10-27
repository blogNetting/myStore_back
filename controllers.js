const { Cliente, Articulo } = require('./models'); // Ajusta la ruta según la ubicación real
const controllers = require('./controllers'); // Ajusta la ruta según la ubicación real


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
            const clientesMock = [{ nombre: 'Cliente1' }, { nombre: 'Cliente2' }];
            Cliente.find = jest.fn().mockResolvedValue(clientesMock);

            await controllers.readClientes(req, res);
            expect(res.json).toHaveBeenCalledWith(clientesMock);
        });
    });

    describe('Controladores de Artículos', () => {
        it('debería leer todos los artículos', async () => {
            const articulosMock = [{ nombre: 'Articulo1' }, { nombre: 'Articulo2' }];
            Articulo.find = jest.fn().mockResolvedValue(articulosMock);

            await controllers.readArticulos(req, res);
            expect(res.json).toHaveBeenCalledWith(articulosMock);
        });
    });
});
