const axios = require("axios");

/* Get one user Data */

async function getUserData(req, res) {
  let pid = req.params.pid;
  let url = "https://api.truckersmp.com/v2/player/" + pid;
  await axios
    .get(url)
    .then((response) => {
      var data = response.data;
      res.send([data]);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
}

module.exports = {
  getUserData,
};
