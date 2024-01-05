import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Section,
  Button,
  CodeBlock,
  QuizImage,
  SelectBox,
  IndexWrapper,
} from "./style.js";
import { Questions1 } from "./array/index.js";
import { StyledInput, StyledTextarea } from "../Q&A/style.js";

const Quiz6 = () => {
  // 배열 섞기 함수
  const shuffleArray = (array) => {
    if (!array || array.length === 0) {
      return [];
    }
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // 상태 변수 선언
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentSubject, setCurrentSubject] = useState("");
  const [subSubjects, setSubSubjects] = useState([]);
  const [currentSubSubject, setCurrentSubSubject] = useState("");

  // 주제에 따른 하위 주제 설정
  useEffect(() => {
    const subjects = Array.from(new Set(Questions1.map((q) => q.subject)));
    setCurrentSubject(subjects[0]);
  }, []);

  useEffect(() => {
    if (currentSubject) {
      const relatedSubSubjects = Array.from(
        new Set(
          Questions1.filter((q) => q.subject === currentSubject).map(
            (q) => q.subSubject
          )
        )
      );
      setSubSubjects(relatedSubSubjects);
      setCurrentSubSubject(relatedSubSubjects[0]);
    }
  }, [currentSubject]);

  // 하위 주제에 따른 문제 설정
  useEffect(() => {
    if (currentSubSubject) {
      const quizQuestions = Questions1.filter(
        (q) =>
          q.subSubject === currentSubSubject && q.subject === currentSubject // subject 조건 추가
      );
      const shuffledQuestions = shuffleArray([...quizQuestions]).map((q) => ({
        ...q,
        // 아래 부분을 추가해줍니다.
        answerOptions: shuffleArray([...q.answerOptions]),
      }));
      setShuffledQuestions(shuffledQuestions);
    }
  }, [currentSubSubject, currentSubject]); // currentSubject 의존성 추가

  const handleSubmit = () => {
    const userAnswerText = userAnswer.replace(/\s/g, ""); // 모든 공백을 제거합니다.
    if (
      shuffledQuestions[currentQuestion].answerOptions.find(
        (option) => option.text.replace(/\s/g, "") === userAnswerText // 정답의 모든 공백도 제거하여 비교합니다.
      )?.isCorrect
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz finished!");
      setCurrentQuestion(0); // 퀴즈가 끝나면 다시 처음부터 시작하도록 설정
    }
    setUserAnswer("");
    setIsSubmitted(false);
  };

  useEffect(() => {
    console.log("shuffledQuestions가 변경되었습니다:", shuffledQuestions);
  }, [shuffledQuestions]);

  // 주제 변경 핸들러
  const handleSubjectChange = (e) => {
    setCurrentSubject(e.target.value);
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setIsCorrect(null);
  };

  // 하위 주제 변경 핸들러
  const handleSubSubjectChange = (e) => {
    setCurrentSubSubject(e.target.value);
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setIsCorrect(null);
  };

  useEffect(() => {
    // currentSubject나 currentSubSubject가 변경될 때마다 이 함수가 실행됩니다.
    setUserAnswer("");
  }, [currentSubject, currentSubSubject]);

  return (
    <Wrapper
      style={{
        backgroundImage: shuffledQuestions[currentQuestion]?.backgroundImage
          ? `url(${shuffledQuestions[currentQuestion].backgroundImage})`
          : "",
        backgroundColor: "#f9f9f9",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {shuffledQuestions.length > 0 ? (
        <>
          <SelectBox value={currentSubject} onChange={handleSubjectChange}>
            {Array.from(new Set(Questions1.map((q) => q.subject))).map(
              (subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              )
            )}
          </SelectBox>
          <SelectBox
            value={currentSubSubject}
            onChange={handleSubSubjectChange}
          >
            {subSubjects.map((subSubject, index) => (
              <option key={index} value={subSubject}>
                {subSubject}
              </option>
            ))}
          </SelectBox>

          <Section>
            <h2>문제</h2>
            <p>{shuffledQuestions[currentQuestion].questionText}</p>
            {shuffledQuestions[currentQuestion].questionImage && (
              <QuizImage
                image={shuffledQuestions[currentQuestion].questionImage}
              />
            )}
            <CodeBlock>{shuffledQuestions[currentQuestion].code}</CodeBlock>
          </Section>
          {isSubmitted && (
            <Section>
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {shuffledQuestions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <CodeBlock>
                {shuffledQuestions[currentQuestion].explanationCode}
              </CodeBlock>
              {isCorrect &&
                currentQuestion < shuffledQuestions.length - 1 && ( // isCorrect 조건 추가
                  <Button onClick={handleNext}>다음 문제</Button>
                )}
            </Section>
          )}

          <Section>
            <h2>선택지</h2>
            {shuffledQuestions[currentQuestion].answerOptions.map(
              (option, index) => (
                <div key={index}>
                  <IndexWrapper>{index + 1}</IndexWrapper>
                  <label htmlFor={`option-${index}`}>{option.text}</label>
                </div>
              )
            )}

            <StyledTextarea
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <Button onClick={handleSubmit}>제출</Button>
          </Section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default Quiz6;
