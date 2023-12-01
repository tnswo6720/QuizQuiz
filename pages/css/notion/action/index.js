import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "CSS에서 미디어 쿼리는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "특정 미디어 유형이나 조건에 따라 스타일을 적용하는 기술",
        "이미지를 반응형으로 만드는 기술",
        "테이블을 반응형으로 만드는 기술",
        "애니메이션을 만드는 기술",
      ],
      answer: "특정 미디어 유형이나 조건에 따라 스타일을 적용하는 기술",
      explanation:
        "CSS에서 미디어 쿼리는 특정 미디어 유형이나 조건에 따라 스타일을 적용하는 기술을 의미합니다. 이를 통해 반응형 웹 디자인을 구현할 수 있습니다.",
      explanationCode:
        "@media screen and (max-width: 600px) { body { background-color: lightblue; } }",
    },
    {
      questionText: "CSS에서 반응형 이미지란 무엇인가요?",
      code: "",
      answerOptions: [
        "이미지의 크기가 뷰포트의 크기에 따라 자동으로 조절되는 이미지",
        "이미지의 크기가 고정된 이미지",
        "이미지의 위치가 뷰포트의 위치에 따라 자동으로 조절되는 이미지",
        "이미지의 색상이 뷰포트의 색상에 따라 자동으로 조절되는 이미지",
      ],
      answer: "이미지의 크기가 뷰포트의 크기에 따라 자동으로 조절되는 이미지",
      explanation:
        "CSS에서 반응형 이미지는 이미지의 크기가 뷰포트의 크기에 따라 자동으로 조절되는 이미지를 의미합니다. 이를 통해 다양한 디스플레이 크기에 대응할 수 있습니다.",
      explanationCode: "img { max-width: 100%; height: auto; }",
    },
    {
      questionText: "CSS에서 반응형 테이블란 무엇인가요?",
      code: "",
      answerOptions: [
        "테이블의 크기가 뷰포트의 크기에 따라 자동으로 조절되는 테이블",
        "테이블의 크기가 고정된 테이블",
        "테이블의 위치가 뷰포트의 위치에 따라 자동으로 조절되는 테이블",
        "테이블의 색상이 뷰포트의 색상에 따라 자동으로 조절되는 테이블",
      ],
      answer: "테이블의 크기가 뷰포트의 크기에 따라 자동으로 조절되는 테이블",
      explanation:
        "CSS에서 반응형 테이블은 테이블의 크기가 뷰포트의 크기에 따라 자동으로 조절되는 테이블을 의미합니다. 이를 통해 다양한 디스플레이 크기에 대응할 수 있습니다.",
      explanationCode:
        "@media screen and (max-width: 600px) { table { width: 100%; } }",
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
