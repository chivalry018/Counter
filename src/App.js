import { useState } from 'react';
import './App.css';

function Disp(props){
  return(

  <div className='number'>
    <div className='children'><h1>{props.num}</h1></div>
  </div>
  
  );
}

export default function App() {

  const [count, setCount] = useState(0);

  const handleIncr = () =>{
      var temp = count +1;
      setCount(temp);
  }

  const handleDecr = () =>{
    var temp = count -1;
    setCount(temp);
  }


  return (
    <div className='counter'>
      <Disp num={count}></Disp>
      <button onClick={handleDecr}><span class="button_top">Decrement</span></button>
      <button onClick={handleIncr}><span class="button_top">Increment</span></button> 
    </div>
  );
}


