import ContentDescription from "../../UI/ContentDescription";

const Languages = (props) => {
  return (
    <div>
      <ContentDescription
        header={props.data.header}
        data={props.data.languagesData}
      />
    </div>
  );
};

export default Languages;
