const express = require('express');
const app = express();

let min = 0;
let seg = 0;

const contar = () => {
    seg++;
    if (seg > 59) {
        seg = 0;
        min++;
    }
};

let intervalo;

const iniciarContagem = () => {
    intervalo = setInterval(contar, 1000);
};

let intervalo2;

const continuarContagem = () => {
    intervalo2 = setInterval(contar, 1000);
};

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${min} minutos e ${seg} segundos`);
});

app.get('/iniciar', (req, res) => {
    res.send('Cronômetro iniciado!');
    clearInterval(intervalo2);
    iniciarContagem();
});

app.get('/pausar', (req, res) => {
    res.send('Cronômetro pausado!');
    clearInterval(intervalo);
    clearInterval(intervalo2);
});

app.get('/continuar', (req, res) => {
    res.send('Cronômetro continuando!');
    clearInterval(intervalo);
    continuarContagem();
});

app.get('/zerar', (req, res) => {
    res.send('Cronômetro zerado!');
    min = 0;
    seg = 0;
});

app.listen(8000);