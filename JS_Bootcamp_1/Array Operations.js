let fruits = ["apple"]
fruits[1]="banana"
fruits.push("orange")
console.log("After adding fruits:",fruits,"\n")

//removing first element
fruits.splice(0,1)
console.log("After Removig First Fruit:",fruits,"\n")

//adding grape
fruits.push("grape")
console.log("After adding a new Fruit:",fruits,"\n")

//updating
fruits[1]="pear"
console.log("After Updating the Fruits:",fruits,"\n")

/*
Output:
After adding fruits: [ 'apple', 'banana', 'orange' ] 

After Removig First Fruit: [ 'banana', 'orange' ] 

After adding a new Fruit: [ 'banana', 'orange', 'grape' ] 

After Updating the Fruits: [ 'banana', 'pear', 'grape' ] 
*/