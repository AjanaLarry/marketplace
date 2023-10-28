//Set variables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Routers Variables
const routes = require('./prodRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

//Mongoose Connection
mongoose.connect(
  "mongodb+srv://<username>:<password>@larrycluster.9smsznj.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

//Open Connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
});


/* app.get("/", (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
}); */

app.listen(8081, () => {
  console.log("Server is running on Port 8081....")
});
