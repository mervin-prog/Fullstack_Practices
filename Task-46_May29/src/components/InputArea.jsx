import React from "react";

function InputArea(props){

   return (
    <div className="input-area">
        <textarea 
        value={props.textValue} 
        rows={10} 
        cols={80} 
        placeholder="Tell us your story..." 
        className="input-text"
        onChange={(event) => props.onInputAreaChange(event.target.value)}
        style={{color : props.hexValue}}
        />
    </div>
   );
}

export default InputArea;