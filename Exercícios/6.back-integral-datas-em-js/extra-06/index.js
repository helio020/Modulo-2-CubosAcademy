const taValendoPromocao = (date1, date2) => {
    const timestampPromocao = +date1;
    const timestampCliente = +date2;
    const timestamp24Horas = 24 * 60 * 60 * 1000 + timestampPromocao;

    if (timestampCliente < timestampPromocao) {
        return false;
    }

    if (timestampCliente > timestamp24Horas) {
        return false;
    }

    return true;
};

const resultado = taValendoPromocao(new Date(2023, 8, 2, 8), new Date(2023, 8, 3, 8));

console.log(resultado);

