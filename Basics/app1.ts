// const person = {
//   name: "shruti",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUHTOR = 2;

enum Role { ADMIN=4, READ_ONLY, AUHTOR };

const person = {
  name: "shruti",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

let favAct: string[];
favAct = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role == Role.AUHTOR) {
    console.log('isauth'); 
}
