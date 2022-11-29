import styled from "./ImageContainer.module.css";

const PhotoContainer = (props) => {
  return (
    <img
      alt={props.name}
      src={"../images" + props.imagePath}
      className={styled.image}
      style={{ ...props.imageStyle }}
      onMouseOver={props.mouseOverImage}
      onMouseOut={props.mouseOutImage}
    />
  );
};

export default PhotoContainer;
