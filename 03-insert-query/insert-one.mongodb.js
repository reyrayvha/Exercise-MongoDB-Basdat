use("praktikum_mongodb");

// Bersihkan data percobaan
db.insert_demo.deleteMany({});

// Insert satu dokumen tanpa _id
db.insert_demo.insertOne({
  nim: "IF26001",
  nama: "Fajar Ramadhan",
  prodi: "Informatika",
  umur: 20,
  ipk: 3.65
});

// Verifikasi hasil insert
db.insert_demo.findOne();