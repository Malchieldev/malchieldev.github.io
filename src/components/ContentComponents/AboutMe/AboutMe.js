import ContentDescription from "../../UI/ContentDescription";

import TypexText from "./TypedText";

const AboutMe = (props) => {
  return (
    <div>
      <ContentDescription
        header={props.data.header}
        data={props.data.aboutMeData.briefNote}
      />
      <TypexText softSkills={props.data.aboutMeData.softSkills} />
    </div>
  );
};

export default AboutMe;
