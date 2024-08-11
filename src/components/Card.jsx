import { FaCodeBranch, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Tags from './Tag';
function Card({ projectData }) {
  const { img, title, description, tags, gitLink, liveLink } = projectData;

  return (
    <div className="card w-64 border-2 border-primary bg-base-100  shadow-xl transition-all  duration-500 hover:-translate-y-5 hover:shadow-primary sm:w-80">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{description}</p>
        <div className="card-actions ">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
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
