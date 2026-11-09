
use("praktikum_mongodb");

db.mahasiswa.insertMany([
  {
    _id: 1001,
    nim: "IF24001",
    nama: "Alya Putri",
    umur: 20,
    prodi: "Informatika",
    angkatan: 2024,
    ipk: 3.75,
    aktif: true,
    email: "alya@kampus.ac.id",
    skills: ["JavaScript", "Python", "SQL"],
    nilai: [
      { matkul: "Basis Data", nilai: 90 },
      { matkul: "Algoritma", nilai: 85 }
    ],
    alamat: {
      kota: "Bandung",
      kecamatan: "Cibiru"
    },
    customFields: {
      minat: "AI",
      organisasi: "Basket"
    },
    createdAt: ISODate("2026-10-01T08:00:00Z")
  },
  {
    _id: 1002,
    nim: "IF23002",
    nama: "Bima Pratama",
    umur: 21,
    prodi: "Informatika",
    angkatan: 2023,
    ipk: 3.25,
    aktif: true,
    email: "bima@kampus.ac.id",
    skills: ["Java", "SQL"],
    nilai: [
      { matkul: "Basis Data", nilai: 78 },
      { matkul: "Algoritma", nilai: 80 }
    ],
    alamat: {
      kota: "Bandung",
      kecamatan: "Ujungberung"
    },
    customFields: { minat: "Backend" },
    createdAt: ISODate("2026-09-01T08:00:00Z")
  },
  {
    _id: 1003,
    nim: "SI25003",
    nama: "Citra Amelia",
    umur: 19,
    prodi: "Sistem Informasi",
    angkatan: 2025,
    ipk: 3.90,
    aktif: true,
    email: "citra@kampus.ac.id",
    skills: ["Python", "UI/UX", "JavaScript"],
    nilai: [
      { matkul: "Basis Data", nilai: 95 },
      { matkul: "Web", nilai: 92 }
    ],
    alamat: {
      kota: "Garut",
      kecamatan: "Tarogong"
    },
    customFields: { minat: "UI/UX" },
    createdAt: ISODate("2026-08-01T08:00:00Z")
  },
  {
    _id: 1004,
    nim: "IF22004",
    nama: "Deni Saputra",
    umur: 22,
    prodi: "Informatika",
    angkatan: 2022,
    ipk: 2.85,
    aktif: false,
    skills: ["C", "Java"],
    nilai: [
      { matkul: "Basis Data", nilai: 65 },
      { matkul: "Algoritma", nilai: 70 }
    ],
    alamat: {
      kota: "Bandung",
      kecamatan: "Cibiru"
    },
    customFields: { minat: "Security" },
    createdAt: ISODate("2025-09-01T08:00:00Z")
  },
  {
    _id: 1005,
    nim: "TE24005",
    nama: "Eka Pratama",
    umur: 20,
    prodi: "Teknik Elektro",
    angkatan: 2024,
    ipk: 3.50,
    aktif: true,
    email: "eka@kampus.ac.id",
    skills: ["Python", "C", "SQL"],
    nilai: [
      { matkul: "Basis Data", nilai: 88 },
      { matkul: "Jaringan", nilai: 86 }
    ],
    alamat: {
      kota: "Sumedang",
      kecamatan: "Jatinangor"
    },
    customFields: { minat: "IoT" },
    createdAt: ISODate("2026-10-02T08:00:00Z")
  }
]);

// Verifikasi jumlah data
db.mahasiswa.countDocuments({});

// Tampilkan seluruh data
db.mahasiswa.find();
