const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8001;

connectToMongoDB(
  "mangoURl"
).then(() => console.log(`Mongo DB connected`));

app.use(express.json());

// Route to redirect based on the short code
app.get("/:shortId", urlRoute);
// Route to be stored
app.use("/url", urlRoute);
// Route to get analytics of a shortURL
app.get("/analytics/:shortId", urlRoute);


app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
