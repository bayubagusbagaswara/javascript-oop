// Super Constructor
/**
 * Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke object ini
 * jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci super di dalam constructor
 * super digunakan untuk memanggil constructor super class
 * jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor
 */

class Employee {
  // buat constructor
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.info(`Hi ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  // jika di Manager tidak punya constructor, maka secara otomatis dia akan menggunakan constructor milik Parent nya yakni Employee

  sayHello(name) {
    console.info(`Hi ${name}, my name is manager ${this.name}`);
  }
}

const bayu = new Employee("Bayu");
bayu.sayHello("Aan");

// Manager otomatis punya constructor dari Employee
// jadi bisa memasukkan parameter saat instance object
const bagus = new Manager("Bagus");
bagus.sayHello("Aan");

console.info(bayu);
console.info(bagus);
