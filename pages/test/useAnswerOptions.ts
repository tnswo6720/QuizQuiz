// useAnswerOptions.ts
import { useState } from "react";
import type { ChangeEvent } from "react";

export const useAnswerOptions = (
  initialOptions = [
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ]
) => {
  const [answerOptions, setAnswerOptions] = useState(initialOptions);

  const handleAnswerOptionChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const newAnswerOptions = [...answerOptions];
    newAnswerOptions[index].text = e.target.value;
    setAnswerOptions(newAnswerOptions);
  };

  const handleAnswerOptionIsCorrectChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const newAnswerOptions = [...answerOptions];
    newAnswerOptions[index].isCorrect = e.target.checked;
    setAnswerOptions(newAnswerOptions);
  };

  const handleDeleteAnswerOption = (index: number): void => {
    if (answerOptions.length > 2) {
      const newAnswerOptions = [...answerOptions];
      newAnswerOptions.splice(index, 1);
      setAnswerOptions(newAnswerOptions);
    }
  };

  const handleAddAnswerOption = (): void => {
    if (answerOptions.length < 6) {
      setAnswerOptions([...answerOptions, { text: "", isCorrect: false }]);
    }
  };

  return {
    answerOptions,
    handleAnswerOptionChange,
    handleAnswerOptionIsCorrectChange,
    handleDeleteAnswerOption,
    handleAddAnswerOption,
  };
};
