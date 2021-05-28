// Private Method
/**
 * proposal EcmaScript juga terdapat tambahan fitur private method
 * jadi access modifier bisa juga digunakan di method
 * caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private
 */

class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }
  // tidak bisa diakses dari luar class
  #sayWithoutName() {
    console.info("Hello");
  }
  #sayWithName(name) {
    console.info(`Hello ${name}`);
  }
}

const bayu = new Person();
bayu.say("Aan");
