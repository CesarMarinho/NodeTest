exports.getTest = (req, res) => {
    res.send('API Funcionando!');
};

exports.calculaJuros = (req, res) => {
    res.status(200).json(aplicarJuros(
        req.query.capital,
        req.query.periodo,
        req.query.taxa))
};

function aplicarJuros(capital, periodo, taxa){
    let capitalTotal = 0;
    let valorMensal = 0;
    let porcentagem = 0;

    for (let i = 1; i <= periodo; i++) {
        capitalTotal = capital * (1 + taxa / 100) ** i;
  
        valorMensal = capitalTotal - capital;
  
        porcentagem = valorMensal / capital;
    }

    return capitalTotal.toFixed(3);
}
