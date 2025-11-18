const express = require('express');
const app = express();
const db = require('./models');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, async () => {
    console.log('Server started on port 3000');
});

db.sequelize.sync()
.then(() => {
app.listen(port, () => {
    console.log('Server started');
    });
})
.catch((err) => {
    console.log(err);
});