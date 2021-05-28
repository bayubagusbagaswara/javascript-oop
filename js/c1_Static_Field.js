// Static Field

/**
 * static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasanya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object, dan method akan menjadi function di prototype
 * jika kita tambahkan static, maka hal itu tidak terjadi
 */

// Static Class Field
/**
 * jika kita tambahkan static dalam class field, secar aotomatis field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri (jadi nempel di class nya)
 * biasanya static digunakan jika kita ingin membuat utility field atau function
 * cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya
 * static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama
 */

class Configuration {
  static name = "Belajar Javascript Dasar";
  static version = 1.0;
  static author = "Bayu Bagaswara";
}

// instance object
const config = new Configuration();
console.info(config); // hasilnya field tidak masuk ke object config

// untuk mengakses field static maka harus panggil classnya dulu
// jadi untuk mengakses static tidak perlu buat object nya dulu
console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.author);
