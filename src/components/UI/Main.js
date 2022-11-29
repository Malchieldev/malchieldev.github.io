import styled from "./Main.module.css";

const Main = (props) => {
  return <main className={styled.main}>{props.children}</main>;
};

export default Main;
