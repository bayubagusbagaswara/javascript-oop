// Operator instanceof di Class Inheritance
/**
 * Operator instanceof mendukung class inheritance, artinya instanceof juga bisa digunakan untuk mengecek, apakah sebuah object adalah instance dari class tertentu, atau turunan dari class tertentu
 * jadi bisa mengecek class Parent nya
 */

// misal kita punya 2 class

class Employee {}
class Manager extends Employee {}

// instance object
const bayu = new Employee();
const bagus = new Manager();

// cek instance of
// apakah bayu adalah object hasil instance dari Employee
console.info(bayu instanceof Employee); // true
console.info(bayu instanceof Manager); // false

// true karena Manager adalah turunan dari Employee
console.info(bagus instanceof Employee); // true
console.info(bagus instanceof Manager); // true
