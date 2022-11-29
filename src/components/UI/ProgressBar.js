import styled from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={styled.progressBar}>
      <div className={styled.progressBar__progress} style={{ width: props.progress }}></div>
    </div>
  );
};

export default ProgressBar;
