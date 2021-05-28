// Class Inheritance

/**
 * Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
 * Class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class
 */

// Contoh class Parent
class Employee {
  sayHello(name) {
    console.info(`Hi ${name}, my name is employee ${this.name}`);
  }
}

// Contoh class Child nya
// yang inheritance terhadap Employee
class Manager extends Employee {
  // misal Manager tidak punya sayHello
  //   sayHello(name) {
  //     console.info(`Hi ${name}, my name is manager ${this.name}`);
  //   }
}

// instance object
const bayu = new Employee();
bayu.name = "Bayu";
bayu.alamat = "Kediri"; // isi properti dari luar class
bayu.sayHello("Aan");

const bagus = new Manager();
bagus.name = "Bagus";
bagus.sayHello("Aan"); // dia akan cek dulu ke Manager method sayHello, jika tidak ada maka cek keatasnya yakni Employee sebagai Parentnya

console.info(bayu);
console.info(bagus);
