const somavalores = require('./soma');

test('soma de 1 + 2 é igual a 3', () => {
    expect(somavalores(1, 2)).toBe(3);
});