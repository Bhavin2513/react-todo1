import React, {Component} from 'react';

const initialstate={
    title:'',
    fill:''
}

class AddTodo extends Component{
    
    state=initialstate;

    onChange=(e)=>{
        this.setState({title:e.target.value});
    }

    validate=()=>{
        if(this.state.title===''){
            let fill='Fill the todo space...';
            this.setState({fill});
            return false;
        }
        else{
            return true;
        }
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            this.setState(initialstate);
            this.props.addTodo(this.state.title);
            this.setState({title:''})
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} style={{display:'flex',padding:'5px'}}>
                    <input type="text" name="title" placeholder="Add todo-item ..." value={this.state.title} onChange={this.onChange} style={{flex:'10',padding:'7px',marginRight:'8px'}}/>
                    <input type="submit" value="Submit" className="btn"  style={{flex:'1'}}/><br/>
                </form>
                <div style={{padding:'6px'}}>{this.state.fill}</div>
            </div>
        )
    }
}
export default AddTodo;