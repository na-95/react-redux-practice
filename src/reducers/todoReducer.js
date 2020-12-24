const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {


    switch(action.type){

        case ('addTodo'):
            return {
                todos: [...state.todos, action.payload]
            }

        case ('clearTodo'):
            return {   
                todos: []
            }

        case ('removeTodo'):
            state.todos.splice(action.payload, 1)
            return {   
                todos: [...state.todos]
            }

        default:
            return {
                ...state
            }

    }
    
}

export default todoReducer;

