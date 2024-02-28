import dropdown from "./dropdown.json";
import { useState } from 'react'
import "./DropdownBox.css";
import InfoBox from "../InfoBox/InfoBox";


const DropdownBox = () => {
    const data = dropdown.data;
    const [selectedPerson, setSelectedPerson] = useState([]);

    const handleSelect = (event) => {

        const personIndex = event.target.value;
        const selected = data[personIndex];
        setSelectedPerson(selected);
        console.log(selected)
    };

    return (
        <>
            <h2 className="info">Information</h2>
            <select className="DropdownBox" onChange={handleSelect}>
                <option>Välj en person</option>
                {data.map((person, index) => (
                    <option key={index} value={index}>
                        {person.firstname} {person.lastname}
                    </option>
                ))}
            </select>
            {selectedPerson && <InfoBox person = {selectedPerson}/>}
        </>
    );
}

export default DropdownBox;
