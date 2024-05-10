import { useState } from "react"

function Task() {
    const [list, setlist] = useState(["hello",
        "rahul", "kese",]);
    
    function additem() {
        const val = document.querySelector("#inp").value;
        if (val.length < 10) {
            alert("valid task please");
            return;
        }
        setlist(l => [...l, val]);
        document.querySelector("#inp").value = ""
    }
    function removeitem(e) {
        setlist(list.filter((_, i) => e.target.id != i));       
    }
    return (

        <div className="tasklist">
            <div>
                <input type="text" id="inp"/>
                <button onClick={additem}>Add</button>
            </div>

            <ul>
                {list.map((item, index) =>
                    <li key={index}>
                        {item}
                        <button id={index} onClick={removeitem}>
                        X
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Task