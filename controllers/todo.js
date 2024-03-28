const Todo = require('../models/Todo')


module.exports = {
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            const itemsCompleted =await Todo.countDocuments({completed: true})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, completed: itemsCompleted})
        }catch(err){
            console.log(err)
        }
    },
    createTodos: async (req,res) => {
        try {
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added')
            res.redirect('/todos')
        } catch (err) {
            console.log(err)
        }
    }, 
    markComplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({todo: req.body.todo}, {
                completed: true
            })
            console.log('Marked Complete')
            res.json('Mark Completed')
        } catch (err) {
            console.log(err)
        }
    }, 
    deleteTodo: async (req, res) => {
        try {
            await Todo.findOneAndDelete({todo: req.body.todo})
            console.log('Succesfully Deleted')
            res.json('Deleted')
        } catch(err) {
            console.log(err)
        }
    }
}