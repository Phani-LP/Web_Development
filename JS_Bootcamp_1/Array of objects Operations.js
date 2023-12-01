var cars = []
cars.push(
    {make: "Toyota",model: "Camry",year: 2018},
    {make: "Toyota",model: "Camry",year: 2018},
    {make: "Toyota",model: "Camry",year: 2018}
)
console.log(cars)
//Removing the first car object
cars.shift()
console.log(cars)
//adding a new car object
cars.push({make: "Honda",model: "Civic",year: 2020})
console.log(cars)
//updating the model property of 2nd car obj
cars[1].model = "Accord"
console.log(cars)

/*
Output:
[
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Toyota', model: 'Camry', year: 2018 }
]

[
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Toyota', model: 'Camry', year: 2018 }
]

[
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Honda', model: 'Civic', year: 2020 }
]

[
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Toyota', model: 'Accord', year: 2018 },
  { make: 'Honda', model: 'Civic', year: 2020 }
]

*/
