const mongoose = require("mongoose");

const connectDb = async (URI) => {
  try {
    const conn = await mongoose.connect(URI, { useNewUrlParser: true });
    console.log("mongoose is connected on the host:", conn.connection.host);
  } catch (err) {
    console.log("err occured", err);
    process.exit(1);
  }
};

module.exports = connectDb;
