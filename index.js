const express = require ('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./database/db.js');
const movieRoute = require('./routes/index.js');

/* Middleware*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", movieRoute);
app.listen(port,() => console.log(`Server is listen on http:localhost:${port}`));