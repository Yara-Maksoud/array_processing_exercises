//Exercise 1
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

function filterRange(arr, a, b){
   return arr.filter(element => element >= a && element <= b);
}

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 29 }

let users = [ john, pete, mary ]

let names = users.map(user => user.name);

console.log(names);// John, Pete, Mary

// Exercises 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

function getAverageAge(arr){
    const sum = arr.reduce((sum, user) => sum + user.age, 0);
    return sum/arr.length;
}

let array = [ john, pete, mary ]

console.log(getAverageAge(array));  // (25 + 30 + 29) / 3 = 28