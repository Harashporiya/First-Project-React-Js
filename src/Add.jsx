import { useState } from "react";
import './index.css'
export  function Counter(){
    const [count, setCounter] = useState(0);
    function Increment(){
        
          setCounter(count+1);
        
    }
    function Decrement(){
        if(count >0){
      setCounter(count-1);
        }
    }
    return(<>
        <h1 id="app">Counter-App</h1>
    <div id="count">
        
    <button id="inc" onClick={Increment}>+</button>
         <div  className="zero">{count}</div>
         <button id="dec" onClick={Decrement}>-</button>
  
    </div>
    </>
    )
}    