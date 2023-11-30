function isPerfectNumber(number) {
    if (number <= 0) {
        return false
    }
	let c = 1;
    for (let i = 2; i * i <= number; i++) 
	{
        if (number % i === 0) 
		{
            c += i;
            if (i * i !== number) 
			{
                c += number / i;
            }
        }
    }
    return c === number;
}

const num = parseFloat(window.prompt("Enter a number: "));
const isPerfect = isPerfectNumber(num);

if (isPerfect) 
{
    console.log(num," is a perfect number.");
} else {
    console.log(num," is not a perfect number.");
}


/*
output:
8 is not a perfect number.
6 is a perfect number.
28 is a perfect number.
93 is not a perfect number.
*/