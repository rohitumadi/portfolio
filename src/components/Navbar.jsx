import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function Navbar() {
  const navLink =
    'rounded  px-3 py-2 transition ease-in duration-2000 text-white hover:text-primary text-lg ';
  const activeClass = navLink.replace(
    'text-white',
    'text-primary underline underline-offset-4',
  );
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((show) => !show);
    setIsChecked((check) => !check);
  }
  function handleCloseMenu() {
    setIsOpen(false);
    setIsChecked((check) => !check);
  }
  return (
    <nav className=" sticky  top-0 z-10">
      <div className="bg-background container   mx-auto flex  justify-end   sm:items-center sm:bg-transparent sm:px-4 sm:py-2 sm:backdrop-blur-md">
        <NavLink
          className="font-signature ml-5 mr-auto mt-2 text-3xl  text-white sm:m-0 sm:text-4xl"
          to="homepage"
        >
          Rohit
        </NavLink>
        <ul
          onClick={handleCloseMenu}
          className={`bg-background absolute m-auto  h-fit pb-6  transition-all duration-300 ease-in  sm:h-fit sm:bg-transparent sm:pb-0 ${isOpen ? 'top-10 ' : ' top-[-500px]'}  flex  w-full flex-col items-center  gap-5 sm:static sm:m-0 sm:mt-0 sm:w-full sm:flex-row  sm:justify-center  sm:px-2`}
        >
          <NavLink
            className={({ isActive }) => (isActive ? activeClass : navLink)}
            to="homepage"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeClass : navLink)}
            to="skills"
          >
            Skills
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? activeClass : navLink)}
            to="projects"
          >
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? activeClass : navLink)}
            to="contact"
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? activeClass : navLink)}
            to="experience"
          >
            Experience
          </NavLink>
          <NavLink
            to="https://github.com/rohitumadi"
            className="block text-lg sm:ml-auto sm:hidden  sm:text-xl"
            target="_blank"
          >
            <FaGithub size={40} className="text-white " />
          </NavLink>
        </ul>
        <NavLink
          to="https://github.com/rohitumadi"
          className="hidden text-lg sm:ml-auto sm:block  sm:text-xl"
          target="_blank"
        >
          <FaGithub size={40} className="text-white " />
        </NavLink>
        <label className="btn btn-circle swap swap-rotate sm:hidden ">
          <input type="checkbox" checked={isChecked} onChange={toggleMenu} />
          {!isChecked ? (
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          ) : (
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          )}
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
