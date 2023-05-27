// N1

let numbers = [ 15, 7, 85, 25, 44]
   
let numbersSum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
console.log(numbersSum)

// N2
let persons = [
{
    name: "John",
    age: 25,
    city: "Los Angeles",
    Country: "United States",
},
{
    name: "Jane",
    age: 23,
    city: "London",
    Country: "United Kingdom",
},
{
    player3: "Samuel",
    age: 31,
    city: "Barcelona",
    Country: "Spain",
},
];


// N2,N4
let person = {
    name: "John",
    age: 25,
    city: "Los Angeles",
    Country: "United States",
}
if (person.age <= 18) {
    console.log(`${person.name} is a teenager.`);
} else {
    console.log(`${person.name} is an adult.`);
};

// N3
console.log(`My name is ${person.name}. I live on Oniashvili street N.71.`)


// N5
let number = {
    a: 15,
    b: 7,
    c: 85,
    d: 25,
    e: 44,
}
// for (let i=0; i < 70;) {
//     number = number + i;
// }
// console.log(number);



// N6

const currentDay = new Date().getDay();
console.log(currentDay)

switch (currentDay) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Today is not a day");
        break;
};
  






