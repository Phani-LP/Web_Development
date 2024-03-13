//producing code
function final()
{
    let myPromise = new Promise(function(myResolve, myReject){
        let operand = parseFloat(document.getElementById("operand").value);
        if(operand>18){
            myResolve("You are eligible for vote.");
        }
        else{
            myReject("sorry, you are not eligible for vote");
        }
});
//consuming code
myPromise.then(
    function(value){display(value);},
    function(value){display(value);}
    
);
}

display=(value)=>{
    document.getElementById("demo").innerHTML = value;
}