const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Document = require('../models');


// GET (-- 'all' --)
router.get('/', (req,res, next) => {
    res.status(200).json({
        message: "Handling GET / >> {SearchBooks} "
    });
});


// POST >> SEARCHBOOOKS http
router.post("/api/books/:id", (req,res, next) => {
    
    const document = new Document({
        _id: new mongoose.Types.ObjectId(),
        author: req.body.author,
        description: req.body.description,
        title: req.body.title
    });
    document
        .save()
        .then((result) => {
            console.log(result);
        }).catch(err => console.log(err));
      res.status(201).json({
          message: "Handling POST / >> {SearchBooks) ",
          createdDoc: document
      });
});

// GET /savedbooks/:id
router.get('/api/books/:id', (req,res, next) => {
    const id = req.params.id;
    Document.Documents.findById(id)
        .exec()
        .then(rez => {
            console.log(rez);
            res.status(200).json(rez)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});

// PUT
router.patch('/apibooks/:id', (req,res, next) => {
    const id = req.params.id;
    const nuOPS = {};
    for (const ops of req.body) {
        nuOPS[ops.propName] = ops.value
    }
    Document.Documents.update({ _id: id }, { $set: nuOPS })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result)
    }).catch(err => console.log(err));
});


// DELETE
router.delete('/savedbooks/:id', (req,res, next) => {
    Document.Documents.deleteOne({
        _id: req.params.id
    }).then()
})