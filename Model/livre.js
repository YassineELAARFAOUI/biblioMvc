let books = [
    { id: 1, title: 'Node.js Design Patterns', author: 'Mario Casciaro', genre: 'Programming' },
    { id: 2, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', genre: 'Programming' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Software Engineering' },
    { id: 4, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', genre: 'Programming' }
];
const getAllLivres =()=> books;
const addLivre = (livre)=>{
    livre.id = livres.length+1;
    books.push(livre);
    return livre;
}
//supression de livre 
const deleteLivre =(id)=>{
    const livreIndex = books.findIndex(u=>u.id==parseInt(id));
    if(livreIndex>=0){
        books.splice(livreIndex,1);
       return true;

    }else{
        return "id n'est pas trouve dans la liste de livre";
    }
//update the book
    
}
module.exports={getAllLivres, addLivre,deleteLivre};