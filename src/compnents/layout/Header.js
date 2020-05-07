import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header style={headStyle}>
            <h1>To-Do List.</h1>
            <Link style={{color:'white'}} to='/react-todo1'>Home</Link> | <Link style={{color:'white'}} to='/about'>About</Link>
        </header>
    )
}
const headStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'4px'
}
export default Header;