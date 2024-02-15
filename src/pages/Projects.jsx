import Card from '../components/Card';
import { projects } from '../data/constants';
function Projects() {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold text-white">
        Projects
      </h1>

      <div className="mt-8 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card projectData={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
