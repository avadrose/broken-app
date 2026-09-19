const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

async function getDeveloper(username) {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );

  return {
    name: response.data.name,
    bio: response.data.bio
  };
}

app.post("/", async function(req, res, next) {
  try {
    const developers = req.body.developers;

    const requests = developers.map(username =>
      getDeveloper(username)
    );

    const results = await Promise.all(requests);

    return res.json(results);
  } catch (err) {
    return next(err);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});