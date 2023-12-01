function splitTheBill()
{
    let h = document.getElementById("amount");
    let w = document.getElementById("people");
    let r = (h.value)/(w.value);
    document.getElementById('result').innerText = r.toFixed(2)+" is the amount for each Person."
    h.value=''
    w.value=''
}