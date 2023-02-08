const postsControllers = require("./posts.controllers");

const getAllPosts = (req, res) => {
    postsControllers
        .findAllPosts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => res.status(400).json(error));
};

const postNewPost = (req, res) => {
    const objData = req.body;
    postsControllers
        .createPost(objData)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

const getPostById = (req, res) => {
    const id = Number(req.params.id);
    postsControllers
        .findPostById(id)
        .then((data) => {
            data
                ? res.status(200).json(data)
                : res.status(404).json({ message: "Not found" });
        })
        .catch((error) => res.status(400).json(error));
};

const deletePost = (req, res) => {
    const id = Number(req.params.id);
    postsControllers
        .deletePost(id)
        .then((data) => {
            data
                ? res.status(204).json()
                : res.status(404).json({ message: "not found" });
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

const patchPost = (req, res) => {
    const id = Number(req.params.id);
    const objData = req.body;
    postsControllers
        .updatePost(id, objData)
        .then((data) => {
            data
                ? res.status(200).json({
                      message: `Routine with id ${id} updated successfully`,
                  })
                : res.status(404).json({ message: "not found" });
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

module.exports = {
    getAllPosts,
    postNewPost,
    getPostById,
    deletePost,
    patchPost,
};
