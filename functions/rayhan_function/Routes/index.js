var express = require("express"),
  router = express.Router();

router.use("/data", require("./dataRoute"));

router.get("/", function (req, res) {
  res.render("index", { title: "Zoho Catalyst Home Page" });
});

router.get("*", function (req, res) {
  res.status(404).render("error", {
    title: "Zoho Catalyst Home Page",
    error: {
      status: 404,
      stack: "Not found",
    },
  });
});

module.exports = router;
