// how constant are assigned in variable
const accountId = 14534  //constant = value does not change
// we cannot write it as accountId=2 after assigning

/* to declare variable we can use let or var. but we use let in java,
 because var has block scope and functional scope problem, but let dont.
 so dont use var*/
 
let accountEmail ="abcd.com"
var accountPassword = "123345"

// we can also declare variable like this but its not a good practice
accountCity = "lucknow"

// we can change the value of variable anytime
accountEmail ="bgh.com"

/*if we just declare the variable without giving its value,
it returns undefined */
let accountState;   // we can use or not use ;

console.log(accountId) //for single print

// for multiple prints
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
