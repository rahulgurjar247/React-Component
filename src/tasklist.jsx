import { useState } from "react"

function Task() {
    const [list, setlist] = useState(["rahul gurjar", " aacha to work", "what next"]);

    function additem() {
        const val = document.querySelector("#inp").value;
        if (val.length < 10) {
            alert("valid task please");
            return;
        }
        setlist(l => [...l, val]);
        document.querySelector("#inp").value = ""
    }
    function removeitem(index) {
        setlist(list.filter((_, i) => index != i));
    }
    return (

        <div className="tasklist">
            <h1 className="taskHeader">Your Task List</h1>
            <div className="inpbox">
                <input type="text" id="inp" />
                <button onClick={additem}>Add</button>
            </div>

            <ul>
                {list.map((item, index) =>
                    <li key={index}>
                        {item}
                        <div>
                            <button id={index} onClick={() => removeitem(index)}>
                                Delete
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Task