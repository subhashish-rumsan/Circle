const fetch = require("node-fetch");

const url = "https://api.circle.com/v1/w3s/user/initialize";
const options = {
  method: "post",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    idempotencyKey: "ba4a1f41-0b49-4b6d-bae1-dfe327f63a83",
  }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
