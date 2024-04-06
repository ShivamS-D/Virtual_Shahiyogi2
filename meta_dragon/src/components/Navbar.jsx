import { NavLink } from "react-router-dom";
import { embrace } from "../assets/images";


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={embrace} alt='logo' className='w-24 h-20 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
