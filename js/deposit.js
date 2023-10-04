document.getElementById('btn-deposit').addEventListener('click',function(){
    const deposit = document.getElementById('deposit');
    const depositAmountString = deposit.value;
    const depositAmount = parseFloat(depositAmountString);
    const totalDepositElement = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);
    const currentTotalDeposit = previousTotalDeposit + depositAmount;
    totalDepositElement.innerText = currentTotalDeposit;

    const totalBalance2 = document.getElementById('total-balance');
    const totalBalanceString = totalBalance2.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const TotalDepositCurrent = totalBalance + depositAmount;
    totalBalance2.innerText = TotalDepositCurrent;

    deposit.value = '';
})