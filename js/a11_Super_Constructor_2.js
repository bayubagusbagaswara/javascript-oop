// Super Constructor
/**
 * Bagaimana jika kita ingin membuat constructor juga di Child clas nya?
 * Bisa tapi di Child class harus wajib memanggil constructor milik Parentnya
 * artinya jika tidak memanggilnya maka akan terjadi error
 * bisa manggil super hanya di dalam constructor, tidak bisa di method lain diluar constructor
 */

class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.info(`Hi ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  // constructor child class
  constructor(firstName, lastName) {
    // super akan memanggil constructor milik Employee dan harus dipanggil didalam constructor
    super(firstName);
    this.lastName = lastName;
  }
  sayHello(name) {
    console.info(`Hi ${name}, my name is manager ${this.name}`);
  }
}

const bayu = new Employee("Bayu");
bayu.sayHello("Aan");

const bagus = new Manager("Bagus", "Bagaswara");
bagus.sayHello("Aan");

console.info(bayu);
console.info(bagus);
