// Class Field
/**
 * pada versi lama, menambahkan field (property yang berisi value), kita biasanya tambahkan di constructor
 * proposal masih pengajuan public class field ditempatkan diluar constructor, selevel dengan penempatan method
 */

// Public Class Field
/**
 * dalam proposal pengajuan tersebut, akan mendukug access modifier public dan private
 * Public artinya bisa diakses dari luar class, dan private hanya bisa diakses dari dalam class saja
 * untuk membuat public class field, kita bisa langsung buat nama field dengan value nya, selevel dengan method
 * jika tidak memasukkan value ke dalam field tersebut, artinya field tersebut memiliki value undefined
 */

// Cara pembuatan Public Class Field
// membuat field tidak perlu didalam constructor
// field ini nempelnya di instance object nya, bukan di prototype

class Customer {
  // firstName dan lastName nilainya undefined
  firstName;
  lastName;
  // balance nilainya adalah 0
  balance = 0;
}

const bayu = new Customer();
console.info(bayu);
