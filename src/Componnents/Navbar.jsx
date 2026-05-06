import { NavLink } from "react-router-dom"
export const Navbar =()=>{
    return(
        <nav className="bg-[#0D1B3D] p-4 text-white font-[ABeeZee] border-1 border-amber-400">
            <ul className="flex justify-around ml-30">
                <li><NavLink to="/" className={({isActive}) => isActive ? " border-amber-300 bg-amber-300 rounded-4xl p-2.5" : "hover:text-yellow-400" } >Home</NavLink></li>
                <li><NavLink to="/programme"className={({isActive}) => isActive ? " border-amber-300 bg-amber-300 rounded-4xl p-2.5" : "hover:text-yellow-400" } >Programme</NavLink></li>
                <li><NavLink to="/planning" className={({isActive}) => isActive ? " border-amber-300 bg-amber-300 rounded-4xl p-2.5" : "hover:text-yellow-400" }  >Planning</NavLink></li>
                <li><NavLink to="/artistdetails" className={({isActive}) => isActive ? " border-amber-300 bg-amber-300 rounded-4xl p-2.5" : "hover:text-yellow-400" }  >Artistdetails</NavLink></li>
                <li><NavLink to="/passport"className={({isActive}) => isActive ? " border-amber-300 bg-amber-300 rounded-4xl p-2.5" : "hover:text-yellow-400" }  >Passport</NavLink></li>
            </ul>
        </nav>
    );
     
}