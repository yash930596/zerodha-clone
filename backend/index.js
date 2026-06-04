require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authMiddleware = require("./middleware/authMiddleware");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://zerodha-clone-lovat-eight.vercel.app",
    "https://zerodha-clone-35hm.vercel.app"
  ]
}));
app.use(bodyParser.json());


// ================= PROTECTED TRADING ROUTES =================

app.get("/allHoldings", authMiddleware, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", authMiddleware, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Order error");
  }
});
app.get("/allOrders", authMiddleware, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching orders");
  }
});


// ================= AUTH ROUTES =================

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ message: "User Registered Successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
});


// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong Password" });
    }

const token = jwt.sign(
  {
    email: user.email,
    fullname: user.fullname,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

    res.json({
      message: "Login Successful",
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send("Login Error");
  }
});


// ================= PROFILE ROUTE =================

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome User",
    user: req.user,
  });
});


// ================= SERVER =================

app.listen(PORT, () => {
  mongoose.connect(uri)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

  console.log("App started on port", PORT);
});