const removeTodoAction = (id) => {

    return {
        type: 'removeTodo',
        payload: id
    }
    
}

export default removeTodoAction;