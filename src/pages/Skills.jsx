import Heading from '../components/Heading';
import SkillItem from '../components/SkillItem';
import { skills } from '../data/constants';
function Skills() {
  return (
    <>
      <Heading title="Skills" />
      <div className="grid  grid-cols-1 justify-items-center  ">
        <div className="m-4 flex flex-wrap justify-around gap-4">
          {skills.map((skill) => (
            <SkillItem
              width={100}
              key={skill.skillName}
              path={skill.path}
              skillName={skill.skillName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
