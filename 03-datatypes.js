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
