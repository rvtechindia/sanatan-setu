const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload({ useTempFiles: true }));

// Route Imports
// const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
// const order = require("./routes/orderRoute");
// const payment = require("./routes/paymentRoute");
const location = require("./routes/locationRoute");
const category = require("./routes/categoryRoute");
const address = require("./routes/addressRoute");
const employer = require("./routes/employerRoute");

// app.use("/api/v1", product);
app.use("/api/v1", user);
// app.use("/api/v1", order);
// app.use("/api/v1", payment);
app.use("/api/v1", location);
app.use("/api/v1", category);
app.use("/api/v1/admin", address);
app.use("/api/v1/employer", employer);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  res.send("Sanatan server working!");
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
