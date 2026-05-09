const { calcularIMC } = require('./imc');

test('IMC de 70kg e 1.75m deve ser aproximadamente 22.86', () => {
    expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86, 1);
});

test('IMC de 90kg e 1.80m deve ser aproximadamente 27.78', () => {
    expect(calcularIMC(90, 1.80)).toBeCloseTo(27.78, 1);
});

test('IMC de 50kg e 1.60m deve ser aproximadamente 19.53', () => {
    expect(calcularIMC(50, 1.60)).toBeCloseTo(19.53, 1);
});

test('IMC de 80kg e 1.70m deve ser 10 (teste de falha)', () => {
    expect(calcularIMC(80, 1.70)).toBe(10);
});
