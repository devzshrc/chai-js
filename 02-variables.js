var shipName = "The Amber";
console.log("Shipname: ", shipName);

let crewCount = 12;
console.log("Crew count: ", crewCount);
crewCount = 14;

const captainName = "Jack Sparrow";
console.log("Captain Name: ", captainName);
// captainName = "Devashish"; // can't be changed/updated, declared with const

//scope of const : block level : it's not reassignable

if (true) {
  var leakyTreasure = "Gold coins";
}

// console.log(leakyTreasure);
// leakyTreasure shouldn't be accessible here
// this is the problem with var: that is isn't block scoped
// another example

for (var i = 0; i < 10; i++) {
  //
}
// with var, i is accessible outside the scope also
// too many conflicts may error
for (let i = 0; i < 10; i++) {
  //
}
console.log(leakyTreasure);

// naming conventions....no strict rules...just some standard practices
let shipSpeed = 22;
let _privatelog = "secret";
// let _ = a; // not to be used that much in future
let MONGODB_URI = "url"; //env variables
let $name = "hitesh";

//when these cathes you off-guard
const treasureChest = {
  gold: 100,
  rubies: 40,
  maps: 2,
};
// the place that we have taken in memory
// we make that thing as constant
// this doesn't mean that we have made the inside properties
// as constant too....
// mutating the content is allowed

treasureChest.gold = 150; //allowed : property change
//complete re-refrencing is not allowed
// treasureChest = { gold: 50 }; // not allowed:  content manipulation: complete reference change

const crewRoster = ["alok", "abhinav", "tanishq"];
crewRoster.push("vraj");
crewRoster[0] = "devashish";

//what isnt allowed
// crewRoster = ["someone"];
