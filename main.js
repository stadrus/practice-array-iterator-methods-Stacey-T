let cities = ["kansas City", "Huston", "Dallas", "Chicago", "Phoenix"];

cities.forEach(cities => {
console.log(cities.toUpperCase())
});

let numbers = [1,2,3,4,5];
let squared = numbers.map(numbers => numbers*numbers);
console.log(`Numbers squared: ${squared}`);

let scores = [85,42,90,75,30,100]
let highScores = scores.filter(scores => scores >= 80);
console.log(`High scores: ${highScores}`);

let favoriteFoods = ["Nachos", "Salmon", "Tacos", "Soup", "Burgers"];
let fiveLetterFood= favoriteFoods.find(favoriteFoods => favoriteFoods.length >= 4);
console.log(`My Favorite food: ${fiveLetterFood}`);
let nachosIndex = favoriteFoods.findIndex(favoriteFoods=>favoriteFoods<"nachos");
console.log(`Index of naschos: ${nachosIndex}`);