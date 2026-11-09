use("praktikum_mongodb");

db.objectid_demo.deleteMany({});

// Insert tanpa memberikan _id
db.objectid_demo.insertOne({
  nama: "Alya Putri",
  prodi: "Informatika"
});

// Lihat hasil
db.objectid_demo.findOne();

db.objectid_demo.insertOne({
  _id: new ObjectId(),
  nama: "Bima Pratama",
  prodi: "Informatika"
});

db.objectid_demo.find();

db.objectid_demo.aggregate([
  {
    $project: {
      _id: 1,
      nama: 1,

      tipeId: {
        $type: "$_id"
      },

      waktuDibuat: {
        $toDate: "$_id"
      }
    }
  }
]);