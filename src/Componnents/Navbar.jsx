import { NavLink } from "react-router-dom"
export const Navbar =()=>{
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/programme">Programme</NavLink></li>
                <li><NavLink to="/planning">Planning</NavLink></li>
                <li><NavLink to="/artistdetails">Artistdetails</NavLink></li>
                <li><NavLink to="/passport">Passport</NavLink></li>
            </ul>
        </nav>
    );
     
}