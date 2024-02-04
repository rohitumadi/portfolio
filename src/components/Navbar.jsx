import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';
function Navbar() {
  const navLink =
    'rounded  px-3 py-2 transition ease-in duration-2000 text-black hover:text-white sm:text-xl text-lg';
  const activeClass = navLink.replace(
    'text-black',
    'text-white underline underline-offset-4',
  );
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((show) => !show);
  }

  return (
    <nav className="m-5 flex justify-end ">
      <div
        className={`absolute right-16  flex min-h-[60vh] w-60 flex-col items-center gap-10 rounded-md border-2 border-white  bg-[#FF004D] shadow-xl sm:w-full  md:border-2 md:p-2  ${isOpen ? '' : 'top-[-100%]'}   md:static md:min-h-fit md:bg-transparent`}
      >
        <ul className="mt-5 flex flex-col items-center sm:mt-0 sm:w-full sm:flex-row sm:justify-between  sm:px-2  ">
          <NavLink className="text-lg sm:text-xl" to="homepage">
            LOGO
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? activeClass : navLink)}
            to="homepage"
          >
            Home
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
            to="education"
          >
            Education
          </NavLink>

          <NavLink className="text-lg sm:text-xl" to="education">
            Github
          </NavLink>
        </ul>
      </div>

      {isOpen ? (
        <IoIosClose
          color="#000"
          onClick={toggleMenu}
          size={50}
          className="absolute top-8 cursor-pointer sm:hidden "
        />
      ) : (
        <IoIosMenu
          fill="#000"
          size={40}
          onClick={toggleMenu}
          className="cursor-pointer sm:hidden"
        />
      )}
    </nav>
  );
}

export default Navbar;
