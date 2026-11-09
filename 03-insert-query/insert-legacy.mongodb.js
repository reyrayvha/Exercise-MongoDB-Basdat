use("praktikum_mongodb");

// Membersihkan collection
db.insert_legacy_demo.deleteMany({});

// Insert satu dokumen
db.insert_legacy_demo.insert({
  _id: 1,
  nama: "Mahasiswa A",
  prodi: "Informatika"
});

// Insert beberapa dokumen sekaligus
db.insert_legacy_demo.insert([
  {
    _id: 2,
    nama: "Mahasiswa B",
    prodi: "Informatika"
  },
  {
    _id: 3,
    nama: "Mahasiswa C",
    prodi: "Sistem Informasi"
  }
]);

// Verifikasi
db.insert_legacy_demo.find();

// Menghitung data
db.insert_legacy_demo.countDocuments({});