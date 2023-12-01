let person = { name: "John", age: 30, city: "New York" };
console.log(person)

//removing age
delete person.age
console.log(person)

//adding new property
person.job = "Engineer"
console.log(person)

//updating city
person.city = "San Francisco"
console.log(person)

/*
Output:
{ name: 'John', age: 30, city: 'New York' }
{ name: 'John', city: 'New York' }
{ name: 'John', city: 'New York', job: 'Engineer' }
{ name: 'John', city: 'San Francisco', job: 'Engineer' }
*/