use("praktikum_mongodb");

// Membuat collection khusus percobaan
db.createCollection("drop_demo");

// Memasukkan data
db.drop_demo.insertOne({
  nama: "Data Percobaan",
  status: "Testing"
});

// Memastikan data tersedia
db.drop_demo.find();

// Menghapus collection
db.drop_demo.drop();

// Memeriksa kembali daftar collection
db.getCollectionNames();