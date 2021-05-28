/**
 * Class
 * dengan keyword class maka tidak perlu lagi menggunakan constructor function untuk membuat sebuah class instance object
 * ini adalah cara Javascript versi modern
 */

class Person {}

// membuat object dari class
const bayu = new Person();
console.info(bayu);
// bayu adalah sebuah object, dan memiliki prototype
// dan bisa mengakses method di Person.prototype

// membuat method di prototype melalui Class
Person.prototype.sayHello = function () {};

// Sebenarnya konsep di belakang oop javascript adalah tetap mengadopsi Prototype
