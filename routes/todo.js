const express = require('express')
const router = express.Router()
const todoControllers = require('../controllers/todo')

router.get('/', todoControllers.getTodos)

router.post('/createTodo', todoControllers.createTodos)

router.put('/markComplete', todoControllers.markComplete)

router.delete('/deleteTodo', todoControllers.deleteTodo)

module.exports = router