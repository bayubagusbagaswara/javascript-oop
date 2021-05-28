// Private Class Field
/**
 * secara default field itu bisa diakses darimanapun alias bersifat Public
 * jika ingin membuat filed bersifat private (hanya bisa diakses di dalam class), kita bisa menggunakan tanda # sebelum nama fieldnya
 * ini dinamakan private class field, dan hanya bisa diakses dari dalam class saja
 */

class Counter {
  // field private, hanya bisa diakses dari dalam class Counter
  #counter = 0;

  increment() {
    this.#counter++;
  }
  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

// instance object
const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// untuk akses nilai counter yang bersifat private
console.info(counter.get()); // hasilnya 5
console.info(counter);
