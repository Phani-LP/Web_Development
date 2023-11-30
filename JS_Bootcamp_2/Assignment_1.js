function findit(n)
{
	if (n>0)
	{
		console.log("Positive")
	}
	else if(n<0)
	{
		console.log("Negative")
	}
	else if(n==0)
	{
		console.log("Zero")
	}
	else
	{
		console.log("Invalid input!! Please enter a number.")
	}
}
findit(10)
findit(-10)
findit(0)
findit("Hello")

/*
Output:
Positive
Negative
Zero
Invalid input!! Please enter a number.
*/