import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    //from comments : Enhancing Textutils
    const CopyText = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied", "success");
    }

    //from comments: Enhancing textutils
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/); //
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success");

        // if(there is extra spaces = true){
        //     showAlert("Extra spaces removed", "success");
        // }
        // else{
        //     showAlert("There is no extra spaces", "warning");
        // }    
    }

    const clearText = () =>{
        setText(" ");
        props.showAlert("Text Cleared", "success");
    }
 
    const [text, setText] =  useState(' ');

    // text = "new text"; //this is the wrong way to the change the state
    // setText("This updated text using setText"); // this is the correct way to change the state
    
    return ( 
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <div>
                    <h1> {props.heading} </h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                    </div> 
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Upper Case </button>
                    <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to Lower Case </button>
                    <button className="btn btn-primary mx-2" onClick={CopyText}> Copy Text </button> 
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Clear Extra Spaces </button> 
                    <button className="btn btn-primary mx-2" onClick={clearText}> Clear Text </button>       
                </div>
            </div>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
                <h3> Your Text Summary </h3>
                <p> {text.split(" ").length} words & {text.length} characters </p>
                <h4>Preview Text</h4>
                <p>{text.length >0?text:"Enter text in above textArea to preview it here"}</p>
            </div>         
        </>
    )
}
