import React, { useState } from 'react';
import Appi from './Appi';
import './index.css';



const ToDoList=(props)=>{

    let[dnitem,daitem] = useState();
    

    return( 
    <>
    <div className="list_item">
    <li>{props.text}</li>
    <i class="fas fa-trash-alt" onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    {/* <button onClick={props.onSelect} style={{padding:'10px',border:'1px white',cursor:'pointer'}}>Remove</button> */}
    </div>
    </>
    );
};
export default ToDoList;