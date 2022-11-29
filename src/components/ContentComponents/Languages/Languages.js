import ContentDescription from "../../UI/ContentDescription";

import styled from "./Languages.module.css";

const Languages = (props) => {
  return (
    <div className={styled.languages}>
      <ContentDescription
        header={props.data.header}
        data={props.data.languagesData}
      />
    </div>
  );
};

export default Languages;
