import styled from "./ContentDescription.module.css";

const ContentDescription = (props) => {
  const headerData = props.url ? (
    <a
      className={styled.url}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.header}
    </a>
  ) : (
    props.header
  );

  return (
    <div className={styled.description}>
      <h2 className={styled.description__header}>{headerData}</h2>
      <section>
        {props.data.map((el) => (
          <p className={styled.description__element} key={el.id}>
            {el.description}
          </p>
        ))}
      </section>
    </div>
  );
};

export default ContentDescription;
