//Type Conversion

// convert number to string
let number = String(23)
console.log(number, typeof number)

let num = 2 + "";                        // number + string = string
console.log(num, typeof num)

let num1 = 2 - "";                       // number - string = number
console.log(num1, typeof num1)

// convert String to Number
let number1 = Number("23")
console.log(number1, typeof number1)

//convert Boolean to Number
let number2 = Number(true)
console.log(number2, typeof number2)

let number3 = Number(false)
console.log(number3, typeof number3)

let number4 = !2;
console.log(number4, typeof number4)

console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(null))
console.log(Boolean(""))
console.log(Boolean("Honey"))



let x = parseInt("123 Honey")
console.log(x)

let x1 = "5";
let x2 = x1 + 2;
console.log(x2,  typeof x2)

let x3 = "5";
let x4 = +x3 + 2;                    // adding unnary operator before string it converts into number
console.log(x4,  typeof x4)