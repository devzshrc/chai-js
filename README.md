- A JS engine is required to execute any kind of JS code
---

## 1. Variable Declarations

```js
const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";
```

* `const` → block-scoped constant
* Stores string values
* Cannot be reassigned

---

## 2. Basic Logging

```js
console.log("Clue found: ", clue1);
```

* `console.log()` → standard output
* Used for general debugging / printing

---

## 3. Multiple Values in Log

```js
console.log("Suspect: ", suspectName, "| Age: ", suspectAge);
```

* Can print multiple arguments
* Automatically spaced
* Works with strings, numbers, variables

---

## 4. Warning & Error Logs

```js
console.warn("Warning...");
console.error("Warning...");
```

* `console.warn()` → warning message (yellow in most consoles)
* `console.error()` → error message (red in most consoles)
* Used for debugging severity levels

---

## 5. Array of Objects

```js
const evidenceLog = [
  { id: 1, item: "...", location: "..." }
];
```

* Array → ordered collection
* Object → key-value pairs
* Array of objects → structured data records

---

## 6. Console Table

```js
console.table(evidenceLog);
```

* Displays array of objects in tabular format
* Best for structured datasets

---

## 7. Console Grouping

```js
console.group("Group starts");
console.groupEnd();
```

* Groups logs visually
* Improves readability in complex debugging

---

## 8. Performance Timing

```js
console.time("dna loop");
console.timeEnd("dna loop");
```

* Measures execution time
* Label must match exactly
* Used for performance analysis

---

## 9. Loop Example

```js
for (let i = 0; i < 1_000_000; i++) {
  dnaMatches++;
}
```

* Standard `for` loop
* `1_000_000` → numeric separator for readability
* Used for iteration

---

## 10. Console Count

```js
console.count("Chaicode");
```

* Counts how many times label appears
* Useful for tracking repeated executions

---

## Core Idea

All examples demonstrate **console methods for debugging and output visualization**.
They do not affect program logic — only developer-side output.

---

## 1. `var`

```js
var shipName = "The Amber";
```

* Function-scoped (not block-scoped)
* Can be reassigned
* Can be redeclared
* Causes scope leaks

### Scope Problem

```js
if (true) {
  var leakyTreasure = "Gold coins";
}
```

* Accessible outside block
* Not block-scoped
* Leads to unintended global exposure

Loop example:

```js
for (var i = 0; i < 10; i++) {}
```

* `i` accessible outside loop
* High chance of naming conflicts

---

## 2. `let`

```js
let crewCount = 12;
crewCount = 14;
```

* Block-scoped
* Can be reassigned
* Cannot be redeclared in same scope

Loop example:

```js
for (let i = 0; i < 10; i++) {}
```

* `i` exists only inside loop
* Prevents leakage

---

## 3. `const`

```js
const captainName = "Jack Sparrow";
```

* Block-scoped
* Cannot be reassigned
* Must be initialized at declaration

---

## 4. `const` with Objects

```js
const treasureChest = { gold: 100 };
```

* Reference is constant
* Internal properties are mutable

Allowed:

```js
treasureChest.gold = 150;
```

Not allowed:

```js
treasureChest = { gold: 50 };
```

Concept:

* Memory reference is fixed
* Object content can change

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

* Reference constant
* Elements mutable

---

## 6. Naming Conventions

Examples:

```js
let shipSpeed = 22;        // camelCase (standard)
let _privateLog = "secret"; // underscore (internal use)
let MONGODB_URI = "url";   // UPPERCASE (env/config)
let $name = "hitesh";      // allowed but uncommon
```

Rules:

* No strict enforcement
* Follow readability conventions
* Avoid confusing or meaningless names

---

## Core Comparison

| Keyword | Scope    | Reassign | Redeclare |
| ------- | -------- | -------- | --------- |
| var     | Function | Yes      | Yes       |
| let     | Block    | Yes      | No        |
| const   | Block    | No       | No        |

---

## Practical Rule

* Avoid `var`
* Use `let` for changeable values
* Use `const` by default
* Remember: `const` ≠ immutable object
* It protects reference, not internal data

Everything here is about **scope control, memory reference behavior, and preventing bugs**.
