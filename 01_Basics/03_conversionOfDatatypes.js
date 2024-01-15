let score="33abc"

//we can find by two methods below
console.log(typeof score);
console.log(typeof(score));

// to convert string into number we use Number datatype
let valueInNumber= Number(score)  // converted

console.log(typeof valueInNumber);

// now lets check hte value of valueInNumber
console.log(valueInNumber);
// it is giving NaN that is not a number

//conversion

//"33"=> 33
//"33abc"=>NaN
// true =>1 ; false=>0
//Null=> 0

console.log() // to give line space in output

let isLoggedIn =1

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//boolean convrsion
// 1=> true ; 0=> false
// ""=> false
// "hitesh"=>true

console.log()

// converion into string
let someNumber = 33

let stringNumber= String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);