
const contagem = require('../funcoes/contagem');

test(`contagem 1 a 7 = ${contagem([1, 7])}` , () => {
    const dados = [1, 7];
    const resultado = contagem(dados);
    expect(resultado).toBe(7); 
});


const fibonacci = require('../funcoes/fibonacci');

test(`fibonacci 6 = ${fibonacci(6).join(', ')}`, () => {
    const resultado = fibonacci(6);
    expect(resultado).toEqual([0, 1, 1, 2, 3, 5]);  
  });

  test(`fibonacci 3 = ${fibonacci(3).join(', ')}`, () => {
    const resultado = fibonacci(3);
    expect(resultado).toEqual([0, 1, 1]);  
  });


const mdc = require('../funcoes/mdc');

test(`mdc 56, 98 = ${mdc(56, 98)}` , () => {
    const resultado = mdc(56, 98);
    expect(resultado).toBe(14);
});


const ordenacao = require('../funcoes/ordenacao');

test(`ordenação [8, 3, 1, 7, 0, 10, 2] = ${ordenacao([8, 3, 1, 7, 0, 10, 2])}` ,() => {
    const array = [8, 3, 1, 7, 0, 10, 2];
    const resultado = ordenacao(array);
    expect(resultado).toEqual([0, 1, 2, 3, 7, 8, 10]);
});


const primo = require('../funcoes/primo');

test(`primo 3 = ${primo(3)}` ,() => {
    expect(primo(3)).toBe(true);

});

test(`primo 1 = ${primo(1)}` , () => {
    expect(primo(1)).toBe(false);
});

const soma = require('../funcoes/soma');

test(`lista [0, 2, 4, 6] = ${soma([0, 2, 4, 6])}` , () => {
    const lista = [0, 2, 4, 6];
    const resultado = soma(lista);
    expect(resultado).toBe(12);
});