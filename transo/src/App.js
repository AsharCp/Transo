import { useState } from 'react';
import './App.css';


function App() {

  const [text,setText] = useState("")

  const handleText=(event)=>{
    setText(event.target.value)
    console.log(text)

  }
  const handleTranslate=()=>{
    console.log("Clicked Yes")
  }

  const handleClear=()=>{
    setText("");
  }

  

  return (
    <div className="home">
      <h1 className="heading">Lets's Communicate😉</h1>
      <div className="textDiv">
        <textarea value={text} className="textIn" type='text' placeholder="Enter text" onChange={handleText}></textarea>
        <div className='btnDiv'>
          <button className="translateBtn" onClick={handleTranslate} >Translate</button>
          <button className="clearBtn" onClick={handleClear}>Clear</button>
        </div>
        <textarea className="textOut" type="text" placeholder="Translate"></textarea>
      </div>
     
    </div>
  );
}

export default App;
