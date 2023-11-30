function fun(num)
{
	if (num<=0)
	{  
		console.log("Invalid Input")
	}
	for(let i=1;i<=10;i++)
	{
		console.log(num,"*",i,"=",num*i);
	}
}

let num = parseInt(window.prompt("Enter a number: "))
fun(num)

/*
Output:
12*1=12
12*2=24
12*3=36
12*4=48
12*5=60
12*6=72
12*7=84
12*8=96
12*9=108
12*10=120
*/