
// Express
const express = require("express");

// Router
const router = express.Router();

const userController = require("./controller");

router.route("/signup").post(userController.createUser);

router.route("/").get(userController.fetchUsers).post(userController.createUser);

router.route("/:id").get(userController.getUserById).patch(userController.updateUser).delete(userController.deleteUser);
router.route("/login").post(userController.login);


module.exports = router;
