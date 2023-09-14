import express from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.router.js";
import personRoute from "./person.router.js";
import reviewRoute from "./review.router.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/person", personRoute);
router.use("/reviews", reviewRoute);
router.use("/:mediaType", mediaRoute);

export default router;
