let laptop = {
    name : 'lenovo',
    year : 2023,
    charger : {
        name : 'laptop charger'

    }
}

console.log(laptop.name)
console.log(laptop.name.length)
console.log(laptop.charger.name)

delete laptop.year

console.log(laptop)