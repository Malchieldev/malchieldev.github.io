import React, { Suspense, useMemo } from "react";

import LoadingSpinner from "./LoadingSpinner";
import ImageContainer from "./ImageContainer";
import ContentWrapper from "./ContentWrapper";

import styled from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  const { componentName } = props;

  const Component = useMemo(
    () =>
      React.lazy(() =>
        import(`../ContentComponents/${componentName}/${componentName}`)
      ),
    [componentName]
  ); //dynamic import

  const isAboutMe = props.title === "About Me";

  return (
    <section
      className={`${styled.contentBlock} ${
        props.activeSection === props.title ? styled.shown : styled.hidden
      }`}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ImageContainer
          imagePath={props.imagePath}
          imageStyle={{
            maxWidth: "10rem",
            maxHeight: "10rem",
            borderRadius: isAboutMe ? "50%" : "initial",
          }}
        />
        <ContentWrapper
          ref={props.labelRef}
          title={props.title}
          setActiveSection={props.setActiveSection}
        >
          <Component {...props} />
        </ContentWrapper>
      </Suspense>
    </section>
  );
};

export default ContentBlock;
