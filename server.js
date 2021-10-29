const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("dist"));

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`running in port ${port}`);
});
