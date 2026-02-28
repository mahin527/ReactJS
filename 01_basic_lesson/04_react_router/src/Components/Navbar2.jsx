
import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
function Navbar2() {
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "white" : "black",
        backgroundColor: isActive ? "black" : "transparent",
        padding: "5px 10px",
        borderRadius: "5px",
        textDecoration: "none",
        marginRight: "10px"
    })

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = () => {
        setIsLoggedIn(true)
        navigate('/user')
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
        navigate('/')

    }
    return (
        <>
            <nav style={{ backgroundColor: 'gray', padding: '10px 20px' }}>
                <NavLink to="/" end style={navLinkStyle}> Home </NavLink>
                <NavLink to="/about" style={navLinkStyle}> About </NavLink>
                <NavLink to="/contact" style={navLinkStyle}> Contact us </NavLink>

                {isLoggedIn && (
                    <>
                        <NavLink to="/user" style={navLinkStyle}> User </NavLink>
                        <NavLink to="/user" style={navLinkStyle} onClick={handleLogout}> Logout </NavLink>
                    </>

                )}
                {!isLoggedIn && (
                    <NavLink to="/user" style={navLinkStyle} onClick={handleLogin}> Login </NavLink>
                )}
            </nav>
        </>
    )
}

export default Navbar2