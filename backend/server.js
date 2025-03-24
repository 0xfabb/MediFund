const express = require("express");

const app = express();
const PORT = 4500;

app.get("/", (req, res) => {
  res.send("Hello World, from MediFund");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
