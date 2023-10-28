// Select the database to use.
use("Marketplace");

// Create the "product" collection with the specified properties
db.createCollection("product", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "description", "price", "quantity", "category"],
      properties: {
        name: {
          bsonType: "string",
        },
        description: {
          bsonType: "string",
        },
        price: {
          bsonType: "number",
        },
        quantity: {
          bsonType: "number",
        },
        category: {
          bsonType: "string",
        },
      },
    },
  },
});

// Select the database to use.
use("Marketplace");

db.createCollection("categories", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: {
          bsonType: "string",
        },
      },
    },
  },
});

// Insert Names into categories collections
db.getCollection("categories").insertMany([
  { name: "Men" },
  { name: "Women" },
  { name: "Teens" },
]);

use("Marketplace");

db.getCollection("product").insertMany([
  {
    name: "Product 1: Mens shirt",
    description: "Mens Fashion wear",
    price: 10.99,
    quantity: 100,
    category: "Men",
  },
  {
    name: "Product 2: Womens Shoe",
    description: "Womens Fashion wea",
    price: 19.99,
    quantity: 50,
    category: "Women",
  },
  {
    name: "Product 3: Mens Sunglass",
    description: "Mens Fashion wear",
    price: 7.99,
    quantity: 75,
    category: "Men",
  },
  {
    name: "Product 4: Teens Toy",
    description: "Teens Gift Items",
    price: 14.49,
    quantity: 60,
    category: "Teens",
  },
  {
    name: "Product 5: Women Lux Bags",
    description: "Women Fashion Wear",
    price: 25.99,
    quantity: 30,
    category: "Women",
  },
]);
