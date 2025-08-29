import React, { useState } from 'react'

export default function TextForm(props) {
const handleUpClick=()=>
  {
     console.log("Uppercase was clicked...."+text);
     let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLowerClick=()=>
  {
     console.log("Lower was clicked...."+text);
     let newText=text.toLowerCase();
    setText(newText)
  }
   const handleClearClick=()=>
  {
     console.log("Clear was clicked...."+text);
     let newText=" ";
    setText(newText)
  }

    const handleCopyClick=()=>
  {
    var text= document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
    const handleSpaceClick=()=>
  {
    let Newtext= text.split(/[ ]+/);
    setText(Newtext.join(" "))
  }
  
const handleOnChange=(event)=>
  {
    console.log("Upper case was clicked.....");
    setText(event.target.value);
  }


  const [text,setText]=useState('Enter Text here !') ;
  // setText="Enter your Text change here"
  return (
           <>
        
          <div className='container'>
            <h2>{props.heading} </h2>
            <div className='mb-3'>
            {/* <label for="MyBox">Please Input text here !</label> */}
            <textarea className="form-control" value={text} id="MyBox" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upper case</button>
            <button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert to Lower case</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy</button>
            <button className='btn btn-primary mx-2' onClick={handleSpaceClick}>Rempve Space</button>

        </div>

        <div className='container my-3'>
        <h2>Your Text Summary here....</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p> {0.008 * text.split(" ").length }minutes to take for View</p>
        <h2>Preview </h2>
         <p>{text}</p>

          </div>
          

        
        </>
  ) 
}

