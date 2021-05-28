// Static Method
/**
 * static juga bisa digunakan di method
 * jika kita tambahkan di method, artinya method tersebut jadi milik class nya, bukan prototype
 * dan untuk mengakses method tersebut, kita juga bisa lakukan seperti mengakses static class field
 */

class MathUtil {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

// mengakses static method
const sum = MathUtil.sum(1, 1, 1, 1, 1);
console.info(sum);
