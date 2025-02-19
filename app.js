const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  await mongoose.connect(
    "mongodb+srv://nitintomas31:entri1234@cluster0.sprx6.mongodb.net/e48db",
    {}
  );
}
main()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const Product = require("./model/product");
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
