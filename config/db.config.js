require('dotenv').config();
const { MONGO_URL } = process.env;
const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connect successfully!');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
