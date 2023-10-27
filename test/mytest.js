const assert = require('assert');

describe('Test Unitarios Simples', function () {
  it('2 + 2 debería ser igual a 4', function () {
    const resultado = 2 + 2;
    assert.strictEqual(resultado, 4);
  });

  it('3 - 1 debería ser igual a 2', function () {
    const resultado = 3 - 1;
    assert.strictEqual(resultado, 2);
  });

  it('4 * 5 debería ser igual a 20', function () {
    const resultado = 4 * 5;
    assert.strictEqual(resultado, 20);
  });

  it('10 / 2 debería ser igual a 5', function () {
    const resultado = 10 / 2;
    assert.strictEqual(resultado, 5);
  });

  it('Prueba de igualdad de cadenas', function () {
    const cadena1 = 'Hola, mundo';
    const cadena2 = 'Hola, mundo';
    assert.strictEqual(cadena1, cadena2);
  });
  
});
