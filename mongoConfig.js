const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

if (process.env.NODE_ENV !== 'test') {
  main().catch((err) => console.log(err));
}

async function main() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_STR);
    console.log(`Successfully connected to MONGO`);
  } catch (error) {
    console.error(error);
  }
}
