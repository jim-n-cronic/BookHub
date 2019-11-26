const express = require("express");
//const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define expressMiddleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const { router } = require('./routes');
app.use(router)

// Send every other request to the React app
// Define any API routes before this runs

// MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongobd://localhost/thebookhub");


// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


// yellaaaaaa << serverListener
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
