import { useState } from 'react';
import Heading from '../components/Heading';
import SkillItem from '../components/SkillItem';
import Slider from '../components/Slider';
import { skills } from '../data/constants';
function Skills() {
  const [level, setLevel] = useState('3');
  return (
    <>
      <div className="m-4 flex flex-col gap-6">
        <Heading title="Skills" />
        <Slider level={level} setLevel={setLevel} />
        <div className="grid  grid-cols-1 justify-items-center   ">
          <div className="m-4 flex flex-wrap justify-around gap-5">
            {skills.map(
              (skill) =>
                (level === '3' || skill.level === level) && (
                  <SkillItem
                    width={100}
                    key={skill.skillName}
                    path={skill.path}
                    skillName={skill.skillName}
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
