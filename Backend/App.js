//ini Mongo $ Express
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Connect the data base
mongoose.connect('mongodb+srv://kaanu2000:Kq9wAdWIlzt5H36W@cluster.r6hvnlt.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//Database error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(express.json());

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Define your routes and middleware here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


