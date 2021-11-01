import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const port = 5000 || process.env.PORT;

app.use("/test", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
