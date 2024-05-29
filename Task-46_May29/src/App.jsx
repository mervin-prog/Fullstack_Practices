import React, { useState } from "react";
import InputArea from "./components/InputArea";
import { useColor } from 'react-color-palette';
import "./App.css";
import PickColor from "./components/PickColor";

function App(){

  const [color, setColor] = useColor("hex" , "#000000");
  const [hexValue , setHexValue] = useState(color.hex);
  const [textValue, setTextValue] = useState("");
  const [showColorPicker , setShowColorPicker] = useState(false);

  function handleColorChange(newColor){
    setColor(newColor);
    setHexValue(newColor.hex);
  }

  function handleInputChange(newText){
    setTextValue(newText);
  }

  function toggleColorPicker(){
    setShowColorPicker(!showColorPicker);
  }

  return (
    <div className="App">
      <h1>Write Your Story.</h1>
      <InputArea hexValue={hexValue} textValue={textValue} onInputAreaChange={handleInputChange}/>

      <button onClick={toggleColorPicker}>
      {showColorPicker ? 'Hide Color Picker' : 'Show Color Picker'}
      </button>

      {showColorPicker && <PickColor color={color} onColorChange={handleColorChange}/>}
    </div>
  );
}

export default App;