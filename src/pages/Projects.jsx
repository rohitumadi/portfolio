import Card from '../components/Card';
import Heading from '../components/Heading';
import { projects } from '../data/constants';
function Projects() {
  return (
    <>
      <Heading title="Projects" />

      <div className="mt-8 grid w-full grid-cols-1 justify-items-center  gap-y-7 md:grid-cols-2    lg:grid-cols-3 lg:gap-x-10 ">
        {projects.map((project) => (
          <Card projectData={project} key={project.id} />
        ))}
      </div>
    </>
  );
}

export default Projects;
