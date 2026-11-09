// Berpindah ke database khusus percobaan
use("database_demo");

// Membuat collection
db.createCollection("data_sementara");

// Memastikan collection ada
db.getCollectionNames();

// Menghapus database percobaan
db.dropDatabase();