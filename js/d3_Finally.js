// Kata Kunci Finally
/**
 * kadang kita ingin melakukan sesuatu entah itu terjadi error ataupun tidak
 * dalam try catch, kita bisa menambahkan block finally
 * block finally ini akan selalu dieksekusi setelah try catch selesai, entah terjadi error atau tidak, block finally akan selalu dieksekusi
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

// error handling try catch
try {
  console.info(MathUtil.sum());
  console.info("Kode Block Try Akan Berhenti");
} catch (error) {
  console.error(`Terjadi error : ${error.message}`);
} finally {
  // finally akan selalu dieksekusi, error ataupun tidak akan tetap dieksekusi
  console.info("Kode program selesai");
}

// kode program selanjutnya tidak akan berhenti
console.info("Kode Program Tidak Akan Terhenti");
