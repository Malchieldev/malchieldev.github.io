import { useState, useEffect } from "react";

import styled from "./Header.module.css";

const Header = (props) => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);
  const [headerIsShown, setHeaderisShown] = useState(false);
  useEffect(() => {
    setHeaderisShown(true);
  }, []);

  const headerClassName = !headerIsShown
    ? styled.header
    : `${styled.header} ${styled.shown}`;

  const mobileButtonHandler = () => {
    setMobileMenuIsShown((prev) => !prev);
  };

  return (
    <header className={headerClassName}>
      <nav>
        <button className={styled.mobile__activeSection}>
          {props.activeSection}
        </button>
        <button className={styled.mobile__button} onClick={mobileButtonHandler}>
          {'///'}
        </button>
        <div className={mobileMenuIsShown ? styled.menu__shown : ""}>
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
            <a
              href="CV/Fullstack developer Zolotuhin Kirill CV.pdf"
              target="_blank"
            >
              CV
            </a>

        </div>
      </nav>
    </header>
  );
};

export default Header;
