const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.ATLAS_URI;

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  
  console.log('MongoDB Connected');
};
module.exports = connectDB;
