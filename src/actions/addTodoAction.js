const addTodoAction = (todo) => {
    
    return {
        type: 'addTodo',
        payload: todo
    }
}

export default addTodoAction;