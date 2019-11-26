const router = require('express').Router();
const booksController = require("../../controller/houston");

// get favorites and save favorite
router.route('/')
    .get(booksController.findAll)
    .post(booksController.saveFavorite);

// api/book/:id route
router.route('/:id')
    .delete(booksController.deleteFavorite);

module.exports = router;