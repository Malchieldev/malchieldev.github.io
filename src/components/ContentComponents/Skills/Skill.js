import { useState } from "react";

import styled from "./Skill.module.css";

import ProgressBar from "../../UI/ProgressBar";
import ImageContainer from "../../UI/ImageContainer";

const Skill = (props) => {
  const [showSkill, setShowSkill] = useState(false);
  const handleMouseOver = () => {
    setShowSkill(true);
  };
  const handleMouseOut = () => {
    setShowSkill(false);
  };
  return (
    <div className={styled.skill__block}>
      <ImageContainer
        mouseOverImage={handleMouseOver}
        mouseOutImage={handleMouseOut}
        name={props.name}
        imagePath={props.imagePath}
        imageStyle={{
          maxWidth: "4rem",
          maxHeight: "4rem",
        }}
      />
      {showSkill && (
        <div className={styled.skill__description}>{props.name}</div>
      )}
      <ProgressBar progress={props.progress} />
    </div>
  );
};

export default Skill;
