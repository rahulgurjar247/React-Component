import React,{usestat, useState} from "react"
function Component() {
    
    const [name, setname] = useState("guest");
    const [quantity, setquantity] = useState();

    function update(e) {
        setname(e.target.value)
        setquantity(e.target.value.length)
    }

    return (
        <>
            <input type="text" onChange={update} /> <br />
            <div>name:{name}</div> 
            <div>length:{quantity}</div> <br />
            
            
        </>
    )
}
export default Component