import React, { Component } from 'react';
import {connect} from 'react-redux';
import addTodoAction from '../actions/addTodoAction';
import clearTodoAction from '../actions/clearTodoAction';
import '../App.css'

class TodoForm extends Component {

    state = {
        todo: ''
    }

    addNewTodo = (e) => {
        e.preventDefault();
        this.props.addTodoAction(this.state.todo);
    }

    clearTodos = (e) => {
        e.preventDefault();
        this.props.clearTodoAction()
    }

    render() {
        return (
            <div style={{margin: '2rem 0'}}>
                <form onSubmit={this.addNewTodo}>
                    <label htmlFor='todo'>
                        Add Todo:&nbsp; 
                        <input required type='text' name='todo' onChange={(e)=>{this.setState({[e.target.name]: e.target.value})}} />
                    </label>&nbsp;
                    <button className='todo-form-button' type='submit'>Add</button>&nbsp;
                    <button className='todo-form-button' type='button' onClick={this.clearTodos}>Clear</button>
                </form>
            </div>
        )
    }
}


export default connect(null, {addTodoAction, clearTodoAction})(TodoForm)