import { useState, useEffect } from "react";

import styled from "./Header.module.css";

const Header = (props) => {
  const [headerIsShown, setHeaderisShown] = useState(false);
  useEffect(() => {
    setHeaderisShown(true);
  }, []);

  const headerClassName = !headerIsShown
    ? styled.header
    : `${styled.header} ${styled.shown}`;

  return (
    <header className={headerClassName}>
      <ul>
        {props.titles.map((el, i) => {
          return (
            <button
              className={
                props.activeSection === el.title ? styled.activeSection : ""
              }
              onClick={() => {
                props.scrollToSection(i);
              }}
              key={el.id}
            >
              {el.title}
            </button>
          );
        })}
        <button>
          <a
            href="CV/Software Engineer Zolotuhin Kirill CV.pdf"
            target="_blank"
          >
            CV
          </a>
        </button>
      </ul>
    </header>
  );
};

export default Header;
