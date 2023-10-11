const taValendoPromocao = (date1, date2) => {
    const timestampPromocao = +date1;
    const timestampCliente = +date2;
    const timestamp30Dias = (24 * 60 * 60 * 1000) * 30 + timestampPromocao;

    if (timestampCliente < timestampPromocao) {
        return false;
    }

    if (timestampCliente > timestamp30Dias) {
        return false;
    }

    return true;
};

const resultado = taValendoPromocao(new Date(2023, 7, 2), new Date(2023, 8, 1));

console.log(resultado);