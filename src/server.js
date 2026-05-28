import app from "./app.js";
const host = "http://localhost";
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on ${host}:${port}`);
});
