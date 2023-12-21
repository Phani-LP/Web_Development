function showpassword(){
    let x =document.getElementById("pass");
    if (x.type === "password"){x.type = "text";}
    else{x.type = "password";}
}
function welcome(){
    let password = document.getElementById("pass").value;
    let user_name = document.getElementById("name").value;
    if(user_name === "Phani" && password === "12345"){
        window.location.href = "Welcome.html";
    }
    else{
        window.prompt("Wrong Credentials")
    }
}
function registered(){
    let customer_name = document.getElementById("cname").value;
    //let customer_name_value = customer_name ? customer_name.value : "Phani";
    let customer_password = document.getElementById('cpass').value;
    let customer_phone_num = document.getElementById('cphone').value;
    //let customer_password_value = customer_password ? customer_password.value : "12345";
    if (customer_name !== '' && customer_password.length >= 8 && customer_phone_num.length == 10){
        window.location.href = "Welcome.html";
    }
    else{
        alert(`User name should not be empty and Password length must be 8 or more characters and phone number must be 10 numbers!!`);
    }

}

function showmethepassword(){
    let y =document.getElementById("cpass");
    if (y.type === "password"){
        y.type = "text";
    }
    else{y.type = "password";}
}