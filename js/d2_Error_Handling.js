// Error Handling atau Penanganan Error

/**
 * saat terjadi error, kadang kita tidak ingin program kita berhenti langsung keluar gitu
 * kita bisa menerapkan try catch statement untuk menangkap error
 * pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
 * jika tidak terjadi error, block catch tidak akan dieksekusi
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
}

// kode program selanjutnya tidak akan berhenti
console.info("Kode Program Tidak Akan Terhenti");
