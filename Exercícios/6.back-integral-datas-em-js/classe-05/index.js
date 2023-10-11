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

    if (day === 0) {
        return false;
    }

    if (day === 6 && hours < 8) {
        return false;
    }

    if (day === 6 && hours >= 12 && minutes > 0) {
        return false;
    }

    return true;
};

const resultado = taAberto(new Date(2021, 3, 24, 12, 1));

console.log(resultado);