use("praktikum_mongodb");

// Membersihkan collection percobaan
db.embedded_demo.deleteMany({});

// Membuat dokumen dengan embedded object
db.embedded_demo.insertOne({
  _id: "ORD-001",
  tanggal: ISODate("2026-11-09T08:00:00Z"),

  pelanggan: {
    id: "MHS-001",
    nama: "Alya Putri",
    email: "alya@kampus.ac.id"
  },

  items: [
    {
      nama: "Buku Basis Data",
      jumlah: 2,
      harga: 50000
    },
    {
      nama: "Buku Algoritma",
      jumlah: 1,
      harga: 45000
    }
  ],

  pengiriman: {
    kota: "Bandung",
    kecamatan: "Cibiru"
  }
});

// Menampilkan dokumen
db.embedded_demo.find();