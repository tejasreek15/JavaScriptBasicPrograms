//Operators: Arithmetic, Assigment, Comparsion, String, Logical, Bitwise, Ternary, TypeOf



//Arithmetic Operator: +, -, *, /, %, ++, --, **
//Assignment Operator: =, +=, -=, *=, /=, %=, **=
let num1 = 4
let num2 = 2
console.log( num1 + num2)
console.log( num1 - num2)
console.log( num1 * num2)
console.log( num1 / num2)
console.log( num1 % num2)
let x = num1++     // post increment
console.log( x )
let x1 = ++num2    // pre increment
console.log( x1 )
let y = num2--    
console.log( y )
console.log( 4 ** 2)

let num = 5 + 5;
let str = "5" + 5;
let numstr = "Hello" + 5;
console.log(numstr)





//Comparsion Operator: ==, ===, !=, !==, >, <, >=, <=
console.log(num1 == num2)
console.log(num1 === num2)
console.log(num1 != num2)
console.log(num1 !== num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)

let string1 = "Laptop"
let string2 = "Charger"
console.log(string1 > string2)  // o/p: true beacause strings are compared alphabetically
let number1 = "10"
let number2 = "6"
console.log(number1 > number2)  // o/p: false
let number3 = "10"   // will convert string to number
let number4 = 2
console.log(number3 > number4)
let number5 = "10"
let number6 = 10
console.log(number5 == number6)      // == checks data 
console.log(number5 === number6)     // === checks data and type





//Logical Operator: ||, &&, !
console.log(num1 >= num2 || num1<=num2) // (true || false) => true
console.log(num1 >= num2 && num1<=num2) // (true && false) => false
console.log(num1 != num2)













//Ternary Operator
let z = 5
let result
result = (z%2===0) ? "Even" : "Odd"
console.log(result)
