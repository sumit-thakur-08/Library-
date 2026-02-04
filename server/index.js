import dotnev from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotnev.config({
  path: "./.env", // Providing env variables in all files immidiately
});

//Since connectDB return promises beacause of async behaviour we can further use then and catch
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection Error !!! ", err);
  });
