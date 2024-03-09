import { useState } from 'react';
import './App.css';


function App() {

  const [text,setText] = useState("")
  const [outText,setOutText] = useState("")
  const [language,setLanguage] = useState("")

  const handleText=(event)=>{
    setText(event.target.value)
    console.log(text)

  }

  const handleSelectChange=(event)=>{
    setLanguage(event.target.value)

  }


  const handleTranslate=()=>{
    fetch("/convert", {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({input_text:text,to_lang:language})
    })
    .then(response=>response.json())
    .then(data=>{setOutText(data.translated_text)})
    .catch(error=>console.log(error))
  }

  const handleClear=()=>{
    setText("");
    setOutText("");
  }


  

  return (
    <div className="home">
      <h1 className="heading">Let's Communicate😉</h1>
      <div className="textDiv">
        <textarea value={text} className="textIn" type='text' placeholder="Enter text" onChange={handleText} spellCheck="false"></textarea>
        <div className='btnDiv'>
          <select id='dropmenu' onChange={handleSelectChange}>
            <option value="es">Spanish</option>
            <option value="ml">Malayalam</option>
            <option value="ta">Tamil</option>
            <option value="ar">Arabic</option>
          </select>
          <button className="translateBtn" onClick={handleTranslate} >Translate</button>
          <button className="clearBtn" onClick={handleClear}>Clear</button>
        </div>
        <textarea value={outText} className="textOut" type="text" placeholder="Translate" spellCheck="false"></textarea>
      </div>
     
    </div>
  );
}

export default App;
