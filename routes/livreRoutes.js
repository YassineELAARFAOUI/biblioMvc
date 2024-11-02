const express = require('express');
const { listLivres, createLivre,nbrOfBooks,deleteBook} = require('../Controller/livreController');
const router = express.Router(); 

router.get('/livres', listLivres);
router.post('/livres', createLivre);
router.get('/nombreDelivre',nbrOfBooks);
router.delete('/delete/:id',deleteBook);
module.exports = router;
