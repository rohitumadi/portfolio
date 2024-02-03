import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';
function Navbar() {
  const navLink =
    'rounded  px-3 py-2 text-gray-300 hover:text-cyan-400 sm:text-xl text-lg';
  const activeClass = navLink.replace('text-gray-300', 'text-cyan-400');
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((show) => !show);
  }

  return (
    <nav className=" m-5 flex justify-end">
      {
        <div
          className={`absolute left-0 flex min-h-[100vh] w-full justify-center border-b bg-gray-900 bg-opacity-80 sm:pb-2 ${isOpen ? '' : 'top-[-100%]'}   md:static md:min-h-fit md:bg-transparent`}
        >
          <ul className="flex flex-col gap-10  md:mt-0 md:flex-row md:justify-between">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeClass : navLink)}
                to="homepage"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeClass : navLink)}
                to="projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeClass : navLink)}
                to="contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeClass : navLink)}
                to="education"
              >
                Education
              </NavLink>
            </li>
          </ul>
        </div>
      }

      {isOpen ? (
        <IoIosClose
          color="#fff"
          onClick={toggleMenu}
          size={50}
          className="absolute top-7 cursor-pointer sm:hidden "
        />
      ) : (
        <IoIosMenu
          fill="#fff"
          size={40}
          onClick={toggleMenu}
          className="cursor-pointer sm:hidden"
        />
      )}
    </nav>
  );
}

export default Navbar;
