const fs = require("fs");
const axios = require("axios");

const filename = process.argv[2];

if (!filename) {
  console.error("Please provide a filename.");
  process.exit(1);
}

fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${filename}:`);
    console.error(err.message);
    process.exit(1);
  }

  const urls = data.split("\n").filter(url => url.trim() !== "");

  for (let url of urls) {
    downloadURL(url.trim());
  }
});

async function downloadURL(url) {
  try {
    const response = await axios.get(url);

    const hostname = new URL(url).hostname;

    fs.writeFile(hostname, response.data, "utf8", err => {
      if (err) {
        console.error(`Couldn't write ${hostname}:`);
        console.error(err.message);
      } else {
        console.log(`Wrote to ${hostname}`);
      }
    });
  } catch (err) {
    console.error(`Couldn't download ${url}:`);
    console.error(err.message);
  }
}