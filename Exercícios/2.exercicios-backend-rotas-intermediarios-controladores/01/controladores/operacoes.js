const somar = (req, res) => {
    const { num1, num2 } = req.query;
    let soma = parseFloat(num1) + parseFloat(num2);
    res.send(`${soma}`);
};

const subtrair = (req, res) => {
    const { num1, num2 } = req.query;
    let subtracao = parseFloat(num1) - parseFloat(num2);
    res.send(`${subtracao}`);
};

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query;
    let multiplicacao = parseFloat(num1) * parseFloat(num2);
    res.send(`${multiplicacao}`);
};

const dividir = (req, res) => {
    const { num1, num2 } = req.query;
    let divisao = parseFloat(num1) / parseFloat(num2);
    res.send(`${divisao}`);
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}