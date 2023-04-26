import React, { useState } from 'react'

export default function Convert(props) {

    function UPPER() {

        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text has been changed to Uppercase !", "success")
    }
    function lower() {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text has been changed to Lowercase !", "success")

    }
    function clear() {
        setText("")
        props.showAlert("Text has been cleared !", "success")

    }
    // function mix (){
    //     let array = text.split(" ")
    //     let finalArray = []
    //     let arrayElement = array.map(word=>{
    //         let newArray = word.split("")
    //         let upperCaseElement =  newArray[0].toUpperCase()
    //         newArray.splice(0,1,upperCaseElement)
    //         let joined = newArray.join('')
    //         finalArray.push(joined)
    //     })
    //     let mix = finalArray.join(' ')
    //     setText(mix)
    // }

    function CamelCase() {

        if (text.split(" ")[0] === "") {    //! important to Understand
            setText("provide Text first!")
        }
        else {
            let upperCaseElement = text.split(' ')[0].split('')[0].toUpperCase()
            let firstElement = text.split(' ')[0].split('')[0]
            let newText = text.replace(firstElement, upperCaseElement)
            setText(newText)
        }
    }

    // counting words in TextArea
    let NoOfWord = 0
    const CountWords = (text)=>{
        let count = text.split(' ')
        for(let e of count){
            if(e.split(' ') !=  "" && e.split("").length > 1){
                NoOfWord++
            }
        }
        return NoOfWord
    }
 
    // counting charactera in TextArea
    let NoOfChar = 0
    const CountChar = (text) =>{
        let array = text.split('')
        for(let char of array){
            if(char !== " "){
                NoOfChar++
            }
        }
        return NoOfChar
    }

    const [text, setText] = useState('')

    return (

        <div className={`container`} style={{ color: props.text }}>
            <h1 >Enter some text to convert</h1>
            {/* Input gets error in console while writing text in input , why? */}
            {/* <input type="text" name="" id="" placeholder='Enter text' value={text} onChange={(event) => setText(event.target.value)} /> */}
            <div  >
                <textarea id='my-box' className={`form-control bg-${props.textArea} text-${props.text}`} rows="8" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text here....'></textarea>
            </div>
            <br />

            <button className='btn btn-primary' onClick={UPPER}>UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={lower}>lowercase</button>
            <button className='btn btn-outline-danger' onClick={clear}> clear </button>
            <button className='btn btn-outline-secondary mx-3' onClick={CamelCase}>Camelcase </button>

            <h1 className='mt-5'>Your Text summary</h1>
            <div className="container">
                <p className={`bg-${props.textArea} text-${props.text}`}>
                    {CountWords(text)} words and {CountChar(text)} characters
                </p>
                <div className={`container bg-${props.textArea} text-${props.text}`}>
                    <p>{0.008 * text.split(" ").length} minutes to read</p>
                </div>
            </div>
            <h2>Preview</h2>
            <div className={`container`} style={{ color: text.length > 0 ? "#a3f06c" : "#f01411" }}>
                <p>{text.length > 0 ? text : "Enter Your text to preview !"}</p>
            </div>
        </div>
    )
}
