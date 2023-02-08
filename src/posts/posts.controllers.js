const Posts = require("../models/posts.models");
const findAllPosts = async () => {
    const data = await Posts.findAll();
    return data;
};

const findPostById = async (id) => {
    const data = await Posts.findOne({
        where: {
            id,
        },
    });
    return data;
};

const createPost = async (objData) => {
    const newPost = {
        content: objData.content,
        userName: objData.userName,
        isPublished: objData.isPublished,
    };
    const data = await Posts.create(newPost);
    return data;
};

const updatePost = async (id, objData) => {
    const data = await Posts.update(objData, {
        where: {
            id,
        },
    });
    return data;
};

const deletePost = async (id) => {
    const data = await Posts.destroy({
        where: {
            id,
        },
    });
    return data;
};

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost,
};
