use("praktikum_mongodb");

// Membersihkan collection
db.insert_demo.deleteMany({});

// Insert dengan ObjectId manual
db.insert_demo.insertOne({
  _id: new ObjectId(),
  nim: "IF26002",
  nama: "Rizky Maulana",
  prodi: "Informatika",
  umur: 21,
  ipk: 3.80
});

// Verifikasi
db.insert_demo.findOne();