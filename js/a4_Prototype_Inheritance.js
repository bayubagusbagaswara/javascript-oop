// Prototype Inheritance
/**
 * Prototype selalu memiliki parent, artinya dia adalah turunan
 * parent tertinggi adalah Object.prototype
 * Bagaimana melakukan inheritance ke Prototype lain?
 * sebenarnya tidak direkomendasikan praktek OOP menggunakan prototype
 */

/**
 * Kasus :
 * misal ingin Manager adalah turunan dari Employee
 */

function Employee(name) {
  this.name = name;
}
function Manager(name) {
  this.name = name;
}

/**
 * Berikut contoh yang salah
 * seolah-olah Manager itu ditimpa oleh Employee, akhirnya prototype Employee yang digunakan
 */
// Manager.prototype = Employee.prototype;

/**
 * Berikut cara yang benar nya
 * Manager dibuat dari Object, dimana objectnya berasal dari Employee.prototype
 * yang benar menggunakan Object.create
 */
Manager.prototype = Object.create(Employee.prototype);

/**
 * Menambahkan method sayHello ke Manager.prototype
 */
Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};

/**
 * Menambahkan method sayHello ke Employee.prototype
 */
Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Employee ${this.name}`);
};

/**
 * Membuat instance object Employee
 * dan gunakan method sayHello
 */
const employee = new Employee("Budi");
employee.sayHello("Joko");

/**
 * Membuat instance object Manager
 * dan gunakan method sayHello
 */
const manager = new Manager("Aan");
manager.sayHello("Joko");

console.info(employee);
console.info(manager);
