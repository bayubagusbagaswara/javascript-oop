// Constructor Inheritance
// dalam constructor function kita juga bisa melakukan inheritance terhadap constructor function yang lain

// buat constructor function Employee
function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hi ${name}, my name is ${this.firstName}`);
  };
}

// buat constructor function Manager
function Manager(firstName, lastName) {
  /**
   * parameter firstNama milik function parameter Employee
   * untuk menggunakan Employee di contructor funciton Manager adalah dengan cara memanggilnya menggunakan call()
   * sehingga instance object dari Manager bisa menggunakan constructor function Employee
   * panggil Employee menggunakan call() sekaligus kirim parameter firstName
   */
  Employee.call(this, firstName);
  this.lastName = lastName;
}

// buat instance object dari Manager
const bayu = new Manager("Bayu", "Bagaswara");

console.info(bayu);
