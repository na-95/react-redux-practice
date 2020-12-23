import React, { Component } from 'react';
import {connect} from 'react-redux';
import addTodoAction from '../actions/addTodoAction'

class AddTodo extends Component {

    state = {
        todo: ''
    }

    addNewTodo = (e) => {
        e.preventDefault()
        this.props.addTodoAction(this.state.todo)
        
    }

    render() {
        return (
            <div style={{margin: '2rem 0'}}>
                <form onSubmit={this.addNewTodo}>
                    <label htmlFor='todo'>
                        Add Todo:&nbsp; 
                        <input required type='text' name='todo' onChange={(e)=>{this.setState({[e.target.name]: e.target.value}, ()=>{console.log(this.state.todo)})}} />
                    </label>&nbsp;
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        )
    }
}


export default connect(null, {addTodoAction})(AddTodo)