function bmi() {
    let h = document.getElementById("height");
    let w = document.getElementById("weight");
    let result = w.value / (h.value * h.value);
    if (result < 18.5) {
        document.getElementById('result').innerText = result.toFixed(2) + " is your BMI value [underweight 🍔]"
    }
    else if (result > 18.5 && result < 24.9) {
        document.getElementById('result').innerText = result.toFixed(2) + " is your BMI value [Normal 💪]"
    }
    else if (result > 25 && result < 29.9) {
        document.getElementById('result').innerText = result.toFixed(2) + " is your BMI value [Overweight 🤫]"
    }
    else if (result > 30 && result < 35) {
        document.getElementById('result').innerText = result.toFixed(2) + " is your BMI value [Obesity 😔]"
    }
    else {
        document.getElementById('result').innerText = result.toFixed(2) + " is your BMI value [Morbid Obesity🤯]"
    }
    h.value = ''
    w.value = ''
}