// Inisialisasi replica set rs0
db.adminCommand({
  replSetInitiate: {
    _id: "rs0",
    members: [
      {
        _id: 0,
        host: "localhost:27017"
      }
    ]
  }
});