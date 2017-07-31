const UserController = require('../Controllers/UserController');
const express = require("express");

const router = express.Router();
// const ROUTE_ID = "/favorites/:id";

router.get("/user", UserController.list);
router.put("/user", UserController.update);

// export default router;
module.exports = router;
