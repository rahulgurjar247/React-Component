import { useState } from "react"

function Car() {
    const [cars, setcars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    
    function handlecar(e) {
        e.preventDefault();

        const newCar = {
            year: carYear,
            make: carMake,
            model : carModel,
        }

        setcars(c => [...c, newCar]);
        setYear(new Date().getFullYear());
        setCarMake("")
        setCarModel("")
    }

    function handleyear(event) {
        setYear(event.target.value);
    }

    function handlemake(event) {
        setCarMake(event.target.value);
    }

    function handlemodel(event) {
        setCarModel(event.target.value);
    }

    function removecar(index) {
        setcars(c => c.filter((_, i) => i !== index));      
    }

    return (
        <>
            <div className="listofcar">List of Car Objects</div>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={()=>removecar(index)}>
                        {car.year} { car.make} {car.model }
                     </li>
                )}
            </ul>

            <form style={{display:"flex" , flexWrap:"wrap"}} className="form">
                <input type="text" onChange={handleyear} placeholder="Enter year"/>
                <input type="text" onChange={handlemake} placeholder="Enter car make" />
                <input type="text" onChange={handlemodel} placeholder="Enter Car model"/>
                <button onClick={handlecar}>Add Car</button>
            </form>
        </>
    )
}

export default Car