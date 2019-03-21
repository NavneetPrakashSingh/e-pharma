const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const prescriptionRoute = require("./routes/prescription-routes");
const cors = require('cors');
const path =require('path');

const PORT = 1234;
const DB_URI = "mongodb+srv://epharma_admin:epharma_admin@cluster0-me8ny.mongodb.net/epharma?retryWrites=true";
const MONGOOSE_OPTIONS = {
  useNewUrlParser: true
}

mongoose.Promise = Promise;
mongoose.connect(DB_URI, MONGOOSE_OPTIONS)
.then(() => console.log("Database Connected"));

const Product = require('./models/products');

app.use(bodyParser.json());

// app.use("/images",express.static(path.join("server/images")));

app.get('/api/products', async(req, res) => {
  data = await Product.find();
  res.send(data);
  console.log('/api/products' + ' response sent');
});

app.use("/api",prescriptionRoute);
app.listen(PORT, () => console.log("Server listening at port: " + PORT));
