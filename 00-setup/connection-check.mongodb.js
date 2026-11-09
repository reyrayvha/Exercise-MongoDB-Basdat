// Memeriksa koneksi MongoDB
db.adminCommand({ ping: 1 });

// Melihat informasi versi server
db.adminCommand({ buildInfo: 1 });

// Melihat informasi koneksi server
db.adminCommand({ hello: 1 });