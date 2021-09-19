const router = require("express").Router();
const workoutRoutes = require("./workoutRoutes");

// API router for workouts.
router.use("/workouts", workoutRoutes);

module.exports = router;