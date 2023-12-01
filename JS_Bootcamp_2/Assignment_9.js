function fibonacciSeries(n) 
{
    let fibonacci = [];
    let a = 0;
    let b = 1;

    while (a <= n) 
	{
        fibonacci.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return fibonacci;
}
const num = parseFloat(window.prompt("Enter a number: "))
const fibSeries = fibonacciSeries(num);

console.log("Fibonacci series up to ",num,":");
console.log(fibSeries.join(', '));

/*
Output:
Fibonacci series up to 58:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
Fibonacci series up to 10:
0, 1, 1, 2, 3, 5, 8
Fibonacci series up to 25:
0, 1, 1, 2, 3, 5, 8, 13, 21
*/