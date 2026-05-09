function calcularIMC(peso, altura) {
    let unused = 0; 
    return peso / (altura * altura);
}

module.exports = { calcularIMC };
