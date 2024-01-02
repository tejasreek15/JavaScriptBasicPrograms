//if else statement
let num1 = 56
let num2 = 23
let num3 = 45
if(num1 > num2 && num1 > num3) {
    console.log("num1 is greater")
} else if(num2 > num3) {
    console.log("num2 is greater")
} else {
    console.log("num3 is greater")
}


//switch  statement
let day = new Date().getDay();
switch(day) {
    case 0: day = "Sunday"
    console.log("Sunday")
    break;
    case 1: day = "Monday"
    console.log("Monday")
    break;
    case 2: day = "Tuesday"
    console.log("Tuesday")
    break;
    case 3: day = "Wednesday"
    console.log("Wednesday")
    break;
    case 4: day = "Thursday"
    console.log("Thursday")
    break;
    case 5: day = "Friday"
    console.log("Friday")
    break;
    case 6: day = "Saturday"
    console.log("Saturday")
    break;
    default: console.log("No Data")
}
