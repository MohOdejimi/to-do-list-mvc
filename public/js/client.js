const check = document.querySelectorAll('.fa-check')
const delBtn = document.querySelectorAll('.fa-trash')

Array.from(check).forEach(btn => {
    btn.addEventListener('click', markComplete)
})

Array.from(delBtn).forEach(btn => {
    btn.addEventListener('click', deleteTodo)
})

async function markComplete () {
    const todoItem = this.parentNode.childNodes[1].innerText;
    console.log(todoItem)
    try {
        const response = await fetch('/todos/markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                todo: todoItem
           })
        })
        const data = await response.json()
        console.log(data)
        location.reload('/todos')
    } catch (err) {
        console.log(err)
    }
}

async function deleteTodo () {
    const todoItem = this.parentNode.childNodes[1].innerText;
    console.log(todoItem)
    try {
        const response = await fetch('/todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                todo: todoItem
           })
        })
        const data = await response.json()
        console.log(data)
        location.reload('/todos')
    } catch (err) {
        console.log(err)
    }
}