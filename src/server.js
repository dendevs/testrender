import app from "./app.js";
const host = "http://localhost";
const port = 3000;

app.listen(port, () => {
  console.log(`Running on ${host}:${port}`);
});
