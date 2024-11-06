const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

// Import the router
const urlRouter = require("./routes/router");
app.use("/api", urlRouter);
const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `*`);
  next();
};
app.use(allowCrossDomain);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
