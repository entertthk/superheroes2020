let superheroes = require("superheroes");

console.log(superheroes.all); //omadus

let newheroes = require("superheroes");
console.log(newheroes.random()); // funktsioon

superheroes.all.forEach(hero => {
    console.log(hero);
});
