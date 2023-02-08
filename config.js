const configs = {
    db: {
        development: {
            dialect: "postgres",
            host: "localhost",
            username: "postgres",
            password: "root",
            database: "posts",
            define: {
                timestamps: true,
                underscore: true,
                underscoredAll: true,
            },
        },
    },
};

module.exports = configs;
