// constant
const N = 10;

// vars
let a = 2;
let b = 3;
a + b;
console.log(a + b);

// arrs
let persons = [
  'Маша', 'Саша', 'Паша', 'Катюша'
]

for (let i = 0; i < persons.length; i++) {

  console.log(persons[i]);
}

// ifs
if (a == b) {
  console.log("a == b");
} else if (a > b) {
  console.log("a > b");
} else if (a < b) {
  console.log("a < b");
} else {
  console.log("somthing else");
}

// for lop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// functions
function showElements(n) {
  for (let i = 0; i < N; i++) {
    console.log('a[' + i + '] = ' + i);
  }
}
showElements();

// classes
class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
  greet(){
    console.log('Hello! My name is ' + this.firstName);
  }
}

let art = new Person('Art');
art.greet();

// hashmaps
let xx = {
  a: 2,
  b: 3,
};
console.log(xx['a']);
console.log(xx.a);
