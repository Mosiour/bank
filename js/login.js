//step-1
//Add click event handler with button 
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2
    //get the email address in the email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3
    //get the password in the password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password);
    //step-4
    //verify email & password
    if(email === 'munna@gmail.com' && password === '12345'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid user');
    }
})