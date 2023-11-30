let a = parseFloat(window.prompt("Enter a value: "))
let b = parseFloat(window.prompt("Enter b value: "))
let operator = prompt("Enter an operator(+ - * /): ")
console.log(a,operator,b,"=",calculator(a,b,operator))

function calculator(a,b,operator)
{   
	switch(operator){
		case '+':
			return a+b;
		case '-':
			return a-b;
		case '*':
			return a*b;
		case '/':
			if (b!==0) {
				return a/b;
			}
			else{
				return "Zero Division Error"
			}
		default:
			return "Invalid Input"
	}
}

/*
Output:
24+12=36
88/4=22
35NaN=Invalid Input
20-10=10
2*5=10
20/0=Zero Division Error
*/