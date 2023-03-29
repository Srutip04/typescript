const person = {
  name: "shruti",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

person.role.push('admin');
// person.role[1] = 10;

let favAct: string[];
favAct = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
