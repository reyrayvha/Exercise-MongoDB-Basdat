use("praktikum_mongodb");

// Bersihkan data percobaan
db.bson_demo.deleteMany({});

// Insert berbagai tipe BSON
db.bson_demo.insertOne({

  // Double
  doubleValue: Double(3.14159),

  // String
  stringValue: "MongoDB",

  // Object
  objectValue: {
    kota: "Bandung",
    provinsi: "Jawa Barat"
  },

  // Array
  arrayValue: [
    "JavaScript",
    "Python",
    "SQL"
  ],

  // ObjectId
  objectIdValue: new ObjectId(),

  // Boolean
  booleanValue: true,

  // Date
  dateValue: ISODate("2026-11-09T03:00:00Z"),

  // Null
  nullValue: null,

  // Regular Expression
  regexValue: /mongodb/i,

  // 32-bit Integer
  int32Value: Int32(25),

  // 64-bit Integer
  longValue: Long("9000000000"),

  // Decimal128
  decimalValue: Decimal128("99.99")
});

// Melihat hasil
db.bson_demo.findOne();

use("praktikum_mongodb");

db.bson_demo.aggregate([
  {
    $project: {
      _id: 0,

      doubleValue: {
        $type: "$doubleValue"
      },

      stringValue: {
        $type: "$stringValue"
      },

      objectValue: {
        $type: "$objectValue"
      },

      arrayValue: {
        $type: "$arrayValue"
      },

      objectIdValue: {
        $type: "$objectIdValue"
      },

      booleanValue: {
        $type: "$booleanValue"
      },

      dateValue: {
        $type: "$dateValue"
      },

      nullValue: {
        $type: "$nullValue"
      },

      regexValue: {
        $type: "$regexValue"
      },

      int32Value: {
        $type: "$int32Value"
      },

      longValue: {
        $type: "$longValue"
      },

      decimalValue: {
        $type: "$decimalValue"
      }
    }
  }
]);

use("praktikum_mongodb");

db.bson_special_demo.deleteMany({});

db.bson_special_demo.insertOne({

  // Binary Data
  binaryValue: BinData(
    0,
    "SGVsbG8="
  ),

  // Timestamp
  timestampValue: Timestamp({
    t: 1730000000,
    i: 1
  }),

  // MinKey
  minKeyValue: MinKey(),

  // MaxKey
  maxKeyValue: MaxKey()

});

db.bson_special_demo.findOne();

use("praktikum_mongodb");

db.bson_javascript_demo.deleteMany({});

db.bson_javascript_demo.insertOne({

  javascriptValue: Code(
    "function() { return 100; }"
  ),

  javascriptWithScopeValue: Code(
    "function() { return nilai; }",
    { nilai: 100 }
  )

});

db.bson_javascript_demo.findOne();