import { useState } from "react"

function Colorpicker() {
    
    const [color, setcolor] = useState("#123441")
    
    function updateColor(e) {
        setcolor(e.target.value)
    }
    const colorbox = {
        width: "300px",
        height: "200px",        
        background: `${color}`,
        border: "1px solid black",
        display: "flex",
        alignItem : "center",
        justifyItem: "center",
        margin: "auto",
        
    }
    return (
        <>
            <p className="selectcolor">select color</p>
            <div className="Colorbox" style={colorbox}>
                <p>Color:{color}</p>
            </div>        


            <div className="choosecolor">               
            <input type="color"  onChange={updateColor} />
        </div>
        </>
    )
}
export default Colorpicker