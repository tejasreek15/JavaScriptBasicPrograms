let map = new Map();

map.set("riya", "java")
map.set("laya", "c")
map.set("vita", "javascript")
map.set("riya", "c++")

console.log(map)

console.log(map.has("lio"))
console.log(map.has("vita"))

console.log(map.get("laya"))


for(let [k, v] of map) {
    console.log(k ,":", v)
}

map.forEach( (v, k) => 
    console.log(k ,":", v))