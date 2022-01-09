const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Open Bootcamp <span>| Alumnos</span></h1>
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

export default Navbar;