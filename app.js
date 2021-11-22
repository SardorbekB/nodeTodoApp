const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb://localhost/completeTodo');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(require('./router/Home'));
app.use(require('./router/Todo'));


app.listen(port, () => {
    console.log(`${port} - portni eshitishni boshladim`);
});