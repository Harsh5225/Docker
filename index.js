import express, { urlencoded } from "express";
const app = express();
app.use(express.json());
app.use(urlencoded());
app.get("/", (req, res) => {
  return res.send("<h1>Docker ...🚀</h1>");
});
app.get("/product", (req, res) => {
  res.json([
    {
      id: 101,
      name: "Wireless Earbuds",
      price: 59.99,
      stock: 25,
    },
    {
      id: 102,
      name: "Smart Watch",
      price: 129.99,
      stock: 15,
    },
    {
      id: 103,
      name: "Phone Case",
      price: 19.99,
      stock: 50,
    },
  ]);
});
app.listen(8000, () => {
  console.log(`server is running at 8000`);
});
