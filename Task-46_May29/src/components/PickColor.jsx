import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

function PickColor(props) {
  return (
    <div className="color-picker">
        <ColorPicker color={props.color} onChange={props.onColorChange} hideInput={["hsv"]}/>
    </div>
  );
}

export default PickColor;