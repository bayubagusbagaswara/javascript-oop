// Try Finally
/**
 * kata kunci finally juga bisa digunakan tanpa perlu menggunakan catch
 * biasanya ini digunakan dalam kasus tertentu
 */

class Counter {
  #counter = 0;

  next() {
    try {
      // mengembalikan nilai value saat ini
      // jadi akan menampilkan nilai counter saat ini, setiap next() dipanggil
      return this.#counter;
    } finally {
      // mengubah nilai value
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.info(counter.next()); // 0
console.info(counter.next()); // 1
console.info(counter.next()); // 2
console.info(counter.next()); // 3
console.info(counter.next()); // 4
