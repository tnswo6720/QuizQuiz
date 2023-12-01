import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "CSS에서 'Static' 위치는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "요소가 문서 흐름에 따라 자연스럽게 배치된다.",
        "요소의 위치가 상대적으로 결정된다.",
        "요소의 위치가 절대적으로 결정된다.",
        "요소의 위치가 화면에 고정된다.",
      ],
      answer: "요소가 문서 흐름에 따라 자연스럽게 배치된다.",
      explanation:
        "CSS에서 'Static'은 기본 위치 값을 의미하며, 요소가 문서 흐름에 따라 자연스럽게 배치됩니다.",
      explanationCode: "div { position: static; }",
    },
    {
      questionText: "CSS에서 'Relative' 위치는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "요소가 문서 흐름에 따라 자연스럽게 배치된다.",
        "요소의 위치가 상대적으로 결정된다.",
        "요소의 위치가 절대적으로 결정된다.",
        "요소의 위치가 화면에 고정된다.",
      ],
      answer: "요소의 위치가 상대적으로 결정된다.",
      explanation:
        "CSS에서 'Relative'은 요소의 위치가 그 원래 위치에 상대적으로 결정됨을 의미합니다.",
      explanationCode: "div { position: relative; left: 20px; }",
    },
    {
      questionText: "CSS에서 'Absolute' 위치는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "요소가 문서 흐름에 따라 자연스럽게 배치된다.",
        "요소의 위치가 상대적으로 결정된다.",
        "요소의 위치가 절대적으로 결정된다.",
        "요소의 위치가 화면에 고정된다.",
      ],
      answer: "요소의 위치가 절대적으로 결정된다.",
      explanation:
        "CSS에서 'Absolute'은 요소의 위치가 가장 가까운 위치 지정 조상 요소(즉, relative, absolute, fixed 또는 sticky 중 하나로 설정된 요소)에 상대적으로 결정됨을 의미합니다.",
      explanationCode: "div { position: absolute; top: 10px; left: 20px; }",
    },
    {
      questionText: "CSS에서 'Fixed' 위치는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "요소가 문서 흐름에 따라 자연스럽게 배치된다.",
        "요소의 위치가 상대적으로 결정된다.",
        "요소의 위치가 절대적으로 결정된다.",
        "요소의 위치가 화면에 고정된다.",
      ],
      answer: "요소의 위치가 화면에 고정된다.",
      explanation:
        "CSS에서 'Fixed'은 요소의 위치가 뷰포트에 상대적으로 결정됨을 의미하며, 스크롤하더라도 그 위치가 변하지 않습니다.",
      explanationCode: "div { position: fixed; bottom: 0; right: 0; }",
    },
    {
      questionText: "CSS에서 'Flex'는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "일차원 레이아웃 모델을 의미한다.",
        "이차원 그리드 레이아웃 모델을 의미한다.",
        "요소의 위치가 상대적으로 결정된다.",
        "요소의 위치가 절대적으로 결정된다.",
      ],
      answer: "일차원 레이아웃 모델을 의미한다.",
      explanation:
        "CSS에서 'Flex'는 Flexible Box Layout 모델을 의미하며, 일차원(행 또는 열) 레이아웃을 위한 방법을 제공합니다.",
      explanationCode: "div { display: flex; }",
    },
    {
      questionText: "CSS에서 'Grid'는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "일차원 레이아웃 모델을 의미한다.",
        "이차원 그리드 레이아웃 모델을 의미한다.",
        "요소의 위치가 상대적으로 결정된다.",
        "요소의 위치가 절대적으로 결정된다.",
      ],
      answer: "이차원 그리드 레이아웃 모델을 의미한다.",
      explanation:
        "CSS에서 'Grid'는 CSS Grid Layout 모델을 의미하며, 이차원(행과 열) 레이아웃을 위한 방법을 제공합니다.",
      explanationCode: "div { display: grid; }",
    },
    // 추가 문제를 넣을 수 있습니다.
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(initialQuestions).map(
      (question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      })
    );
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
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

  const handleSubmit = () => {
    const formattedUserAnswer = userAnswer.replace(/\s/g, "").toLowerCase();
    const formattedCorrectAnswer = questions[currentQuestion].answer
      .replace(/\s/g, "")
      .toLowerCase();

    setIsCorrect(formattedUserAnswer === formattedCorrectAnswer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
  };

  return (
    <Wrapper>
      {questions.length > 0 ? (
        <>
          <Section>
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </Section>

          {isSubmitted && (
            <Section>
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <pre>{questions[currentQuestion].explanationCode}</pre>
              {currentQuestion < questions.length - 1 && (
                <Button onClick={handleNext}>다음 문제</Button>
              )}
            </Section>
          )}

          <Section>
            <h2>선택지</h2>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
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

export default Quiz;
