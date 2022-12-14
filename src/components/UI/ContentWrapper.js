import { forwardRef, useEffect } from "react";

import styled from "./ContentWrapper.module.css";

const ContentWrapper = forwardRef(({ setActiveSection, ...props }, ref) => {
  useEffect(() => {
    const cureRef = ref.current;
    if (!cureRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(cureRef.textContent);
        }
      },
      { threshold: 1 }
    );
    observer.observe(cureRef);
    return () => {
      observer.unobserve(cureRef);
    };
  }, [setActiveSection, ref]);

  return (
    <div className={styled.contentWrapper}>
      <h2 ref={ref} className={styled.contentTitle}>
        {props.title}
      </h2>
      {props.children}
    </div>
  );
});

export default ContentWrapper;
