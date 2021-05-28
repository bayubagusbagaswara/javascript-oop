// Property di Class

/**
 * di class juga bisa menambahkan property
 * menambahkan property di class bisa juga dilakukan di instance object nya
 */

// contoh langsung bikin property nya didalam class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const bayu = new Person("Bayu");
console.info(bayu);
// mengakses property name milik object bayu
console.info(bayu.name);
