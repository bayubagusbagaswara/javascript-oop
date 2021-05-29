// Iterable dan Iterator
/**
 * salah satu fitur terbaru di ES6 adalah iterable
 * Iterable adalah spesial object yang memiliki standardisasi
 * dengan mengikuti standardisasi Iterable, secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan menggunakan perulangan for...of
 * contoh yang sudah mengikuti standardisai Iterable adalah String, Array, Object, dan lain-lain
 */

/**
 * Cara Kerja Iterable dan Iterator
 * jika kita mengikuti kontrak iterable, maka object yang kita buat akan bisa dilakukan iterasi menggunakan for..of
 * setiap kita melakukan perulangan, object Iterator akan dibuat
 * hal ini menjadi aman jika kita melakukan iterasi berulang-ulang, karena Iterator baru akan dibuat terus menerus
 */

// Membuat Counter Iterator Result
class CounterIteratorResult {
  constructor(value, done) {
    this.done = done;
    this.value = value;
  }
}

// Membuat Counter Iterator
class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        // true agar berhenti perulangannya, karena nilai counter sudah maksimal
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      // value nya akan ditambah terus sampai valuenya melewati maksimal
      this.value++;
    }
  }
}

// Membuat Counter Iterable
class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

// Cara menggunakan counter iterable
// cukup menggunakan perulangan for..of
const counter = new Counter(1, 10);
for (const element of counter) {
  console.info(element);
}
