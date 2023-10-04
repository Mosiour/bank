document.getElementById('btn-withdraw').addEventListener('click',function(){
   const withdrawText = document.getElementById('withdraw');
   const withdrawMoneyString = withdrawText.value;
   const withdrawMoney = parseFloat(withdrawMoneyString);


   withdrawText.value = '';
   if(isNaN(withdrawMoney)){
    alert('please provide a valid number');
    return;
   }

   const totalWithdrawElement = document.getElementById('total-withdraw');
   const getTotalWithdrawString = totalWithdrawElement.innerText;
   const getTotalWithdraw = parseFloat(getTotalWithdrawString);
  

    const totalBalance2 = document.getElementById('total-balance');
    const totalBalanceString = totalBalance2.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    if(withdrawMoney>totalBalance){
      alert('Bap er bank a ato tk nai')
      return;
    }

    const totalWithdraw = getTotalWithdraw + withdrawMoney;
    totalWithdrawElement.innerText = totalWithdraw;

    const TotalDepositCurrent = totalBalance - withdrawMoney;
    totalBalance2.innerText = TotalDepositCurrent;
 })