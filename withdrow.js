/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function

*/
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    console.log(newWithdrawAmount);
})