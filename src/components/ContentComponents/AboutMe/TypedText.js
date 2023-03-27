import useTypedText, { TypingPhases } from "../../../hooks/useTypedText";
import styled from "./TypexText.module.css";

const TypexText = (props) => {
  const { typedText: typedSoftSkill, typingPhase } = useTypedText(
    props.softSkills
  );

  return (
    <div
      className={
        typingPhase === TypingPhases.Deleting
          ? styled.softskill
          : `${styled.softskill} ${styled.blinking}`
      }
      aria-hidden="true"
    >
      {typedSoftSkill}
    </div>
  );
};

export default TypexText;
