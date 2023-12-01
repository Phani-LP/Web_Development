function factorial(num)
{
	let s=1;
	for(let i=1;i<=num;i++)
		s = s*i
	return s
}

let num = window.prompt("Enter a number: ")

if (num>0){
	console.log("Factorial of ",num,"is ",factorial(num))
}
else{
	console.log("Please enter a positive number!")
}

/*
Output:
Factorial of 3 is 6
Factorial of 6 is 720
Factorial of 9 is 362880
Factorial of 10 is 3628800
Please enter a positive number!
Factorial of 5 is 120
*/