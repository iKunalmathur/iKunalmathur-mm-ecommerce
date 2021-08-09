import express from "express";

const app = express();

const auth = require("./routes/auth");

app.use(express.json());

// Backend Routes

app.get("/", (req, res) => {
  res.send("Backend is up and alive !!");
});

// API Routes

app.use("/api/auth", auth);
app.use("/api/users", require("./routes/user"));
app.use("/api/products", require("./routes/product"));

// Port Setup
const port = 5500;
app.listen(port, () => {
  console.log(`Backend Listning On Port ${port}`);
});
