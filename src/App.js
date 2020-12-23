import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import React, { Component } from 'react'

export default class App extends Component {

  state={
    componentRenderCount: 0
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <TodoList/>
        <h3>Does the redux store clear on component update? Let's find out:</h3>
        <button onClick={()=>{this.setState({componentRenderCount: this.state.componentRenderCount + 1}, ()=>{console.log(`component rendered ${this.state.componentRenderCount} time(s)`)})}}>Re-render component</button>
      </div>
    )
  }
}


// function App() {

//   console.log('whole app rendered')
//   return (
//     <div className="App">
//       <Header />
//       <AddTodo />
//       <TodoList/>
//     </div>
//   );
// }

// export default App;
