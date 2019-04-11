function Validate(){
var password =document.getElementById("psw").value;
var confirmPassword =document.getElementById("psw-repeat").value;
            if (password !=confirmPassword){
                alert("The passwords don't match.Check the passwords again");
                return false;
            }
                return true;
}