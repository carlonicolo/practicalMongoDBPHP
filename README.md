# Practical MongoDB PHP project

This is a toy project used for making practice with MongoDB, PHP and docker.

## Setup configuration

### Docker section

Three containers with persisten data and a Dockerfile used for installing and configuring Apache, PHP and MongoDB modules for PHP and Apache.

```bash
$ docker-compose up -d --build
```
**Composer add**:  
```$ docker exec -it php-apache bash``
```# composer require mongodb/mongodb ```


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
db.friends.insert({name: "Mary", age: 20})
db.friends.find()
```

### Useful commands

Show all documents with age greater than 22:  
```db.friends.find({age: {$gt: 23}})```

Update command:
db.friends.update(search term, update term)  
```db.friends.update({}, {$set: {gender: "m"}})```  
```db.friends.update({}, {$set: {gender: "m"}}, {multi: true})```  
```db.friends.update({name: "Mary"}, {$set: {gender: "f"}}, {multi: true})```

### Apache PHP

http://localhost:8000/ on your browser  
Apache will execute the PHP script in your index.php file and connect to the MongoDB database.

### Mongo Express

Access Mongo Express: http://localhost:8081/

## Useful tips about 

### DB Relationships  

- **One to One**
- **One to Many**
- **Many to Many**

### Indexes

```db.comments.ensureIndex({"author": 1})```  
```db.comments.getIndexes()```  

