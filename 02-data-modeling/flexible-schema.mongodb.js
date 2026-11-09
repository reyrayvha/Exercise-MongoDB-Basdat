use("praktikum_mongodb");

// Bersihkan collection khusus percobaan
db.schema_flexible_demo.deleteMany({});

// Memasukkan dokumen dengan struktur berbeda
db.schema_flexible_demo.insertMany([
  {
    _id: 1,
    nama: "Alya Putri",
    prodi: "Informatika",
    ipk: 3.75
  },
  {
    _id: 2,
    nama: "Bima Pratama",
    prodi: "Informatika",
    ipk: 3.25,
    alamat: {
      kota: "Bandung",
      kecamatan: "Cibiru"
    }
  },
  {
    _id: 3,
    nama: "Citra Amelia",
    prodi: "Sistem Informasi",
    ipk: 3.90,
    skills: ["Python", "JavaScript"],
    aktif: true
  }
]);

// Menampilkan seluruh dokumen
db.schema_flexible_demo.find().sort({ _id: 1 });