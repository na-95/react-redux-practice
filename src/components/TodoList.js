import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import removeTodoAction from '../actions/removeTodoAction'

function TodoList(props) {
    return (
        <div >
            {props.todos.map((i, index)=>(
                <div key={index} className="todo-list-item">
                    <label htmlFor={`todo-item-${index}`}>
                        <input type='checkbox' id={`todo-item-${index}`} />
                        <span>{i}</span>
                    </label>
                    <button onClick={(e)=>{e.preventDefault(); props.removeTodoAction(index)}} type='button'>Remove</button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({ todos: state.todoReducer.todos })

export default connect(mapStateToProps , {removeTodoAction})(TodoList)
