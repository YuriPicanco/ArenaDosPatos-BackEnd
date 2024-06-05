const cors = require("cors");
const express = require("express");
const Routes = require("./routes.js");
const dbConnect = require("./database/connect.js");

const app = express();

const port = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
  res.json({
    MESSAGE: "API",
  })
);

app.use(Routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
