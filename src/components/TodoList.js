import React from 'react';
import {connect} from 'react-redux';
import '../App.css'

function TodoList(props) {
    return (
        <div >
            {props.todos.map((i, index)=>(
                <div key={index} className="todo-list-item">
                    <label htmlFor={`todo-item-${index}`}>
                        <input type='checkbox' id={`todo-item-${index}`} />
                        <span>{i}</span>
                    </label>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({ todos: state.addTodoReducer.todos })

export default connect(mapStateToProps , null)(TodoList)
