var express = require('express');
var router = express.Router();
var db = require("../models")

router.get('/', function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos); // Send back to requester as JSON
    })
    .catch(function(err) {
        res.send(err);
    });
});

router.post('/', function(req, res) {
    db.Todo.create(req.body)
    .then(function(newTodo) {
        // status(201) = "Created"
        res.status(201).json(newTodo); // Respond with inserted
    })
    .catch(function(err) {
        res.send(err);
    });
})

router.get('/:todoId', function(req, res) {
    db.Todo.findById(req.params.todoId) 
    .then(function(foundTodo) {
        res.json(foundTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
});

router.put('/:todoId', function(req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) // new: true sends updated todo item
    .then(function(updatedTodo) {
        res.json(updatedTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
});

router.delete('/:todoId', function(req, res)) {
    db.Todo.remove({_id: req.params.todoId})
    .then(function() {
        res.send("Successfully deleted!");
    })
    .catch(function(err) {
        res.send(err);
    })
}

module.exports = router;