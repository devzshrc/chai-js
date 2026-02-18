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
console.log(
  "Rune: ",
  uniqueRuneId.toString(),
  "\ typeof: ",
  typeof uniqueRuneId,
);
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
console.log(typeof function () {});

let originalHP = 100;
let cloneHP = originalHP;

cloneHP = 80;
console.log("Original HP: ", originalHP);
console.log("Clone HP: ", cloneHP);

const originalSword = {
  name: "Flame Sword",
  damage: 75,
  typeofW: "Fire",
};
// whenever we try to copy objects like this - it sends the reference

const cloneSword = originalSword;

cloneSword.damage = 100;

// how to copy
// we will never copy objects directly like this: const cloneSword = originalSword;

const armorOriginal = {
  name: "Iron PLate",
  defence: 80,
  buff: {
    fire: 10,
  },
};
// how to copy this
const armorCopy = { ...armorOriginal }; //spread operator - spreads all of the properties and combines them
armorCopy.buff.fire = 90;
// for nested objects - structuredClone() - recent addition to JS
const potionOriginal = { name: "Health", effects: { heal: 40, mana: 30 } };
const potionCopy = structuredClone(potionOriginal);
