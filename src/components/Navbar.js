import reactLogo from "../images/logo192.png";

function Navbar() {
    return (
        <nav className="Navbar">
            <img src={reactLogo} alt="react-logo" className="nav--icon"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}

export default Navbar;
