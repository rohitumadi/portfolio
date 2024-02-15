import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
function Navbar() {
  const navLink =
    'rounded  px-3 py-2 transition ease-in duration-2000 text-white hover:text-primary text-lg ';
  const activeClass = navLink.replace(
    'text-white',
    'text-primary underline underline-offset-4',
  );
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((show) => !show);
  }

  return (
    <nav className="sticky top-0">
      <div className="bg-background container  mx-auto flex  justify-end   sm:items-center sm:bg-transparent sm:px-4 sm:py-2 sm:backdrop-blur-md">
        <NavLink
          className="ml-5 mr-auto mt-2 text-lg  text-white sm:m-0 sm:text-xl"
          to="homepage"
        >
          Portfolio
        </NavLink>
        <ul
          className={`bg-background absolute m-auto h-80 transition-all duration-300  ease-in sm:h-fit sm:bg-transparent ${isOpen ? 'top-10 ' : ' top-[-500px]'} flex w-full  flex-col items-center gap-5  sm:static sm:m-0 sm:mt-0 sm:w-full sm:flex-row sm:justify-center  sm:px-2  `}
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
        {isOpen ? (
          <IoIosClose
            color="#fff"
            onClick={toggleMenu}
            size={40}
            className="mr-5 mt-2 cursor-pointer sm:m-0 sm:hidden "
          />
        ) : (
          <IoIosMenu
            fill="#fff"
            size={40}
            onClick={toggleMenu}
            className="mr-5 mt-2 cursor-pointer sm:m-0 sm:hidden"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
