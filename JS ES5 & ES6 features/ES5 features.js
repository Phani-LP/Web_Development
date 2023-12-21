//Examples: For ES5 features
var myArray = [-33,5,4,8,15];
console.log(Array.isArray(myArray));

var output1 = myArray.map(
    function(element){
        return (element + 20);
    }
)
console.log(output1)

let output2 = myArray.filter(
    function (element){
        return element > 2
    }
)
console.log(output2)