<?php

try {
    $mongoClient = new MongoDB\Driver\Manager("mongodb://admin:pass@mongodb:27017/");

    echo "Connected to MongoDB successfully!";
} catch (Exception $e) {
    echo "Failed to connect to MongoDB: " . $e->getMessage();
}