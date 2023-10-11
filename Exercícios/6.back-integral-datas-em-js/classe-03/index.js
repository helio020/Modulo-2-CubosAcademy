const taAberto = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours < 8 || hours > 18) {
        return false;
    }

    if (hours === 18 && minutes > 0) {
        return false;
    }

    return true;
};

const resultado = taAberto(new Date(2015, 1, 1, 8, 1));

console.log(resultado);