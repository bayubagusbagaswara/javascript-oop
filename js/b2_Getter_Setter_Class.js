// Getter dan Setter di Class
/**
 * perlu diingat, getter dan setter ini akan berada di prototype, bukan di instance object
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter
  set fullName(value) {
    const result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

// instance object
const bayu = new Person("Bayu", "Bagaswara");
console.info(bayu);

// panggil getter
console.info(bayu.fullName);

// setter
bayu.fullname = "Aan Putra";
console.info(bayu);
