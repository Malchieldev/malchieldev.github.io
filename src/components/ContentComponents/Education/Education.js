import ContentDescription from "../../UI/ContentDescription";

const Education = (props) => {
  return (
    <ul>
      {props.data.map((el) => (
        <ContentDescription
          key={el.id}
          header={`${el.university}, ${el.dates}`}
          data={el.descriptionData}
          url={el.url}
        />
      ))}
    </ul>
  );
};

export default Education;
