import React, { useState, useMemo, useEffect } from "react";
import * as Styles from "./QuizTypeStyles.js";
import Quiz5 from "../javascrip/code/index.js";
import Quiz6 from "../javascrip/notion/index.js";
import { Questions } from "../javascrip/code/array/index.js";
import Quiz8 from "../javascrip/Q&A/index.js";

const getQuizComponent = (quizType, filteredQuestions) => {
  try {
    switch (quizType) {
      case "multiple-choice":
        return <Quiz6 questions={filteredQuestions} />;
      case "fill-in-the-blank":
        return <Quiz5 questions={filteredQuestions} />;
      case "Focused Q&A":
        return <Quiz8 questions={filteredQuestions} />;
      default:
        return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const QuizTypePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuizType, setSelectedQuizType] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const openModal = (quizType, filteredQuestions) => {
    setSelectedQuizType(quizType);
    setFilteredQuestions(filteredQuestions);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedQuizType(null);
    setFilteredQuestions([]);
  };

  const QuizComponent = useMemo(
    () =>
      selectedQuizType && getQuizComponent(selectedQuizType, filteredQuestions),
    [selectedQuizType, filteredQuestions]
  );

  // useEffect를 사용하여 컴포넌트가 마운트될 때 이벤트 리스너를 추가하고,
  // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // 의존성 배열이 비어 있으므로, 이 useEffect 훅은 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  return (
    <Styles.QuizTypeContainer>
      <Styles.QuizTypeHeader>퀴즈 타입 선택</Styles.QuizTypeHeader>
      <Styles.QuizSubTypesContainer>
        <Styles.QuizTypeItem>
          <Styles.QuizTypeButton
            onClick={() => openModal("multiple-choice", Questions)}
          >
            Multiple Choice
          </Styles.QuizTypeButton>
        </Styles.QuizTypeItem>
        <Styles.QuizTypeItem>
          <Styles.QuizTypeButton
            onClick={() => openModal("fill-in-the-blank", Questions)}
          >
            Fill in the Blank
          </Styles.QuizTypeButton>
        </Styles.QuizTypeItem>
        <Styles.QuizTypeItem>
          <Styles.QuizTypeButton
            onClick={() => openModal("Focused Q&A", Questions)}
          >
            Focused Q&A
          </Styles.QuizTypeButton>
        </Styles.QuizTypeItem>
      </Styles.QuizSubTypesContainer>
      {isModalOpen && (
        <>
          <Styles.Overlay onClick={closeModal} />

          <Styles.QuizModal>{QuizComponent}</Styles.QuizModal>
        </>
      )}
    </Styles.QuizTypeContainer>
  );
};

export default QuizTypePage;
