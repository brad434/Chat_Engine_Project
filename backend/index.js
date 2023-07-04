const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "PRIVATE-KEY": "cc5d0e89-c8fa-417c-b5e6-a7aed89491e1" } }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

try {
  app.listen(3001);
  console.log("Server running on port 3001");
} catch (err) {
  console.log("Error starting the server:", err);
}

//if you want to get more info on the documentation of chatengine.io
//go to "rest.chatengine.io"
