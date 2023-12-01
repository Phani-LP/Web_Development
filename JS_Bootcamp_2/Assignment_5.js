function primeornot(n) 
{
	let prime = []
	while(n>1)
	{   
		let c = 0
		for (let i=n-1; i > 1; i--)
		{
			if (n % i === 0){
				c+=1
			}
			
		}
		if (c===0){
				prime.push(n)
		}
		n = n-1
	}
	return prime
}
let n = window.prompt('Enter a number: ');
console.log(primeornot(n));

/*
Output:
[ "11", 7, 5, 3, 2 ]
[ "17", 13, 11, 7, 5, 3, 2 ]
*/