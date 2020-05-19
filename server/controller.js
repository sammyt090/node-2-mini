
const books = []
let id = 0

module.exports = {
    getAllBooks: (req, res)=>{
        res.status(200).send(books)

    },
    createBook: (req, res) =>{
        const {title, author} = req.body

        const newBook = {id, title, author}

        books.push(newBook)

        id++

        res.status(200).send(books)

    },
    editBook: (req, res) =>{
        const {book_id} = req.params
        const {title, author} = req.body

        const findBook = books.findIndex(e => e.id === +book_id)

        if(findBook === -1){
            return res.status(404).send("Not Found")
        }

        const updatedBook = {id: +book_id, title, author}

        books[findBook] = updatedBook

        res.status(200).send(books)

    },
    deleteBooks: (req, res) =>{
        const {book_id}= req.params


        const index = books.findIndex(e => e.id === +book_id)
        if(index === -1){
            res.status(404).send("Book not found")
        }

        books.splice(index, 1)

        res.status(200).send(books)

    }
}