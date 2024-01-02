let nums = new Set();

nums.add(8)
nums.add(5)
nums.add(8)
nums.add("honey")
nums.add("sree")
nums.add("riya")

nums.forEach( n => console.log(n))

console.log(nums.has(8))
console.log(nums.has(2))