use("praktikum_mongodb");

// Membersihkan collection percobaan
db.primary_key_demo.deleteMany({});

// Insert dokumen dengan _id sendiri
db.primary_key_demo.insertMany([
  {
    _id: "IF24001",
    nama: "Alya Putri",
    prodi: "Informatika"
  },
  {
    _id: "IF24002",
    nama: "Bima Pratama",
    prodi: "Informatika"
  }
]);

// Menampilkan hasil
db.primary_key_demo.find();