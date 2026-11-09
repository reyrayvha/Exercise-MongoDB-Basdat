use("praktikum_mongodb");

db.date_demo.deleteMany({});

db.date_demo.insertMany([

  {
    _id: 1,
    jenis: "JavaScript Date",
    tanggal: new Date(
      "2026-11-09T03:00:00Z"
    )
  },

  {
    _id: 2,
    jenis: "MongoDB ISODate",
    tanggal: ISODate(
      "2026-11-09T03:00:00Z"
    )
  },

  {
    _id: 3,
    jenis: "Unix Epoch",
    tanggal: new Date(0)
  }

]);

db.date_demo.find();

db.date_demo.aggregate([
  {
    $project: {
      _id: 1,
      jenis: 1,
      tanggal: 1,

      tipeData: {
        $type: "$tanggal"
      },

      milidetikSejakEpoch: {
        $toLong: "$tanggal"
      }
    }
  }
]);