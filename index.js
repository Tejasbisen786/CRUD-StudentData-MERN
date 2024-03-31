const express = require("express");
const { default: mongoose } = require("mongoose");
const Student = require("./model/studentSchema");
const cors = require("cors");
const app = express();

const PORT = 8000;

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(cors({}));

// MongoDb -Connection

mongoose
  .connect("mongodb://localhost:27017/studentData")
  .then(() => {
    console.log("Mongo Db Connected");
  })
  .catch((err) => {
    console.log("Mongo-db Eroor", err);
  });

app.get("/", (req, res) => {
  return res.send("This is Home Page");
});

app.get("/api/student", async (req, res) => {
  const studet1 = await Student.find({});
  if (!studet1) return res.json({ msg: "User Not found" }).status(404);

  return res.status(200).send(studet1);
});

app.post("/api/student", async (req, res) => {
  const body = req.body;
  if (
    !body.prn ||
    !body.name ||
    !body.Class ||
    !body.city||
    !body.photo ||
    !body.phoneno
  ) {
    return res.status(400).json({ msg: "All Field Required" });
  }

  const data = await Student.create({
    PrnNumber: body.prn,
    Name: body.name,
    Class: body.Class,
    City: body.city,
    Profile_Photo: body.photo,
    PhoneNumber: body.phoneno,
  });
  data.save();
  if (!data) return res.json({ msg: "Invalid Request" });

  return res.json({ msg: "Sucess" }).status(201);
});




app.listen(PORT, () => {
  console.log("Server is Connected with Port ", PORT);
});
