import ContentDescription from "../../UI/ContentDescription";

const Projects = (props) => {
  return (
    <div>
      <ContentDescription
        header={props.name}
        data={props.data}
      />
    </div>
  );
};

export default Projects;
