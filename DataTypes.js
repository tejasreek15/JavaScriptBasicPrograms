//DataTypes are of two types in JS.
//1. Primitive: String, Number, Boolean, BigInt, Undefined, Null, Symbol
//2. Object: Object, Array, Date


// Primitive Data Types

// String
let userName = "Honey"             
console.log(userName)

let y = "Honey's Account"
console.log(y)

let x = 'Honey "Account"'
console.log(x)


//Number
let number = 32;
console.log(number)

let number1 = 12.89
console.log(number1)

let number2 = 45e5
console.log(number2)

let number3 = 5 / "xyz"
console.log(number3)       // o/p: NaN - Not a Number


//Boolean
let a = 11
let b = 45
console.log(a==b)


//BigInt
let x1 = BigInt("123456789012345678901234567890")
console.log(x1)


//undefined
let user;
console.log(user)
console.log(typeof user)


//null
let userName1 = null;
console.log(userName1)
console.log(typeof userName1)

//empty
let userName2 = "";
console.log(userName1)          //o/p: null
console.log(typeof userName1)