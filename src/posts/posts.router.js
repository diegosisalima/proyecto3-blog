const postsServices = require("./posts.services");
const router = require("express").Router();

router.get("/posts", postsServices.getAllPosts);
router.post("/posts", postsServices.postNewPost);
router.get("/posts/:id", postsServices.getPostById);
router.delete("/posts/:id", postsServices.deletePost);
router.patch("/posts/:id", postsServices.patchPost);

module.exports = router;
