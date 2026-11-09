use("praktikum_mongodb");

// Memeriksa database
db.getName();

// Memeriksa jumlah mahasiswa
db.mahasiswa.countDocuments({});

// Melihat semua mahasiswa
db.mahasiswa.find();