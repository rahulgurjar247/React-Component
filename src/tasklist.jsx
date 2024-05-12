import { useState } from "react"

function Task() {
    const [list, setlist] = useState([]);
    
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
            <div className="taskHeader">Your Task List</div>
            <div>
                <input type="text" id="inp"/>
                <button onClick={additem}>Add</button>
            </div>

            <ul>
                {list.map((item, index) =>
                    <li key={index}>
                        {item}
                        <button id={index} onClick={() => removeitem(index)}>
                        X
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Task