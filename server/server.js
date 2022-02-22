const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//Routes
//app.use(require("./routes/"));

//Database Object
const dbo = require("./db/conn");

app.listen(PORT, () => {
    dbo.connectToServer((err) => {
        if (err) console.error(err);
    });

    console.log(`Server is running at ${PORT}`);
});