import React,{useState} from 'react' //* rfc 

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        // console.log("On change" )
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        // console.log("Letter changed - " + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const [text, setText] = useState("Enter the text")

    // text = "new value" // wrong way to change state
    // setText("new value") // wrong way to change state

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert tp UpperCase</button>
        </div>
    )
}
