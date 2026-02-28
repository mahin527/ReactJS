// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
function Navbar() {
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "white" : "black",
        backgroundColor: isActive ? "black" : "transparent",
        padding: "5px 10px",
        borderRadius: "5px",
        textDecoration: "none",
        // marginRight: "10px"
    })
    return (
        <>
            <nav style={{ backgroundColor: 'gray', padding: '10px 20px' }}>
                <NavLink to="/" end style={navLinkStyle}> Home </NavLink>
                <NavLink to="/about" style={navLinkStyle}> About </NavLink>
                <NavLink to="/contact" style={navLinkStyle}> Contact us </NavLink>
                <NavLink to="/user" style={navLinkStyle}> User </NavLink>
            </nav>
        </>
    )
}

export default Navbar