import { FaCodeBranch, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Tags from './Tag';
function Card({ projectData }) {
  const { img, title, description, tags, gitLink, liveLink } = projectData;

  return (
    <div className="hover:shadow-primary border-primary w-64  rounded-xl border shadow-lg transition-all duration-500  hover:-translate-y-5">
      <div className="flex h-full flex-col gap-3 p-5 text-white">
        <div className="overflow-hidden rounded-xl ">
          <img src={img} alt="" />
        </div>
        <h5 className="text-lg font-medium  md:text-xl">{title}</h5>
        <div className=" flex gap-2 ">
          {tags.map((tag) => (
            <Tags tag={tag} key={tag} />
          ))}
        </div>
        <p className=" text-sm">{description}</p>
        <div className="mt-auto flex justify-center gap-4 ">
          <Link target="_blank" className="hover:text-primary" to={liveLink}>
            <FaLink />
          </Link>
          <Link target="_blank" className="hover:text-primary" to={gitLink}>
            <FaCodeBranch />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
