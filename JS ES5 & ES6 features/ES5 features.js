//Examples: For ES5 features
var myArray = [-33,5,4,8,15];
console.log(Array.isArray(myArray));

//isArray()
var output1 = myArray.map(
    function(element){
        return (element + 20);
    }
)
console.log(output1)

//map()
var output2 = myArray.filter(
    function (element){
        return element > 2
    }
)
console.log(output2)

//filter()
var output3 = myArray.forEach(
    function (element){
        console.log(element + 100)
    }
)

//every() - return true or false
var myArray2 = [10,15,4,7,92]
var output4 = myArray2.every(
    function (element){
        return element>100
    }
)
console.log(output4)

//some() -  return true or false
var myArray3 = [99,15,4,7,95]
var output5 = myArray3.every(
    function (element){
        return element>91
    }
)
console.log(output5)

//indexOf() - return index
let myArray4 = [25,57,8,25,44,58]
console.log(myArray4.indexOf(25))

//lastIndexOf() - return index
console.log(myArray4.lastIndexOf(25))


//stingify()
var data = {name:'phani', age:20}
var json_object = JSON.stringify(data)
console.log(json_object)

//valueOf()
var myObject = {
    value: 42,
    valueOf: function() {
        return this.value;
    }
};
var result = myObject + 10;
console.log(result);