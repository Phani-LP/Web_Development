let ans = '';

document.addEventListener('keydown', function (event) {
    handleKeyPress(event.key);
});

function handleKeyPress(key) {
    if (key >= '0' && key <= '9') {
        addNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        addOperator(key);
    } else if (key === '=') {
        Evaluate();
    }
}

function Evaluate() {
    ans = eval(ans);
    document.getElementById('display').innerText = ans;
}

function addNumber(n) {
    ans = ans + parseFloat(n);
    document.getElementById('display').innerText = ans;
}

function addOperator(op) {
    ans = ans + op;
    document.getElementById('display').innerText = ans;
}

function clearDisplay() {
    ans = '';
    document.getElementById('display').innerText = ans;
}
