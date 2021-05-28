// Super Constructor
/**
 * Bagaimana jika di class Parent nya tidak ada constructor?
 * maka di class Childnya tetap wajib memanggil constructor di parentnya
 * karena jika tidak dipanggil maka akan menyebabkan error
 * jadi hanya menulis super()
 */

class Employee {
  sayHello(name) {
    console.info(`Hi ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    // tetap wajib memanggil constructor, tapi hanya data kosong
    super();
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
