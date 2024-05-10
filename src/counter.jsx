import { useState } from "react";

function Btn(prop) {    
    return (
        <>
            <button className="btn" onClick={prop.onclick}>{prop.text}</button>
        </>
    )
}

function Counter() {
    const [count, setcount] = useState(0);
    
    const increment = () => {
        setcount(count+1)
    }

    const decrement = () => {
        setcount(count-1)
    }
    const reset = () => {
        setcount(0)
    }

    return (
        <>
            <div className="counter">{count}</div>
            <Btn text="increment" onclick={increment} />
            <Btn text="reset" onclick={reset} />
            <Btn text="decrement" onclick={decrement} />

        </>
    ) 
}
export default Counter