import React, { Suspense } from "react";

import LoadingSpinner from "./LoadingSpinner";
import ImageContainer from "./ImageContainer";
import ContentWrapper from "./ContentWrapper";

import styled from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  const Component = React.lazy(() =>
    import(`../ContentComponents/${props.componentName}/${props.componentName}`)
  ); //dynamic import

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
