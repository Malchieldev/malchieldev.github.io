import { useEffect, useState } from "react";

export const TypingPhases = {
  Typing: "Typing",
  Pause: "Pause",
  Deleting: "Deleting",
};

const TYPING_TIMER = 100;
const PAUSE_TIMER = 2000;
const DELETING_TIMER = 50;

const useTypedText = (texts) => {
  const [typingPhase, setTypingPhase] = useState(TypingPhases.Typing);
  const [typedText, setTypedText] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    switch (typingPhase) {
      case TypingPhases.Typing: {
        const nextTypedText = texts[currentIndex].slice(
          0,
          typedText.length + 1
        );

        if (nextTypedText === typedText) {
          setTypingPhase(TypingPhases.Pause);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedText(nextTypedText);
        }, TYPING_TIMER);

        return () => clearTimeout(timeout);
      }
      case TypingPhases.Deleting: {
        if (!typedText) {
          const nextIndex = currentIndex + 1;
          setCurrentIndex(texts[nextIndex] ? nextIndex : 0);
          setTypingPhase(TypingPhases.Typing);
          return;
        }
        const nextRemaning = texts[currentIndex].slice(0, typedText.length - 1);
        const timeout = setTimeout(() => {
          setTypedText(nextRemaning);
        }, DELETING_TIMER);

        return () => clearTimeout(timeout);
      }
      case TypingPhases.Pause:
      default:
        const timeout = setTimeout(() => {
          setTypingPhase(TypingPhases.Deleting);
        }, PAUSE_TIMER);
        return () => clearTimeout(timeout);
    }
  }, [texts, typedText, typingPhase, currentIndex]);

  return { typedText, typingPhase };
};

export default useTypedText;
