// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                               function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "lovely",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: function(){console.log("I am eating your food ")},
}

const person2 = {
    firstName: "fitsum",
    lastName: "helina",
    age: 20,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm fitsum..."),
    eat: () => console.log("I am eating roast beef, chicken, and pizza"),
}

console.log(person1.firstName);
console.log(person2.firstName);

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

const animal =(name)=>{console.log(name)}
animal("cat")