const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log("Clue found: ", clue1);
console.log("Clue found: ", clue2);
//a simple print statement

const suspectName = "Devashish";
const suspectAge = 22;
console.log("Suspect: ", suspectName, "| Age: ", suspectAge);

console.warn("Warning: Fingerprint evidence detected");
console.error("Warning: Fingerprint evidence detected");

const evidenceLog = [
  { id: 1, item: "Muddy footprint", location: "Window sill" },
  { id: 2, item: "Broken glass", location: "Living room" },
  { id: 3, item: "Red fiber strand", location: "Door Handle" },
];
// an array of objects
// whenever we have array of objects, what we can do is:
console.table(evidenceLog);
console.group("Group starts");
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.log("My log 4");
console.groupEnd();

console.time("dna loop");

let dnaMatches = 0;
for (let i = 0; i < 1_000_000; i++) {
  dnaMatches++;
}
console.timeEnd("dna loop"); // the label should be same

console.log("Chaicode");
console.log("Chaicode");
console.log("Chaicode");
console.log("Chaicode");

console.count("Chaicode");
