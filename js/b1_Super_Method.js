// Super Method

/**
 * super juga bisa digunakan untuk mengakses method di parent class
 * cara nya adalah super.namaFunction
 * sebenarnya super adalah reference ke parent prototype, mirip seperti __proto__
 */

// class Parent
class Shape {
  paint() {
    console.info("Paint Shape");
  }
}

// class Child
class Circle extends Shape {
  paint() {
    super.paint(); // memanggil paint() method parent class
    console.info("Paint Circle");
  }
}

// buat object
const circle = new Circle();
circle.paint();
// pertama yang dilakukan adalah ngecek method paint di Circle, kalau tidak ada maka akan lanjut ngecek ke class diatasnya yakni Shape
