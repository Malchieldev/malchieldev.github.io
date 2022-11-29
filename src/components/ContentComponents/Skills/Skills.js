import styled from "./Skills.module.css";

import Skill from "./Skill";

const Skills = (props) => {
  return (
    <div className={styled.skills}>
      {props.data.map((el) => (
        <Skill key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Skills;
