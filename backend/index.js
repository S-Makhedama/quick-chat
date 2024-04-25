//import express 
const express = require("express");
const cors = require("cors");

//
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
  
    try {
      const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "45d990d0-85d2-451e-a491-a32e9a18c6e8" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      // Check if e.response exists before accessing its properties
      if (e.response) {
        // Response object is available
        return res.status(e.response.status).json(e.response.data);
      } else {
        // Response object is not available, handle the error accordingly
        console.error("Error occurred during request:", e);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });
  
  


//run the app on port 3001
app.listen(3001);