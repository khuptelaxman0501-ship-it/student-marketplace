
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample products
const products = [
  {
    id: 1,
    name: "Engineering Books",
    price: 300,
    category: "Books"
  },
  {
    id: 2,
    name: "Scientific Calculator",
    price: 500,
    category: "Electronics"
  },
  {
    id: 3,
    name: "College Bag",
    price: 400,
    category: "Accessories"
  }
];

// Home API
app.get("/", (req, res) => {
  res.send("Student Marketplace Backend is Running!");
});

// Products API
app.get("/api/products", (req, res) => {
  res.json(products);
});


const PORT = process.env.PORT || 5000;

module.exports = app;
