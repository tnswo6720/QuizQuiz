import React, { useState } from "react";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import FillInTheBlankQuestion from "./FillInTheBlankQuestion";

function QuizForm() {
  const [quizType, setQuizType] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState({}); // currentQuestion 상태 추가

  const handleQuizTypeChange = (e) => {
    setQuizType(e.target.value);
  };

  const renderQuestionForm = () => {
    switch (quizType) {
      case "multiple-choice":
        return <MultipleChoiceQuestion question={undefined} />;
      case "fill-in-the-blank":
        return <FillInTheBlankQuestion question={undefined} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <label>
        퀴즈 유형:
        <select value={quizType} onChange={handleQuizTypeChange}>
          <option value="">선택하세요</option>
          <option value="multiple-choice">N지 선다형</option>
          <option value="fill-in-the-blank">빈칸 문제</option>
        </select>
      </label>
      {quizType === "multiple-choice" && (
        <MultipleChoiceQuestion question={currentQuestion} />
      )}
      {quizType === "fill-in-the-blank" && (
        <FillInTheBlankQuestion question={currentQuestion} />
      )}
    </div>
  );
}

export default QuizForm;
