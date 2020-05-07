import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return(
        <div>
                    <header style={head}>
                        About Section <div style={{textAlign:'left',fontSize:'18px'}}><Link to='/react-todo1' style={{color:'white'}}>Home</Link></div>
                    </header>
                    <p style={{fontSize:'25px',padding:'10px'}}>This is a Todo-List App v1.0.1.</p>
        </div>
    )
}

const head={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'15px',
    fontSize:'33px'
    
}
export default About;