const WordController = require('../Controllers/WordController');
const express = require("express");

const router = express.Router();
const ROUTE_ID = "/api/:word";

router.get("/api", WordController.list);
router.get(ROUTE_ID, WordController.find);
router.put(ROUTE_ID, WordController.update);
router.delete(ROUTE_ID, WordController.delete);
router.post("/api", WordController.create);

// export default router;
module.exports = router;
