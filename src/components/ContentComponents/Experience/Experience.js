import { Fragment, useState } from "react";

import ContentDescription from "../../UI/ContentDescription";

import styled from "./Experience.module.css";

const Experience = (props) => {
  const [currentExperience, setCurrentExperience] = useState({
    ...props.data[0],
  });
  const dateClickHandler = (element) => {
    const foundExperience = props.data.filter(
      (el) => el.dates === element.target.textContent
    );
    setCurrentExperience({ ...foundExperience[0] });
  };
  return (
    <Fragment>
      <ul className={styled.exerience__dates}>
        {props.data.map((el) => (
          <button
            value={el.dates}
            onClick={dateClickHandler}
            key={el.id}
            className={`${styled.experience__date} ${
              el.dates === currentExperience.dates
                ? styled.exerience__date__active
                : null
            }`}
          >
            {el.dates}
          </button>
        ))}
      </ul>
      <ContentDescription key={currentExperience.jobTitle}
        header={`${currentExperience.jobTitle} at ${currentExperience.company}`}
        data={currentExperience.descriptionData}
      />
    </Fragment>
  );
};

export default Experience;
