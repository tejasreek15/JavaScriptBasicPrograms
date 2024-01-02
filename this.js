let laptop = {
    name: "lenovo",
    cpu : "i7",

    greet: function() {
        console.log(this.name)
    }
}

laptop.greet()