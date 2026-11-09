use("praktikum_mongodb");

// Bersihkan collection
// db.insert_demo.deleteMany({});

// Insert banyak dokumen
db.insert_demo.insertMany([
  {
    nim: "IF26003",
    nama: "Andi Saputra",
    prodi: "Informatika",
    ipk: 3.45
  },
  {
    nim: "IF26004",
    nama: "Siti Amelia",
    prodi: "Sistem Informasi",
    ipk: 3.90
  },
  {
    nim: "IF26005",
    nama: "Dika Pratama",
    prodi: "Informatika",
    ipk: 3.20
  },
  {
    nim: "IF26006",
    nama: "Nadia Putri",
    prodi: "Teknik Elektro",
    ipk: 3.75
  }
]);

// Menghitung jumlah dokumen
db.insert_demo.countDocuments({});

// Menampilkan seluruh dokumen
db.insert_demo.find();
