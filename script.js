// N1

let numbers = {
    a: 15,
    b: 7,
    c: 85,
    d: 25,
    e: 44,
}
console.log (numbers.a-numbers.b+numbers.c+numbers.d-numbers.e)


// N2
// let persons = {
//     name: "John",
//     age: 25,
//     city: "Los Angeles",
//     Country: "United States",
// },
// {
//     name: "Jane",
//     age: 23,
//     city: "London",
//     Country: "United Kingdom",
// },
// {
//     player3: "Samuel",
//     age: 31,
//     city: "Barcelona",
//     Country: "Spain",
// },
// };


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
console.log(`My name is ${person.name}. I live on Oniashvili street N.${numbers.a}.`)


// N5
let number = {
    a: 15,
    b: 7,
    c: 85,
    d: 25,
    e: 44,
}
for (let i=0; i < 70;) {
    number = number + i;
}
console.log(number);



// N6

const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        console.log("Sunday");
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
};
    





