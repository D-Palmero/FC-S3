import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NavbarBtn = () => {
    return (
        <div className="navbar">
           <h3 className="backBtn"> <FontAwesomeIcon icon={faArrowLeft} /> Volver</h3>
            <div className="profile">
                <div className="profile-img">
                    NA
                </div>
                <select className="navbarSelect"name="user" id="userSelect" value="UserName">
                <option >UserName</option>
                </select>
            </div>
    </div>
    )
}

export default NavbarBtn;