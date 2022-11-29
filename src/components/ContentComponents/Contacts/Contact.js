import { useState } from "react";

import ImageContainer from "../../UI/ImageContainer";

import styled from "./Contact.module.css";

const Contacts = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const handleMouseOver = () => {
    setShowDescription(true);
  };
  const handleMouseOut = () => {
    setShowDescription(false);
  };
  return (
    <div className={styled.contact}>
      <a
        key={props.id}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageContainer
          name={props.name}
          imagePath={props.imagePath}
          mouseOverImage={handleMouseOver}
          mouseOutImage={handleMouseOut}
          imageStyle={{
            maxWidth: "3rem",
            maxHeight: "3rem",
          }}
        />
      </a>
      {showDescription && (
        <div className={styled.contact__description}>{props.name}</div>
      )}
    </div>
  );
};

export default Contacts;
