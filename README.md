- A JS engine is required to execute any kind of JS code

---

## 1. Variable Declarations

```js
const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";
```

- `const` → block-scoped constant
- Stores string values
- Cannot be reassigned

---

## 2. Basic Logging

```js
console.log("Clue found: ", clue1);
```

- `console.log()` → standard output
- Used for general debugging / printing

---

## 3. Multiple Values in Log

```js
console.log("Suspect: ", suspectName, "| Age: ", suspectAge);
```

- Can print multiple arguments
- Automatically spaced
- Works with strings, numbers, variables

---

## 4. Warning & Error Logs

```js
console.warn("Warning...");
console.error("Warning...");
```

- `console.warn()` → warning message (yellow in most consoles)
- `console.error()` → error message (red in most consoles)
- Used for debugging severity levels

---

## 5. Array of Objects

```js
const evidenceLog = [{ id: 1, item: "...", location: "..." }];
```

- Array → ordered collection
- Object → key-value pairs
- Array of objects → structured data records

---

## 6. Console Table

```js
console.table(evidenceLog);
```

- Displays array of objects in tabular format
- Best for structured datasets

---

## 7. Console Grouping

```js
console.group("Group starts");
console.groupEnd();
```

- Groups logs visually
- Improves readability in complex debugging

---

## 8. Performance Timing

```js
console.time("dna loop");
console.timeEnd("dna loop");
```

- Measures execution time
- Label must match exactly
- Used for performance analysis

---

## 9. Loop Example

```js
for (let i = 0; i < 1_000_000; i++) {
  dnaMatches++;
}
```

- Standard `for` loop
- `1_000_000` → numeric separator for readability
- Used for iteration

---

## 10. Console Count

```js
console.count("Chaicode");
```

- Counts how many times label appears
- Useful for tracking repeated executions

---

## Core Idea

All examples demonstrate **console methods for debugging and output visualization**.
They do not affect program logic — only developer-side output.

---

## 1. `var`

```js
var shipName = "The Amber";
```

- Function-scoped (not block-scoped)
- Can be reassigned
- Can be redeclared
- Causes scope leaks

### Scope Problem

```js
if (true) {
  var leakyTreasure = "Gold coins";
}
```

- Accessible outside block
- Not block-scoped
- Leads to unintended global exposure

Loop example:

```js
for (var i = 0; i < 10; i++) {}
```

- `i` accessible outside loop
- High chance of naming conflicts

---

## 2. `let`

```js
let crewCount = 12;
crewCount = 14;
```

- Block-scoped
- Can be reassigned
- Cannot be redeclared in same scope

Loop example:

```js
for (let i = 0; i < 10; i++) {}
```

- `i` exists only inside loop
- Prevents leakage

---

## 3. `const`

```js
const captainName = "Jack Sparrow";
```

- Block-scoped
- Cannot be reassigned
- Must be initialized at declaration

---

## 4. `const` with Objects

```js
const treasureChest = { gold: 100 };
```

- Reference is constant
- Internal properties are mutable

Allowed:

```js
treasureChest.gold = 150;
```

Not allowed:

```js
treasureChest = { gold: 50 };
```

Concept:

- Memory reference is fixed
- Object content can change

---

## 5. `const` with Arrays

```js
const crewRoster = ["alok"];
```

Allowed:

```js
crewRoster.push("vraj");
crewRoster[0] = "devashish";
```

Not allowed:

```js
crewRoster = ["someone"];
```

Same rule:

- Reference constant
- Elements mutable

---

## 6. Naming Conventions

Examples:

```js
let shipSpeed = 22; // camelCase (standard)
let _privateLog = "secret"; // underscore (internal use)
let MONGODB_URI = "url"; // UPPERCASE (env/config)
let $name = "hitesh"; // allowed but uncommon
```

Rules:

- No strict enforcement
- Follow readability conventions
- Avoid confusing or meaningless names

---

## Core Comparison

| Keyword | Scope    | Reassign | Redeclare |
| ------- | -------- | -------- | --------- |
| var     | Function | Yes      | Yes       |
| let     | Block    | Yes      | No        |
| const   | Block    | No       | No        |

---

## Practical Rule

- Avoid `var`
- Use `let` for changeable values
- Use `const` by default
- Remember: `const` ≠ immutable object
- It protects reference, not internal data

Everything here is about **scope control, memory reference behavior, and preventing bugs**.

---

# JavaScript Data Types – Structured Notes

## 1. Two Main Categories

JavaScript data types are divided into:

1. **Primitive Types**
2. **Non-Primitive Types (Objects)**

---

# 2. Primitive Types

Primitives are:

- Immutable (cannot be changed)
- Stored directly in memory
- Copied by value

There are **7 primitive types**.

---

## 2.1 String

Represents text.

```js
const weaponName = "Flame Sword";
typeof weaponName; // "string"
```

---

## 2.2 Number

Represents both integers and floating-point numbers.

```js
const attackPower = 75;
const attackUpgrade = 1.5;

typeof attackPower; // "number"
typeof attackUpgrade; // "number"
```

JavaScript does NOT have separate int and float types.

---

## 2.3 BigInt

Used for very large integers beyond `Number.MAX_SAFE_INTEGER`.

```js
const bigValue = 75n;
typeof bigValue; // "bigint"
```

Use when precision for large integers is required.

---

## 2.4 Boolean

Represents true or false.

```js
const isLoggedIn = true;
typeof isLoggedIn; // "boolean"
```

---

## 2.5 Undefined

Declared but not assigned.

```js
let bonusEffect;
typeof bonusEffect; // "undefined"
```

---

## 2.6 Null

Represents intentional absence of value.

```js
let curseStatus = null;
typeof curseStatus; // "object"
```

Important:
`typeof null === "object"` is a legacy JavaScript bug.
Null is a primitive, even though typeof says "object".

Use `null` when a value is intentionally empty.
Do NOT confuse it with `0` — zero is a valid number.

---

## 2.7 Symbol

Used to create unique identifiers.

```js
const uniqueRuneId = Symbol("rune_of_fire");
typeof uniqueRuneId; // "symbol"
```

Often converted using `.toString()` when logging.

---

# 3. Primitive Copy Behavior (Copy by Value)

When primitives are assigned, their value is copied.

```js
let originalHP = 100;
let cloneHP = originalHP;

cloneHP = 80;
```

Result:

- `originalHP` → 100
- `cloneHP` → 80

Changing one does NOT affect the other.

---

# 4. Non-Primitive Types (Objects)

All non-primitive types are objects.

Examples:

- Object literals
- Arrays
- Functions

Objects are:

- Mutable
- Stored in heap memory
- Copied by reference

---

## 4.1 Object Literal

```js
const heroStats = {
  name: "Deepak",
  level: 42,
};

typeof heroStats; // "object"
```

---

## 4.2 Array

```js
const inventory = ["Flame Sword", "Potion"];
typeof inventory; // "object"
```

Important:
Use `Array.isArray()` to check arrays.

```js
Array.isArray(inventory); // true
```

---

## 4.3 Function

```js
function castSpell() {
  return "Fireball";
}

typeof castSpell; // "function"
```

Even though typeof says "function", internally functions are objects.

---

# 5. Object Copy Behavior (Copy by Reference)

When assigning an object, the reference (memory address) is copied — NOT the actual object.

```js
const originalSword = {
  name: "Flame Sword",
  damage: 75,
};

const cloneSword = originalSword;

cloneSword.damage = 100;
```

Now both objects show `damage = 100`.

Reason:
Both variables point to the same memory location.

---

# 6. Shallow Copy

Creates a new object but only copies top-level properties.

Example using spread operator:

```js
const armorOriginal = {
  name: "Iron Plate",
  defence: 80,
  buff: { fire: 10 },
};

const armorCopy = { ...armorOriginal };
```

Problem:
Nested objects are still shared.

```js
armorCopy.buff.fire = 90;
```

This also changes `armorOriginal.buff.fire`.

---

# 7. Deep Copy

Creates a completely independent copy, including nested objects.

Use:

```js
const potionOriginal = {
  name: "Health",
  effects: { heal: 40, mana: 30 },
};

const potionCopy = structuredClone(potionOriginal);
```

Now modifying nested properties does NOT affect the original.

---

# 8. typeof Results Summary

```js
typeof "text"; // "string"
typeof 42; // "number"
typeof 42n; // "bigint"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (bug)
typeof Symbol(); // "symbol"
typeof {}; // "object"
typeof []; // "object"
typeof function () {}; // "function"
```

---

# Core Mental Model

Primitives → copied by value
Objects → copied by reference

If changing one variable affects another → it was a reference copy.
If it doesn’t → it was a value copy.

Most JavaScript bugs around state, React, APIs, and async code come from misunderstanding this boundary.
