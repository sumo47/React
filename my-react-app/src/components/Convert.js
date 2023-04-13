import React, { useState } from 'react'

export default function Convert() {


    function UPPER() {
        let newText = text.toUpperCase()
        setText(newText)
    }
    function lower() {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const [text, setText] = useState('')

    return (

        <div className='container'>
            <h1>Enter some text to convert</h1>
            {/* Input gets error in console while writing text in input , why? */}
            {/* <input type="text" name="" id="" placeholder='Enter text' value={text} onChange={(event) => setText(event.target.value)} /> */}
            <div  >
                <textarea id='my-box' className='form-control' rows="8" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text here....'></textarea>
            </div>
            <br />
            <button className='btn btn-primary' onClick={UPPER}>UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={lower}>lowercase</button>
            <h1>Your Text summary</h1>
            <p className='bg-body-tertiary'>{text.split(" ").length} words and {text.length} characters</p>
            <div className="container bg-light">
                <p>{0.008*text.split(" ").length}minutes to read</p>
            </div>
            <h2>Preview</h2>
            <div className="container" style={{color:"#f00707", background:"#d7f7f3"}}>
                <p>{text}</p>
            </div>
        </div>
    )
}
