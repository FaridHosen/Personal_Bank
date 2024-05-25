

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositeAmount = getInputValueById('deposit-field');
//    get previous deposite total by id 
    const previousDepositeTotal = getTextElementValueByid('deposit-total');
    // calculate new deposit total 
    const newDepositTotal = previousDepositeTotal + newDepositeAmount;
    // set deposit total value 
    setTextElementValueById('deposit-total', newDepositTotal)

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
    
})