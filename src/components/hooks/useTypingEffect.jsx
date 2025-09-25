import { useState, useEffect } from 'react';

export function useTypingEffect(steps, speed = 50) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentStepIndex >= steps.length) {
      setIsTyping(false);
      return;
    }

    const currentStep = steps[currentStepIndex];
    const targetText = currentStep.text;

    if (currentText.length < targetText.length) {
      const timer = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentStepIndex(prev => prev + 1);
        setCurrentText('');
      }, currentStep.delay || 1000);
      return () => clearTimeout(timer);
    }
  }, [currentText, currentStepIndex, steps, speed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return {
    currentStepIndex,
    currentText,
    isTyping,
    showCursor,
    completedSteps: steps.slice(0, currentStepIndex),
  };
}

// Add default export for easier importing
export default useTypingEffect;
