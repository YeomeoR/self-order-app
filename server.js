// create a web server that returns categories data when /api/categories is entered in the url

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const data = require('./src/data');

// instatiate express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// create a model
const Product = mongoose.model(
  'products',
  new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    calorie: Number,
    image: String,
  }),
);

// create a seeder for products
app.get('/api/products/seed', async (req, res) => {
  const products = await Product.insertMany(data.products);
  res.send({ products });
});

app.get('/api/products', async (req, res) => {
  const { category } = req.query;
  const products = await Product.find(category ? { category } : {});
  res.send(products);
});

app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});
// define a route with a function that gets a response of the categories from 'data'
app.get('/api/categories', (req, res) => {
  res.send(data.categories);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
