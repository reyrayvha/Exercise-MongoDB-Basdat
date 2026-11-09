use("praktikum_mongodb");

// 1. Mengambil seluruh dokumen
db.mahasiswa.find();

// 2. Menghitung seluruh dokumen
db.mahasiswa.count();

// 3. Menghitung dengan metode modern
db.mahasiswa.countDocuments({});

// 4. Mengambil total ukuran collection
db.mahasiswa.totalSize();

// 5. Melihat statistik collection
db.mahasiswa.stats();