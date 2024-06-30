# Practical MongoDB PHP project

This is a toy project used for making practice with MongoDB, PHP and docker.

## Setup configuration

### Docker section
Three containers with persisten data and a Dockerfile used for installing and configuring Apache, PHP and MongoDB modules for PHP and Apache.

```bash
$ docker-compose up -d --build
```


### MongoDB
Start the container shell in order to use the mongodb shell (running container):  
```$ docker exec -it mongodb bash```  
```# bin/mongosh -u admin -p pass --authenticationDatabase admin```

Create a database, a collection and some data:
```bash
use mydb
db.createCollection('friends')
db.friends.insert({name: "John", age: 23})
db.friends.insert({name: "Jack", age: 21})
db.friends.insert({name: "Bob", age: 22})
db.friends.find()
```

### Useful commands

Show all documents with age greater than 22:  
```db.friends.find({age: {$gt: 23}})```

### Apache PHP
http://localhost:8000/ on your browser   
Apache will execute the PHP script in your index.php file and connect to the MongoDB database.

### Mongo Express
Access Mongo Express: http://localhost:8081/
