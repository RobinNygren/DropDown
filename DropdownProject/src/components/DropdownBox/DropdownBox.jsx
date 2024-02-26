import Dropdown from "./Dropdown/Dropdown";
import dropdown from "./dropdown.json";
import "./DropdownBox.css";

const DropdownBox = () => {
    const data = dropdown.data
    return (
        <>
        <h2 className="info">Information</h2>
        <select className="DropdownBox">
        {data.map((info)=>{
            return (
                <Dropdown firstname={info.firstname} lastname={info.lastname}/>
                )
        })}
        </select>
        </>
    );
}

export default DropdownBox;