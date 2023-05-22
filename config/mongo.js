const mongoose = require("mongoose")

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    try {
      await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("SUCCESS CONNECTION");
    } catch (err) {
      console.log("ERROR CONNECTION", err);
    }
};

module.exports = dbConnect;