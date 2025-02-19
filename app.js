const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Import cors

const app = express();
const port = 3000;

// ✅ Enable CORS for all routes
app.use(cors());

// Optional: To parse JSON bodies (if needed for POST/PUT requests)
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// MongoDB connection
async function main() {
  await mongoose.connect(
    "mongodb+srv://nitintomas31:entri1234@cluster0.sprx6.mongodb.net/e48db",
    {}
  );
}

main()
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Import Product model
const Product = require("./model/product");

// Products route
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    console.log("✅ Products fetched:", products); // ✅ Log to check data
    res.status(200).json(products);
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
