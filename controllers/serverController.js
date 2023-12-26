const axios = require("axios");

async function serversStats(req, res) {
  let url = "https://api.truckersmp.com/v2/servers";

  await axios
    .get(url)
    .then((response) => {
      var data = response.data;
      res.status(200).send(data.response);
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message,
      });
    });
}

module.exports = { serversStats };
