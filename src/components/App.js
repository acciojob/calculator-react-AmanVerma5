import React, { useState } from "react";
import '../styles/App.css';



const App=()=>{
    let [number,setNumber]=useState('');

    function handleClick(event){
        if(event.target.innerText=='C'){
            setNumber('')
        }else if(event.target.innerText=='='){
            setNumber(eval(number))
        }
        else{
            setNumber(number+event.target.innerText)
        }
    }

    function calculate(){



    }

    return (
        <div className="calculator">
           <input type="text" className="output" value={number} />
           <div className="grid">
            <div onClick={handleClick}>C</div>
            <div onClick={handleClick}>/</div>
            <div onClick={handleClick}>*</div>
            <div onClick={handleClick}>-</div>
            <div onClick={handleClick}>7</div>
            <div onClick={handleClick}>8</div>
            <div onClick={handleClick}>9</div>
            <button onClick={handleClick} className="add">+</button>
            <div onClick={handleClick}>4</div>
            <div onClick={handleClick}>5</div>
            <div onClick={handleClick}>6</div>
            <div onClick={handleClick}>1</div>
            <div onClick={handleClick}>2</div>
            <div onClick={handleClick}>3</div>
            <button onClick={handleClick} className="equals">=</button>
            <div onClick={handleClick}>0</div>
            <div  onClick={handleClick} className="dot">.</div>
           </div>
        </div>
    )
}

export default App