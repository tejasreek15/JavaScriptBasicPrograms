let values = [1, 2, 3, 4, 5];

console.log(values[1])
console.log(values.push(6))    
console.log(values.pop())       //removes the last element
console.log(values.shift())     //removes the first element
console.log(values.unshift(1))  //insert the element in first
console.log(values.splice(3, 2, 90))
console.log(values)





let names = ['tommy', 'puppy', 'pinky']
names[3] = 'sweety'
console.log(names)







let data = ['riya', 4, {tech: 'js'}, function() {
    console.log('Hello World')
}]

console.log(data)
//console.log(data.tech)
data[3]()





//Array Destructing
let nums = [3, 6, 2, 5, 1]
console.log(nums)
let [a, b, c, d, e] = nums
console.log(c)


// let num1 = 7
// let num2 = 4
// [num1, num2] = [num2, num1]
// console.log(num1, num2)


let words = "Hi User !, Welcome to JS Tutorial".split(' ')
let [p, q, , ...s] = words
console.log(s)