const express = require('express')
const router = express.Router()

//User Data Example
let users = [
    {id: 1, name: "John Doe", email: "John@email.com"},
    {id: 2, name: "Jane Doe", email: "Jane@email.com"}
]

//GET all users
router.get('/users', (req, res) => {
    res.json(users)
})

//GET user by ID
router.get('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id))
    if(!user) return res.status(404).json({message: 'User Not Found'})
    res.json(user)
})

//POST to create a new user
router.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
    }
    users.push(newUser);
    res.status(201).json(newUser)
})

//PUT to update an existing user
router.put('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id))
    if(!user) return res.status(404).json({message: 'User not Found'})
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    res.json(user)
})

//DELETE user
router.delete('/users/:id', (req, res) => {
    users = users.filter((u) => u.id !== parseInt(req.params.id))
    res.status(204).send();
})

module.exports = router