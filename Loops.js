//While Loop
let i = 1
while(i < 5) 
{
    console.log("Hi")
    i++
}



//Do While Loop
let y = 2;
do{
    console.log("Hello")
    y++
}while(y < 10);




//For Loop
for(let i = 1; i <= 5; i++){
    console.log("Hi", i)
}




//For In Loop
let laptop = {
    name : 'lenovo',
    year : 2023,
    charger : {
        name : 'laptop charger'

    }
}

for(let key in laptop){
    console.log(key, laptop[key])
}







//For Of Loop
let nums = []
nums[0] = 0
nums[99] = 99

for(let n of nums) {
    console.log(n)
}





//For Each Loop
let number = [23, 14, 10, 56, 11]

number.forEach( n => console.log(n) )