// Error
/**
 * semua error di Javascript selalu berujung di class Error
 * artinya class Error adalah superclass untuk semua jenis error di Javascript
 * contoh class error: SyntaxError, TypeError, EvalError dan lain-lain
 */

/**
 * Throw Error
 * saat kita membuat instance object dari class Error, tidak lantas otomatis terjadi error
 * kita perlu memberitahu program kita, bahwa kita akan mentrigger sebuah error terjadi, atau istilahnya adalah melempar error (throw error)
 * untuk melempar error, kita bisa gunakan kata kunci throw, diikuti dengan instance object error nya
 * jika terjadi error, maka otomatis kode program kita akan terhenti, dan kita bisa melihat detail errornya di console di aplikasi browser kita
 */
class MathUtil {
  static sum(...numbers) {
    // cek jika tidak ada panjang karakternya, maka kita lempar throw error
    if (numbers.length === 0) {
      // ini akan lempar ke constructor class Error
      throw new Error("Total parameter harus lebih dari 0");
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const sum = MathUtil.sum(1, 1, 1, 1, 1);
const sum1 = MathUtil.sum(); // akan error
console.info(sum);
console.info(sum1);
