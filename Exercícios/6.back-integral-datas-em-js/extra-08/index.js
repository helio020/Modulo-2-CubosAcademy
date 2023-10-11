const { format } = require('date-fns');

const funcaoA = (date) => {
    const data = format(date, "dd 'de' 'outubro' 'de' y");
    return data;
};
const resultadoA = funcaoA(new Date(2020, 9, 5));
console.log(resultadoA);

const funcaoB = (date) => {
    const data = format(date, "dd/MM/y");
    return data;
};
const resultadoB = funcaoB(new Date(2020, 9, 5));
console.log(resultadoB);

const funcaoC = (date) => {
    const data = format(date, "d 'out'");
    return data;
};
const resultadoC = funcaoC(new Date(2020, 9, 5));
console.log(resultadoC);

const funcaoD = (date) => {
    const data = format(date, "dd 'out' y");
    return data;
};
const resultadoD = funcaoD(new Date(2020, 9, 5));
console.log(resultadoD);

const funcaoE = (date) => {
    const data = format(date, "dd 'de' 'out' 'de' y");
    return data;
};
const resultadoE = funcaoE(new Date(2020, 9, 5));
console.log(resultadoE);

const funcaoF = (date) => {
    const data = format(date, "dd/'out'");
    return data;
};
const resultadoF = funcaoF(new Date(2020, 9, 5));
console.log(resultadoF);