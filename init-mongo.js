db.createUser({
    user: "admin",
    pwd: "pass",
    roles: [
      {
        role: "readWrite",
        db: "mydatabase"
      }
    ]
  });
  
  db.mydatabase.insertMany([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ]);
  