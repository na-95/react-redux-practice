const initialState = {
    todos: []
}

const addTodoReducer = (state = initialState, action) => {


    switch(action.type){

        case ('addTodo'):
           
            return {
                todos: [...state.todos, action.payload]
            }

        default:
            return {
                ...state
            }

    }
    
}

export default addTodoReducer;

