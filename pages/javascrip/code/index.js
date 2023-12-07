import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button, CodeBlock, TextArea } from "./style.js";
import { Questions2 } from "./array/index.js";

const Quiz5 = () => {
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
  const [isCorrect, setIsCorrect] = useState(false); // null 대신 false로 초기값 설정
  const [showHint, setShowHint] = useState(false);
  const [subSubjects, setSubSubjects] = useState([]);

  const [answerCode, setAnswerCode] = useState("");

  // 상태 변수 추가
  const [currentQuizType, setCurrentQuizType] = useState("");
  const [currentSubSubject, setCurrentSubSubject] = useState("");

  // 정답 코드 생성 함수
  const createAnswerCode = (code, answer) => {
    const answers = answer.split(",");
    let updatedCode = code;

    answers.forEach((ans) => {
      updatedCode = updatedCode.replace(/______/, ans.trim());
    });

    return updatedCode;
  };

  // 제출 버튼 클릭 시
  const handleSubmit = () => {
    let isUserAnswerCorrect = false;
    if (shuffledQuestions[currentQuestion].answerOptions) {
      isUserAnswerCorrect = shuffledQuestions[
        currentQuestion
      ].answerOptions.some((option) => option === userAnswer.trim());
    } else {
      isUserAnswerCorrect =
        shuffledQuestions[currentQuestion].answer === userAnswer.trim();
    }

    setIsCorrect(isUserAnswerCorrect);
    setIsSubmitted(true);
  };

  // 코드 형식화 함수
  const formatCode = (code) => {
    return code.replace(/\s/g, ""); // 모든 공백 제거
  };

  // 다음 버튼 클릭 시
  const handleNext = () => {
    if (!isCorrect) {
      const correctCode = formatCode(
        createAnswerCode(
          shuffledQuestions[currentQuestion].code,
          shuffledQuestions[currentQuestion].answer
        )
      );
      if (formatCode(answerCode) !== correctCode) {
        alert("Please enter the correct code.");
        console.log("Correct Code:", correctCode);
        return;
      }
    }

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setAnswerCode("");
      setIsSubmitted(false);
      setIsCorrect(false); // false로 초기화
      setShowHint(false);
    } else {
      alert("Quiz finished!");
    }
  };

  useEffect(() => {
    const subjects = Array.from(new Set(Questions2.map((q) => q.subject)));
    setCurrentSubSubject(subjects[0]);
    setShuffledQuestions(shuffleArray(Questions2));
  }, []);

  useEffect(() => {
    const filterByQuizType = (questions, quizType) => {
      return questions.filter((q) => q.subject === quizType);
    };

    setShuffledQuestions(filterByQuizType(Questions2, currentQuizType));
  }, [currentQuizType]);

  // 문제 데이터를 사용하여 큰 유형과 작은 유형 추출
  useEffect(() => {
    const quizTypes = Array.from(new Set(Questions2.map((q) => q.subject)));
    const subSubjects = Array.from(
      new Set(Questions2.map((q) => q.subSubject))
    );
    setCurrentQuizType(quizTypes[0]);
    setCurrentSubSubject(subSubjects[0]);
  }, []);

  useEffect(() => {
    const filterByQuizType = (questions, quizType) => {
      return questions.filter((q) => q.subject === quizType);
    };

    const quizTypeQuestions = filterByQuizType(Questions2, currentQuizType);
    const subSubjects = Array.from(
      new Set(quizTypeQuestions.map((q) => q.subSubject))
    );

    setSubSubjects(subSubjects);
    setCurrentSubSubject(subSubjects[0]);
  }, [currentQuizType]);

  // 상위 주제 변경 핸들러
  const handleQuizTypeChange = (e) => {
    setCurrentQuizType(e.target.value);
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setIsCorrect(false); // false로 초기화
  };

  // 하위 주제 변경 핸들러
  const handleSubSubjectChange = (e) => {
    setCurrentSubSubject(e.target.value);
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setIsCorrect(false); // false로 초기화
  };

  // 상위 주제 또는 하위 주제가 변경될 때 문제 배열 섞기
  useEffect(() => {
    let filteredQuestions = Questions2.filter(
      (q) => q.subject === currentQuizType && q.subSubject === currentSubSubject
    );
    filteredQuestions = shuffleArray(filteredQuestions); // 문제 배열 섞기
    setShuffledQuestions(filteredQuestions);
  }, [currentQuizType, currentSubSubject]);

  // 상태 변수 선언
  const [showOptions, setShowOptions] = useState(false);

  // 문제 인덱스가 바뀔 때마다 선택지 펼치기를 닫힌 상태로 초기화
  useEffect(() => {
    setShowOptions(false);
  }, [currentQuestion]);

  // 선택지 토글 핸들러
  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <Wrapper>
      {shuffledQuestions && shuffledQuestions.length > 0 ? (
        <>
          <select value={currentQuizType} onChange={handleQuizTypeChange}>
            {Array.from(new Set(Questions2.map((q) => q.subject))).map(
              (quizType, index) => (
                <option key={index} value={quizType}>
                  {quizType}
                </option>
              )
            )}
          </select>
          <select value={currentSubSubject} onChange={handleSubSubjectChange}>
            {subSubjects.map((subSubject, index) => (
              <option key={index} value={subSubject}>
                {subSubject}
              </option>
            ))}
          </select>

          <Section>
            <h2>문제</h2>
            <p>{shuffledQuestions[currentQuestion].questionText}</p>
            <CodeBlock>{shuffledQuestions[currentQuestion].code}</CodeBlock>
          </Section>
          {isSubmitted && !isCorrect && (
            <Section>
              <h2>코드 작성</h2>
              <TextArea
                value={answerCode}
                onChange={(e) => setAnswerCode(e.target.value)}
              />
            </Section>
          )}
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

              {currentQuestion < shuffledQuestions.length - 1 && (
                <Button onClick={handleNext}>다음 문제</Button>
              )}
            </Section>
          )}
          <Section>
            <h2>선택지</h2>
            <Button onClick={handleToggleOptions}>
              {showOptions ? "선택지 접기" : "선택지 펼치기"}
            </Button>
            {showOptions &&
              shuffledQuestions[currentQuestion].answerOptions &&
              shuffledQuestions[currentQuestion].answerOptions.map(
                (option, index) => (
                  <div key={index}>
                    <p>{option}</p>
                  </div>
                )
              )}
          </Section>

          <Section>
            <h2>답 입력</h2>
            <input
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

export default Quiz5;
