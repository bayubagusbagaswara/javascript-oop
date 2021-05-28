// Class Field
/**
 * bisa mengubah nilai field nya dari constructor
 */

class Customer {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// instance object sekaligus set firstName dan lastName
const bayu = new Customer("Bayu", "Bagaswara");
console.info(bayu);
