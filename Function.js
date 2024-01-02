function greet(user){
    return `Hello ${user}`
}

let user = 'tejasree'
let str = greet(user)
console.log(str)





//Function Expression

let add = function(num1, num2){
    return num1 + num2
}

let result = add(5,5) 
console.log(result)




//Arrow Function
let greet1 = (user) => {
    console.log("Hello " + user)
    return 1
}
console.log(greet1("user"))


let sub = (num1, num2) => num1 - num2;

let result1 = sub(5,2)
console.log(result1)





//Function in Object
let laptop = {
    name: "lenovo",
    cpu : "i7",

    greet: function() {
        console.log("Hello World")
    }
}

laptop.greet()