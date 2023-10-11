const taAberto = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDay();

    if (hours < 8 || hours > 18) {
        return false;
    }

    if (hours === 18 && minutes > 0) {
        return false;
    }

    if (day === 6 || day === 0) {
        return false;
    }

    return true;
};

const resultado = taAberto(new Date(2021, 3, 26, 7, 59));

console.log(resultado);