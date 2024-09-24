const express = require("express");
const cors = require("cors");

const app = express(); 
const config = require("./config/index.js");
const MongoDB = require("./utils/mongodb.util.js");

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});


async function StartServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database!");

        const PORT = config.app.port;

        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}.`);
        });

    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit;
    }
}

StartServer();