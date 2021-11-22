const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.post('/add/todo', async(req, res) => {
    const {title} = req.body;
    const newTodo = new Todo({title});
    await newTodo.save()
        .then(() => {
            console.log('Succesfully added todo');
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/delete/todo/:_id', async(req, res) => {
    const {_id} = req.params;
    await Todo.deleteOne({_id})
        .then(() => {
            console.log('Succesfully deleted todo');
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;