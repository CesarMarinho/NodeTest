//test Function
exports.getTest = (req, res) => {
    res.send('Running API');
};

//calculate interest
exports.calculateInterest = (req, res) => {
    res.status(200).json(applyInterest(
        req.query.capital,
        req.query.period,
        req.query.rate))
};

//capital -> invested money
//period -> time in month
//rate -> monthly fee

function applyInterest(capital, period, rate){
    let totalCapital = 0;
    let monthValue = 0;
    let percent = 0;

    for (let i = 1; i <= period; i++) {
        totalCapital = capital * (1 + rate / 100) ** i;
  
        monthValue = totalCapital - capital;
  
        percent = monthValue / capital;
    }
    
    return totalCapital.toFixed(3);
}
