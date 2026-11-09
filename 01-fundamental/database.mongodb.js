use("praktikum_mongodb");

// 1. Mengambil nama database aktif
db.getName();

// 2. Mengambil versi MongoDB
db.version();

// 3. Mengambil informasi host (menggunakan adminCommand agar aman di Playground)
db.adminCommand({ hostInfo: 1 });

// 4. Mengambil statistik database
db.stats();