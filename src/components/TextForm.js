import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const OnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container mt-4" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>{props.heading}</h3>
                <div className="mt-4 mb-3">
                    <textarea className="form-control" style={{color:props.mode==='dark'?'white':'black',
                backgroundColor:props.mode==='dark'?'black':'white'}} value={text} onChange={OnChange} id="MyTextBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>


            <div className="container mt-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
            </div>

            <div className="container mt-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
