import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  return res.send("I still love you");
  // I still love you 가 브라우저에 나온다.
});

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
