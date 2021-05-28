// Constructor Function
// adalah cara lama javascipt untuk membuat sebuah cetakan atau blue print
// constructor function digunakan untuk membuat sebuah object

// bisa menambahkan parameter ke Constructor Function
function Person(firstName, lastName) {
  // menulis property
  this.firstName = firstName;
  this.lastName = lastName;

  // menambah method atau membuat function
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

// Membuat Object perlu mengirimkan parameternya
const person1 = new Person("Bayu", "Bagaswara");
const person2 = new Person("Aan", "Putra");

// menggunakan method di Constructor Function melalui Object
person1.sayHello("Agung");
person2.sayHello("Alfan");

console.log(person1);
console.log(person2);
