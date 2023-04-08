// Express
const express = require("express");

// Router
const router = express.Router();

const resourceController = require("./controller");

router.route("/addResource").post(resourceController.createResource);
router.route("/").get(resourceController.fetchResources);
router.route("/:id").get(resourceController.getResourceById);
router.route("/:id").put(resourceController.updateResource);
router.route("/:id").delete(resourceController.deleteResource);

module.exports = router;