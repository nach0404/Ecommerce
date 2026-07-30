const express = require("express");

const router = express.Router();


const statsController =
require("../../controllers/api/statsApiController");



router.get(
    "/",
    statsController.getStats
);



module.exports = router;