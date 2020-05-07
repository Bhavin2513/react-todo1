import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component{

    getstyle = () =>{
        return{
            background:'#f4f4f4',
            padding:'5px',
            borderBottom:'1px #ccc dotted',
            textDecoration : this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    }

    render(){
        const {id,task}=this.props.todo;
        return(
            <div style={this.getstyle()}>                   
                <p style={{fontSize:'20px',margin:'10px'}}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{'   '}
                        {task}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnstyle}>X</button>
                </p>
            </div>
        )
    }
}

TodoItems.proptype={
    todo:PropTypes.object.isRequired
}

const btnstyle={
    background:'#ff0000',
    color:'white',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItems;