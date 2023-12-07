import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button, CodeBlock } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...

    {
      questionText: "린터(Linter)는 무엇인가요?",
      code: "",
      answerOptions: [
        "코드의 문법적 오류를 검사하는 도구",
        "코드의 실행 시간을 측정하는 도구",
        "코드의 로직을 검사하는 도구",
        "코드의 실행 효율을 향상시키는 도구",
      ],
      answer: "코드의 문법적 오류를 검사하는 도구",
      explanation:
        "린터는 코드의 문법적 오류를 검사하는 도구입니다. 코드의 구조, 포맷팅, 작성 스타일 등을 검사하여 코드의 품질을 향상시키는 데 도움을 줍니다.",
      explanationCode: "",
    },
    {
      questionText: "프리터(Prettier)는 무엇인가요?",
      code: "",
      answerOptions: [
        "코드의 문법적 오류를 검사하는 도구",
        "코드의 실행 효율을 향상시키는 도구",
        "코드의 로직을 검사하는 도구",
        "코드의 포맷팅을 자동으로 맞춰주는 도구",
      ],
      answer: "코드의 포맷팅을 자동으로 맞춰주는 도구",
      explanation:
        "프리터는 코드의 포맷팅을 자동으로 맞춰주는 도구입니다. 개발자가 작성한 코드의 스타일을 일관되게 유지하고, 코드의 가독성을 향상시키는 데 도움을 줍니다.",
      explanationCode: "",
    },
    {
      questionText: "허스키(Husky)는 무엇인가요?",
      code: "",
      answerOptions: [
        "Git 훅을 쉽게 관리할 수 있게 도와주는 라이브러리",
        "코드의 문법적 오류를 검사하는 도구",
        "코드의 실행 시간을 측정하는 도구",
        "코드의 로직을 검사하는 도구",
      ],
      answer: "Git 훅을 쉽게 관리할 수 있게 도와주는 라이브러리",
      explanation:
        "허스키는 Git 훅을 쉽게 관리할 수 있게 도와주는 라이브러리입니다. 이를 통해 Git 커밋이나 푸시 전에 린터 또는 테스트를 자동으로 실행하도록 설정할 수 있습니다.",
      explanationCode: "",
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
            <CodeBlock>{questions[currentQuestion].code}</CodeBlock>
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
