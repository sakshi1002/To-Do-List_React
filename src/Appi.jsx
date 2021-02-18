import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './index.css';

let datetotay = new Date().toDateString();

let currtime = new Date().toLocaleTimeString();




const Appi = ()=>
{

    const deleteitem=(id)=>{
        setitem((olditem) => {
            return olditem.filter((arrayele,index)=>{
               return index!==id;
            })
    
        });
        
        
    };

    let [item,nitem] = useState('');
    let [curritem , setitem] = useState([]);

    const onsubmit=()=>{

        setitem((olditem) => {
            return[...olditem,item];

        });
        nitem('');
    
};
    const inputtext=(event)=>
    {
        nitem(event.target.value);
    }

    return(
    <>
    <div style={{background: 'linear-gradient(160deg,#fce38a 55%,#fff 0%)'}}>
    <center>
    <h1 className="heading">To Do List in React Js</h1>
    </center>
    <div>
    <h2 style={{float:'left',margin:'30px'}}>{`Today is : ${datetotay}`}</h2>
        <h2 style={{float:'right',margin:'30px'}}>{`Time : ${currtime}`}</h2>
    </div>   
        <br/>
        
    <div className="contain">
        <div className="main_container">
            <center>
            <input type="text" placeholder="Enter the tasks" style={{padding:'15px',border:'1px white',margin:'20px 10px',fontWeight:'bold',fontSize:'1.2rem'}} onChange={inputtext} value={item}/>
            &nbsp;&nbsp;&nbsp;
            <button style={{padding:'15px',border:'1px white',cursor:'pointer',fontWeight:'bold',fontSize:'1.2rem'}} onClick={onsubmit} className="add">Add</button>
            </center>
            <br/>
            <center>
            <ol>
                
                    {curritem.map((itemval,index)=>{
                        return(<ToDoList key={index} text={itemval} id={index}
                                  onSelect={deleteitem}
                        />);
                    })}
                
            </ol>
            </center>

        </div>
    </div>
    </div>
    </>
    );
};

export default Appi;