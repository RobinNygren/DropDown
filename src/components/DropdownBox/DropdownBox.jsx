import dropdown from "./dropdown.json";
import { useState } from 'react'
import "./DropdownBox.css";


const DropdownBox = () => {
    const data = dropdown.data;
    const [selectedPerson, setSelectedPerson] = useState(null);

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
            {selectedPerson && (
                <div className="UserInfo">
                    <p>Byxfärg: {selectedPerson.pant_color}</p>
                    <p>Favoritmat: {selectedPerson.favorite_food}</p>
                    <p>Favoritverktyg: {selectedPerson.favorite_tool}</p>
                    <p>Husdjur: {selectedPerson.pet}</p>
                    <p>Hobby: {selectedPerson.hobby}</p>
                </div>
            )}
        </>
    );
}

export default DropdownBox;
