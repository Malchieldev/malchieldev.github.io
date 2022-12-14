import Contact from "./Contact";

import styled from "./Contacts.module.css";

const Contacts = (props) => {
  return (
    <div className={styled.contactsList}>
      {props.data.map((el) => (
        <Contact key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Contacts;
