import Contact from "./Contact";

import styled from "./Contacts.module.css";

const Contacts = (props) => {
  return (
    <ul className={styled.contactsList}>
      {props.data.map((el) => (
        <Contact key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default Contacts;
