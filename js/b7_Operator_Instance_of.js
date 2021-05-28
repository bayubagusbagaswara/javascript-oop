// Operator instanceof
/**
 * kadang kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
 * kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah "object"
 * operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan
 */

// misal kita punya 2 class

class Employee {}
class Manager {}

// instance object
const bayu = new Employee();
const bagus = new Manager();

// cek instance of
// apakah bayu adalah object hasil instance dari Employee
console.info(bayu instanceof Employee); // true
console.info(bayu instanceof Manager); // false
console.info(bagus instanceof Employee); // false
console.info(bagus instanceof Manager); // true
