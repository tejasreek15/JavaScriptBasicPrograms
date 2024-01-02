let nums = [10, 21, 44, 18, 80]

let result = nums.filter( n => n%2===0)
    .map(n => n*2)
    .reduce( (a,b) => a + b)

console.log(result)