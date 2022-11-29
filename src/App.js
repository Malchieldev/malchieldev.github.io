import React, { useState, useRef, createRef, useCallback } from "react";

import Main from "./components/UI/Main";
import Header from "./components/ContentComponents/Header/Header";
import ContentBlock from "./components/UI/ContentBlock";

import { CONTENT } from "./Content/Content";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const lineRefs = useRef([]);
  lineRefs.current = CONTENT.map((_, i) => lineRefs.current[i] ?? createRef());

  const scrollToSection = useCallback((id) => {
    lineRefs.current[id].current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const titles = CONTENT.map(
    ({ data, componentName, imagePath, ...rest }) => rest
  );

  return (
    <React.Fragment>
      <Header
        titles={titles}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Main>
        <ul>
          {CONTENT.map((el, i) => {
            return (
              <ContentBlock
                labelRef={lineRefs.current[i]}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                key={el.id}
                {...el}
              />
            );
          })}
        </ul>
      </Main>
    </React.Fragment>
  );
}

export default App;
