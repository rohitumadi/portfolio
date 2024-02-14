import { FaCodeBranch, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-white">
        Projects
      </h1>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="hover:shadow-primary border-primary rounded-xl border shadow-lg transition-all duration-500  hover:-translate-y-5">
          <div className="flex flex-col  p-5 text-white">
            <div className="overflow-hidden rounded-xl ">
              <img src="/p1.png" alt="" />
            </div>
            <h5 className="mt-3 text-xl font-medium  md:text-2xl">
              usePopcorn
              <span className="ring-primary inline-flex items-center rounded-md bg-transparent px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ">
                React JS
              </span>
            </h5>
            <p className="mt-3 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              temporibus est qui dolore debitis dolorem amet quas expedita animi
              inventore.
            </p>
            <div className="mt-2 flex justify-center gap-4">
              <Link
                target="_blank"
                className="hover:text-primary"
                to={'https://rohitumadi.github.io/usePopcorn/'}
              >
                <FaPlay />
              </Link>
              <Link
                target="_blank"
                className="hover:text-primary"
                to={'https://github.com/rohitumadi/usePopcorn'}
              >
                <FaCodeBranch />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
