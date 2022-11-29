import useTypedText, { TypingPhases } from "../../../hooks/useTypedText";
import ContentDescription from "../../UI/ContentDescription";

import styled from "./AboutMe.module.css";

const AboutMe = (props) => {
  const { typedText: typedSoftSkill, typingPhase } = useTypedText(
    props.data.aboutMeData.softSkills
  );

  return (
    <div className={styled.aboutMe}>
      <ContentDescription
        header={props.data.header}
        data={props.data.aboutMeData.briefNote}
      />
      <div
        className={
          typingPhase === TypingPhases.Deleting
            ? styled.softskill
            : `${styled.softskill} ${styled.blinking}`
        }
      >
        {typedSoftSkill}
      </div>
    </div>
  );
};

export default AboutMe;
