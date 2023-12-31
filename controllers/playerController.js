const axios = require("axios");

async function getUserData(req, res) {
  let pid = req.params.pid;
  let url = "https://api.truckersmp.com/v2/player/" + pid;
  await axios
    .get(url)
    .then((response) => {
      var data = response.data;
      res.send({
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
}


async function getStreamer(req, res) {
  let game = req.params.game;
  let url = "https://api.truckyapp.com/v2/streams/twitch/ets2";
  await axios
    .get(url)
    .then((response) => {
      var data = response.data;
      res.send({
        data,
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message,
      });
    });
}

module.exports = {
  getUserData,
  getStreamer
};
