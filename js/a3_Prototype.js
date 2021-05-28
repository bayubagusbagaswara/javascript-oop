// Prototype
// prototype sebenarnya adalah copyan dari class function constructor yang kita buat
// secara default javascript akan otomatis membuat prototype nya
// misal kita membuat constructor function Person, maka secara otomatis akan dibuatkan juga prototype Person.prototype
// Jadi, setiap kita instance object dari Person, maka dia juga turunan dari Person.prototype
// untuk mengakses method atau properties di prototype bisa menggunakan __proto__

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

/**
 * Menambah property ke prototype
 * secara otomatis, semua object instance yang turunan dari prototype Person akan memiliki property yang ada di dalam prototype Person
 * tapi method ini tidak nambah ke instance objectnya, tapi nambahnya ke prototype
 */

// artinya kita menambahkan method sayBye ke Person.prototype, bukan ke constructor function Person
// sehingga bisa digunakan oleh object Person
Person.prototype.sayBye = function () {
  console.info("Good Bye");
};

// membuat dan menambah method run ke Person.prototype
Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

/**
 * sebenarnya method sayBye dan method run, itu tidak bisa diakses langsung oleh instance object dari class Person kita,
 * karena kedua method tersebut disimpan didalam prototype
 * terus bagaimana cara mengakses kedua method tersebut?
 * Prototype sendiri mengadopsi Inheritance
 * Dimana cara kerja dari inheritance prototype sebagai berikut:
 * Pertama dia akan mengecek dulu properti atau method didalam Object instance yang kita buat
 * Kedua jika tidak ada method atau properti didalam instance object tersebut, maka dia akan mengecek ke atasnya lagi yakni class Person.prototype
 * Ketiga, jika masih tidak ada maka akan cek terus ke class atasnya lagi
 * Paling akhir adalah dia akan cek di prototype paling luar yakni Object.prototype, sampai ketemu method atau properti yang dicari
 */

// membuat instance object dari Person
const person1 = new Person("Bayu", "Bagaswara");
// coba pake method sayBye di object intance nya
// yang dipake adalah sayBye milik object person1, dan tidak menggunakan method sayBye di prototype
// karena sistemnya adalah mencari data yang paling awal ditemukan
person1.sayBye = function () {
  console.info("Sampai Jumpa");
};
const person2 = new Person("Aan", "Putra");

console.info(person1);
console.info(person2);

// instance object kita bisa menggunakan method di prototype
person1.sayBye(); // Sampai Jumpa
person1.run(); // Bayu is running
person2.sayBye(); // Good Bye
person2.run(); // Aan ir running
