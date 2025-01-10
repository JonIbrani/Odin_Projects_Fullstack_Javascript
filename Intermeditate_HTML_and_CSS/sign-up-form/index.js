

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmedPassword = document.getElementById("confirmPassword").value;

   
    console.log("Confirmed Password: ", password);
    console.log("Confirmed Password: ", confirmedPassword);


    if (password !== confirmedPassword) {
      
        document.getElementById("confirmPassword").style.border= "1px solid red";
       
    } else {
        
        document.getElementById("confirmPassword").style.border= "1px solid #E5E7EB";

}
}


