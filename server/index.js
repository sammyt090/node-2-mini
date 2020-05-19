const express = require("express")
const app = express()
const ctr1 = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/books', ctr1.getAllBooks )
app.post('/api/books', ctr1.createBook)
app.put('/api/books/:book_id', ctr1.editBook)
app.delete('/api/books/:book_id', ctr1.deleteBooks)
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))