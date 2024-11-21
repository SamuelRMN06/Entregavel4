function fibonacci(n) {
    let a = 0;
    let b = 1;
    let resultado = [];

    for (let i = 0; i < n; i++) {
        resultado.push(a);
        let termoatual = a + b;
        a = b;
        b = termoatual;
    }

    return resultado;
}

module.exports = fibonacci;
