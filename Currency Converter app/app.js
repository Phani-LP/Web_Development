/*function converter()
{
    let from = document.querySelector('input[name="from"]:checked').value;
    let to = document.querySelector('input[name="to"]:checked').value;

    /*if (currency_1 != null){
        document.write("radio button selected\n")
        document.write(currency_1,"\n")
        document.write(typeof currency_1)
        document.write(currency_1.value)
    }
    */
    //let amount = document.getElementById("Amount");
/*    let a = parseFloat(document.getElementById("Amount").value)    
    if (from === "Doller") && (to === "Rupee")
    {
        //document.write(typeof amount);
        //document.write(typeof amount.value);
        //document.write(amount);
        //document.write(amount.value);
        
        let r = (a)*84.5.toFixed(2);
        document.getElementById('res').innerText = ":"+r;
        
        //document.write(from.value)
        //document.write(to.value)
        
    }
    
}
*/
function converter() {
    let from = document.querySelector('input[name="from"]:checked').value;
    let to = document.querySelector('input[name="to"]:checked').value;
    let a = parseFloat(document.getElementById("Amount").value);

    if (from === "2" && to === "1") {
        let r = (a * 83.22).toFixed(2);
        document.getElementById('Result').innerText = r;
    }
    else if (from === "2" && to === "3") {
        let r = (a * 0.87).toFixed(2);
        document.getElementById('Result').innerText = r;
    }
    else if (from === "1" && to === "2") {
        let r = (a / 83.22).toFixed(2);
        document.getElementById('Result').innerText = r;
    }
    else if (from === "1" && to === "3") {
        let r = (a / 97.3).toFixed(2);
        document.getElementById('Result').innerText = r;
    }
    else if (from === "3" && to === "1") {
        let r = (a * 97.3).toFixed(2);
        document.getElementById('Result').innerText = r;
    }
    else if (from === "3" && to === "2") {
        let r = (a / 0.87).toFixed(2);
        document.getElementById('Result').innerText = r;
    }
    else if (from === "1" && to === "1") {
        document.getElementById('Result').innerText = "Please select different types.";
    }
    else if (from === "2" && to === "2") {
        document.getElementById('Result').innerText = "Please select different types.";
    }
    else if(from === "3" && to === "3") {
        document.getElementById('Result').innerText = "Please select different types.";
    }
    else{
        document.getElementById('Result').innerText = "Invalid conversion";
    }

}
function reset() {
    //clearing the selected radio buttons
    const fromRadios = document.getElementsByName("from");
    const toRadios = document.getElementsByName("to");
    fromRadios.forEach(radio => {
        radio.checked = false;
    });
    toRadios.forEach(radio => {
        radio.checked = false;
    });
    //clearing the amount input and result
    document.getElementById("Amount").value = "";
    document.getElementById("Result").innerText = "";
}