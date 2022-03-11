const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const { associateModelObj } = require("./src/models/AssociateModel");
const { userModelObj } = require("./src/models/UserModel");
const { bookingModelObj } = require("./src/models/BookingModel");
const cors = require("cors");

const app = express();
const port = 3005;

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS,DELETE,UPDATE,PUT,PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const EventRoute = require("./src/routes/EventRoute");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

mongoose.connect(
  "mongodb+srv://hazeena:hazeena@cluster0.qh9d1.mongodb.net/ICTAKprojectDatabase?retryWrites=true&w=majority"
);

app.use("/api/events", EventRoute);

app.post("/api/add", async (req, res) => {
  try {
    console.log(req.body);
    let mydata = new associateModelObj(req.body);
    let data = await mydata.save();
    console.log("Successfully Added Data");
    res.send("Successfully Added Data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/view", async (req, res) => {
  try {
    let result = await associateModelObj.find();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/delete", async (req, res) => {
  try {
    let result = await associateModelObj.deleteOne({ ictkid: req.body.ictkid });
    console.log("Successfully Deleted Associate Details  : " + req.body.ictkid);
    res.send("Deleted" + req.body.ictkid);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/update", async (req, res) => {
  try {
    console.log(req.body);
    let result = await associateModelObj.updateOne(
      { ictkid: req.body.ictkid },
      { $set: { name: req.body.name } }
    );
    console.log("Successfully Updated  : " + req.body.ictkid);
    res.send("Updated" + req.body.ictkid);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/addbooking", async (req, res) => {
  try {
    console.log(req.body);
    let mydata = new bookingModelObj(req.body);
    let data = await mydata.save();
    console.log("Successfully Added Hall");
    res.send("Successfully Added Hall");
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/viewbooking", async (req, res) => {
  try {
    let result = await bookingModelObj.find();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/updatebooking", async (req, res) => {
  try {
    console.log(req.body);
    let result = await bookingModelObj.updateOne(
      { ictkid: req.body.associate },
      { $set: { content: req.body.content } }
    );
    console.log(
      "Successfully Updated Hall Booking with : " + req.body.associate
    );
    res.send("Updated" + req.body.associate);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/deletebooking", async (req, res) => {
  try {
    let result = await bookingModelObj.deleteOne({
      associate: req.body.associate,
    });
    console.log("Successfully Deleted Hall Details : " + req.body.associate);
    res.send("Deleted" + req.body.associate);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    console.log(req.body);
    let mydata = new userModelObj(req.body);
    let data = await mydata.save();
    res.send("Successfully Added Data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/login", async (req, res) => {
  try {
    let result = await userModelObj.find();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
