const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");

// Routes for HTMLs
router.use("/", homeRoutes);
// Routes for APIs
router.use("/api", apiRoutes);

module.exports = router;