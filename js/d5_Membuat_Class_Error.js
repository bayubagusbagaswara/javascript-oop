// Membuat Class Error Manual
/**
 * walaupun javascript sudah memiliki standard class error
 * namun, alangkah baiknya, kita membedakan tiap jenis error
 * untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error
 * dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error
 */

// harus wajib extends ke Class Error
class ValidationError extends Error {
  // dan bikin constructor, tambah parameter juga
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

// Cara menggunakan ValidationError
class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      // kita bikin error nya dari Class ValidationError
      // bisa menambahkan informasi siapa yang error
      throw new ValidationError(
        "Total parameter harus lebih dari 0",
        "numbers"
      );
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.info(MathUtil.sum());
  console.info("Kode Block Try Akan Berhenti");
} catch (error) {
  // bisa mengecek jenis errornya apa
  if (error instanceof ValidationError) {
    console.info(
      `Terjadi error di field ${error.field} dengan error : ${error.message}`
    );
  } else {
    console.info(`Terjadi error : ${error.message}`);
  }
}

console.info("Kode Program Tidak Akan Terhenti");
