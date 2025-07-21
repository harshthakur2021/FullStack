// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // To load your MongoDB connection string securely from a .env file.

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb success");
    })
    .catch((err) => {
      console.log("Error connecting to mongodb");
    });
};

export default db;

// Database Connect Steps:-

// 1.  Create a file named .env in your root folder and add your MongoDB URL:
// 2. 3. Create MongoDB Connection File
//   Create a file named db.js or database.js.
// ✅ 4. Use the DB Function in Your Main App index.js.
