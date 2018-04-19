/**
 * Created by dariabondarchuk on 4/19/18.
 */
let express = require('express');
const app = express();
const port = 1337;
const router = require('./src/routes.js');
app.use('/', router);

app.listen(port, () => {
    console.log("App listens on port 1337");
});