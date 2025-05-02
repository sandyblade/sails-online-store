require("dotenv").config();

module.exports = {

  detail: async function (req, res) {
    return res.json(req.user);
  },

}