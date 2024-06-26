const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_STR);
    console.log(`Successfully connected to MONGO`);
  } catch (error) {
    console.error(error);
  }
}
