const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ToyRouter = require("./routers/ToyRouter");
const UserRouter = require("./routers/UserRouter");
const Commentsrouter = require("./routers/Commentsrouter");
const OrdersRouter = require("./routers/OrdersRouter");
const ReviewsRouter = require("./routers/Reviewsrouter");
const AdminRouter = require("./routers/AdminRouter");

const { config } = require("dotenv");
config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/toys", ToyRouter);
app.use("/users", UserRouter);
app.use("/comments", Commentsrouter);
app.use("/orders", OrdersRouter);
app.use("/reviews", ReviewsRouter);
app.use("/admin", AdminRouter);

const startserver = () => {
  app.listen(3001, () => {
    console.log("server is runing...");
  });
};

const connecToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("---Connected to database---");
    startserver();
  } catch (e) {
    console.error("---failed to connect to database---");
  }
};

connecToDatabase();
