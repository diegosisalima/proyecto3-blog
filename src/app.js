const express = require("express");
const router = require("./posts/posts.router");
const app = express();
const db = require("./utils/database");
const postsRouters = require("./posts/posts.router");

app.use(express.json());

db.authenticate()
    .then(() => {
        console.log("credenciales correctas");
    })
    .catch((error) => {
        console.log(error);
    });

db.sync()
    .then(() => console.log("base de datos sincronizado correctamente"))
    .catch((error) => console.log(error));

app.get("/", (req, res) => {
    res.json({ messaje: "server is ok" });
});

app.use("/api/v1", postsRouters);

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server corriendo en http://localhost:${PORT}`);
});

module.exports = app;
