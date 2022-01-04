const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => res.send("Some API running"));

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
