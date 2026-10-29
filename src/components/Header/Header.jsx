import { NavLink } from "react-router";
import './Header.css'


const Header = () => {
    return (
        <div>
            <h1 className="mb-5">This is Header</h1>
            <nav>
               <NavLink
                to='/'>Home</NavLink>
               <NavLink to='/mobile'>Mobile</NavLink>
               <NavLink to='/laptops'>Laptops</NavLink>
               <NavLink to='/users'>Users</NavLink>
               <NavLink to='/users2'>Users2</NavLink>
               <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;