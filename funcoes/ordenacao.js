function ordenacao(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivo = array[0];

    let menores = [];
    let maiores = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivo) {
            menores.push(array[i]);
        } else {
            maiores.push(array[i]);
        }
    }

    return [...ordenacao(menores), pivo, ...ordenacao(maiores)];
}

module.exports = ordenacao;