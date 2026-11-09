use("praktikum_mongodb");

// Mencoba memasukkan _id yang sudah digunakan
db.primary_key_demo.insertOne({
  _id: "IF24001",
  nama: "Mahasiswa Duplikat",
  prodi: "Informatika"
});