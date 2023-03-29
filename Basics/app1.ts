const person = {
  name: "shruti",
  age: 30,
  hobbies: ["sports", "cooking"],
};

let favAct: string[];
favAct = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
