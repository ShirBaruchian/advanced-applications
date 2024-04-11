const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post_controller")

router.get("/", PostController.get)
router.get("/:id", PostController.get);

router.post("/", (req, res) => {
    PostController.post(req, res);
})

router.put("/", (req, res) => {
    PostController.put(req, res);
})

router.delete("/", (req, res) => {
    PostController.deletePost(req, res);
})

module.exports = router;