const axios = require("axios");


/*

Get random VTCS

*/
async function getVtcs(req, res) {
  let url = "https://api.truckersmp.com/v2/vtc";

  await axios
    .get(url)
    .then((response) => {
      var data = response.data;
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error : " + err,
      });
    });
}

/*

Get data of a specific VTC

*/


async function getvtcDetails(req, res) {
  let url = "https://api.truckersmp.com/v2/vtc/" + req.params.vid;

  await axios
    .get(url)
    .then((response) => {
      var data = response.data;
      res.status(200).send([data]);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error : " + err,
      });
    });
}

/*

Get all members of a VTC

*/
async function getvtcMembers(req, res) {
  let url = "https://api.truckersmp.com/v2/vtc/" + req.params.vid + "/members";

  await axios
    .get(url)
    .then((response) => {
      var data = response.data;
      res.status(200).send({
        data,
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error : " + err,
      });
    });
}

module.exports = {
  getVtcs,
  getvtcDetails,
  getvtcMembers,
};
