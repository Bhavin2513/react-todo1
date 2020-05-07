import React,{Component} from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component{
    render(){
        return (
            this.props.todos.map((todo)=>(
            <div>
                <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>   
            </div> 
            ))
        )
        
    }
}

Todos.proptype={
    todos: PropTypes.array.isRequired
}

export default Todos;