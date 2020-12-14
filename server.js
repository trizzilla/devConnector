const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();
//DB CONFIG
const db = require("./config/keys").mongoURI;

//connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("ZZZZ"));

//use Routes
app.use("/api/users", users);
app.use("/api/post", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running  on ${port}`));
