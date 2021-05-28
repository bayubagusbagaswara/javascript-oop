// Method di Class
/**
 * khusus untuk Method sebaiknya kita menambahkan ke prototype, bukan ke instance object
 * jadi tidak dibikin didalam constructor function/class nya
 */

// Contoh membuat method yang tidak direkomendasikan
/* class Person {
  constructor(name) {
    this.name = name;
    // buat method didalam constructor
    this.sayHello = function (name) {
      console.info(`Hello ${name}, my name is ${this.name}`);
    };
  }
}
*/

// Contoh membuat method yang direkomendasikan, karena methodnya akan secara otomatis menempel ke prototype bukan di instance object nya

class Person {
  constructor(name) {
    this.name = name;
  }
  // buat method nya, bisa ditambah parameter
  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}

const bayu = new Person("Bayu");
console.info(bayu);
bayu.sayHello("Aan"); // bisa gunakan method dari prototype nya

const bagus = new Person("Bagus");
console.info(bagus);
bagus.sayHello("Aan");
