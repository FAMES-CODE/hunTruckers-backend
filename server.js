require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

app.use(cors());

// Routes import
const playerRoute = require("./routes/playerRoute");
const vtcRoute = require("./routes/vtcRoute");
const serverRoute = require("./routes/serverRoute");



app.use("/server", serverRoute);
app.use("/vtc", vtcRoute);
app.use("/player", playerRoute);


app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
