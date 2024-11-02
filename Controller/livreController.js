//Controller\livreController.js
const express =  require('express');
const { getAllLivres, addLivre, deleteLivre } = require('../Model/livre');
livres= express.Router();
// ici on peut avoir la liste des livres
const listLivres = (req, res) => {
    res.json(getAllLivres());
};
// ajouter new books
const createLivre = (req, res) => {
    const newLivre = addLivre(req.body);
    res.status(201).json(newLivre);
}
// get le nombtre de livres en bibiliotheque
const nbrOfBooks = (req,res)=>{
    let livres = getAllLivres();
    let nombreDeLivre =livres.length;
    res.json(nombreDeLivre);
}
//delete un livre bien prcise
const deleteBook = (req,res)=>{
    const {id}=req.params;
     let isDelete =deleteLivre(id);
    if(isDelete){   
        res.status(200).send(`le livre avec id : ${id} est supprime`);
    }else{
        res.status(404).send(`le livre n'est pas trouvee`);
    }
}

module.exports = {listLivres,createLivre,nbrOfBooks,deleteBook};