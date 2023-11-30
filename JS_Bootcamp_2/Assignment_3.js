function largenum(x, y) {
    if (x > y)
        console.log(x, " is bigger than ", y, ".");
    else if (x < y)
        console.log(y, " is bigger than ", x, ".");
    else if (x == y)
        console.log(x, " and ", y, " both are equal.");
    else
        console.log("Invalid Input!!!");
}

let a = parseFloat(window.prompt("Enter 1st number: "));
let b = parseFloat(window.prompt("Enter 2nd number: "));
largenum(a, b);

/*
Output:
548 is bigger than 25.
5 and 5 both are equal.
Invalid Input!!!
654 is bigger than 32.
*/