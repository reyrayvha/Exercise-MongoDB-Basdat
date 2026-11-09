use("praktikum_mongodb");

// Bersihkan collection percobaan
db.dosen_model_demo.deleteMany({});
db.mata_kuliah_model_demo.deleteMany({});

// Collection dosen
db.dosen_model_demo.insertMany([
  {
    _id: "D001",
    nama: "Wildan Budiawan",
    bidang: "Basis Data"
  },
  {
    _id: "D002",
    nama: "Budi Santoso",
    bidang: "Pemrograman"
  }
]);

// Collection mata kuliah
db.mata_kuliah_model_demo.insertMany([
  {
    _id: "MK001",
    nama: "Manajemen Basis Data",
    dosenId: "D001"
  },
  {
    _id: "MK002",
    nama: "Pemrograman Web",
    dosenId: "D002"
  }
]);

// Melihat data dosen
db.dosen_model_demo.find();

// Melihat data mata kuliah
db.mata_kuliah_model_demo.find();