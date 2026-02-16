//primitives and non-primitives
const weaponName = "Flame Sword";
console.log("Weapon: ", weaponName, "| type: ", typeof weaponName);
const attackPower = 75; //number
// const attackPower = 75n; //bigint
const attackUpgrade = 1.5; //number

//75n -> whereever large precision is needed
//the story changes in big-numbers: bigInt

console.log(typeof attackPower);
console.log(typeof attackUpgrade);

const isLoggedIn = true;
let bonusEffect; //undefined

let curseStatus = null; // null : value intentionally absent
let weatherApiResponse = null; // null is better than 0, cuz 0 is a value
//null can be handled
console.log(weatherApiResponse);
//quirk: typeof null is null in JS - a bug due to backward compatibility

const uniqueRuneId = Symbol("rune_of_fire");
console.log("Rune: ", uniqueRuneId.toString(), "\ typeof: ", typeof uniqueRuneId);
//use .toString() when working with symbol as a precaution

//how many primitives?

//non-primitives - objects....
const heroStats = {
  name: "Deepak",
  level: 42,
  class: "Ranger",
};
console.log("Hero: ", heroStats, "| type: ", typeof heroStats);

const inventory = ["Flame sword", "Health potion", "Sheild"];
console.log("Inventory: ", inventory, "| type: ", typeof inventory);

function castSpell() {
  return "Fireball";
}
console.log("Spell Type: ", typeof castSpell);
// even though it says function type as function, but internally it is an object

console.log(typeof "chaicode");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});



