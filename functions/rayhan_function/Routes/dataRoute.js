const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    data: "All data",
  });
});


module.exports = router;