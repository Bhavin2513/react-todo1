import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './compnents/Todos';
import Header from './compnents/layout/Header';
import AddTodo from './compnents/AddTodo';
import About from './compnents/pages/About';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      todos:[ ]
    } 
    this.keycount=1;
  }

  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.isCompleted=!todo.isCompleted;
        console.log(id);
      }
      return todo;
    })})
  }

  delTodo=(id)=>{
    this.setState({
      todos:this.state.todos.filter(todo=>todo.id!==id)
    });
  }

  
  addTodo=(title)=>{
    const newTodo={
      id:this.keycount,
      task:title,
      isCompleted:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
    this.keycount++;
  }

  render(){
      return (
        <Router>
          <div className="App">
            <div className="container">
              <Route exact path='/react-todo1' render={props=>(
                <React.Fragment>
                  <Header/>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
              )}/>
              <Route path='/about' component={About}></Route>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
