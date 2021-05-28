// Constructor di Class
/**
 * di class bisa juga menambah constructor
 * dengan constructor juga kita bisa menambahkan parameter saat peratama kali membuat object nya
 */

class Person {
  // bikin constructor nya di dalam class
  // dan bisa menambahkan parameter
  constructor(name) {
    // kode apapun
    console.info(`Membuat Person ${name}`);
  }
}

// membuat instance object
// saat membuat object kita juga harus mengirimkan parameter, dimana parameter ini ditangkap oleh constructor di class Person
const bayu = new Person("Bayu");
console.info(bayu);
const bagus = new Person("Bagus");
console.info(bagus);
