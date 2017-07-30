const WordController = require('../Controllers/WordController');
const express = require("express");

const router = express.Router();
const ROUTE_ID = "/favorites/:id";

router.get("/api", WordController.list);
router.get(ROUTE_ID, WordController.find);
router.put(ROUTE_ID, WordController.update);
router.post("/api", WordController.create);
router.delete(ROUTE_ID, WordController.delete);

// export default router;
module.exports = router;
