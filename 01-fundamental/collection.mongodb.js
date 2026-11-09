use("praktikum_mongodb");

// 1. Melihat seluruh nama collection
db.getCollectionNames();

// 2. Membuat collection baru
db.createCollection("collection_demo");

// 3. Mendapatkan object collection
db.getCollection("mahasiswa");

// 4. Mengakses collection menggunakan db
db.mahasiswa;

// 5. Melihat informasi seluruh collection
db.getCollectionInfos();