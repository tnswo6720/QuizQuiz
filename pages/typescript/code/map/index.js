import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Section,
  Button,
  TextArea,
  OptionsContainer,
  Sectionchoice,
  InputAndButtonContainer,
} from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "map 함수를 사용하여 FRUITS 배열의 각 요소를 화면에 출력하는 코드를 완성하세요.",
      code: `
        const FRUITS = [
          { number: 1, title: "레드향" },
          { number: 2, title: "샤인머스켓" },
          { number: 3, title: "산청딸기" },
          { number: 4, title: "한라봉" },
          { number: 5, title: "사과" },
          { number: 6, title: "애플망고" },
          { number: 7, title: "딸기" },
          { number: 8, title: "천혜향" },
          { number: 9, title: "과일선물세트" },
          { number: 10, title: "귤" },
        ];
    
        export default function MapFruitsPage() {
          const fruits = _______.map((el) => (
            <div>
              {el.number} {el.title}
            </div>
          ));
    
          return (
            <div>
              {fruits}
            </div>
          );
        }
      `,
      answerOptions: ["FRUITS", "FRUITS.title", "FRUITS.number", "FRUITS.map"],
      answer: "FRUITS",
      explanation:
        "map 함수는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과를 모아 새로운 배열을 반환합니다. 이 경우 FRUITS 배열의 각 요소에 대해 JSX를 반환하는 함수를 호출하므로, 'FRUITS'를 사용해야 합니다.",
    },
    {
      questionText:
        "GraphQL을 이용하여 받아온 데이터를 map을 이용하여 화면에 출력하는 코드를 완성하세요.",
      code: `
      import { useQuery, gql } from "@apollo/client";
    
      const FETCH_BOARDS = gql\`
        query {
          fetchBoards {
            number
            writer
            title
            contents
          }
        }
      \`;
    
      export default function StaticRoutingMovedPage() {
        const { data } = useQuery(FETCH_BOARDS);
    
        return (
          <div>
            {______?.______.map((el) => (
              <div>
                <span>
                  <input type="checkbox" />
                </span>
                <span style={{ margin: "10px" }}>{el.number}</span>
                <span style={{ margin: "10px" }}>{el.title}</span>
                <span style={{ margin: "10px" }}>{el.writer}</span>
              </div>
            ))}
          </div>
        );
      }
      `,
      answerOptions: [
        "data, fetchBoards",
        "data, number",
        "data, writer",
        "data, title",
      ],
      answer: "data, fetchBoards",
      explanation:
        "GraphQL 요청의 결과는 'data'에 저장되며, 요청한 필드는 'data' 객체의 하위 속성으로 접근할 수 있습니다. 따라서 'fetchBoards' 데이터에 접근하려면 'data?.fetchBoards'를 사용해야 합니다.",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false); // 힌트를 보여줄지 말지를 결정하는 상태를 추가합니다.
  // 정답인 코드를 생성하는 함수를 추가합니다.

  // 정답 코드를 상태로 관리합니다.
  const [answerCode, setAnswerCode] = useState("");

  useEffect(() => {
    setQuestions(shuffleArray(initialQuestions));
  }, []);

  const shuffleArray = (array) => {
    const arr = [...array]; // 배열 복사
    let currentIndex = arr.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  };
  const createAnswerCode = (code, answer) => {
    const answers = answer.split(",");
    let updatedCode = code;

    answers.forEach((ans) => {
      updatedCode = updatedCode.replace(/______/, ans.trim());
    });

    return updatedCode;
  };

  const handleSubmit = () => {
    const userAnswers = userAnswer.split(",");
    const correctAnswers = questions[currentQuestion].answer.split(",");

    if (userAnswers.length !== correctAnswers.length) {
      setIsCorrect(false);
    } else {
      const isAllCorrect = userAnswers.every((ans, index) => {
        return ans.trim() === correctAnswers[index].trim();
      });

      setIsCorrect(isAllCorrect);
    }

    setIsSubmitted(true);
  };

  const formatCode = (code) => {
    return code.replace(/\s/g, ""); // 모든 공백 제거
  };

  const handleNext = () => {
    if (!isCorrect) {
      const correctCode = formatCode(
        createAnswerCode(
          questions[currentQuestion].code,
          questions[currentQuestion].answer
        )
      );

      if (formatCode(answerCode) !== correctCode) {
        alert("Please enter the correct code.");
        console.log("Correct Code:", correctCode);
        return;
      }
    }

    // 정답을 맞추었거나, 틀렸지만 정답 코드를 맞게 입력했다면 다음 문제로 넘어갑니다.
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setAnswerCode("");
      setIsSubmitted(false);
      setIsCorrect(null);
      setShowHint(false);
    } else {
      alert("Quiz finished!");
    }
  };
  const handleShowHint = () => {
    setShowHint(true); // 힌트 보기 버튼을 눌렀을 때 힌트를 보여줍니다.
  };

  return (
    <Wrapper>
      {questions.length > 0 ? (
        <>
          <Section className="question-section">
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </Section>

          {isSubmitted && !isCorrect && (
            <Section className="code-input-section">
              <h2>코드 입력</h2>
              <TextArea
                value={answerCode}
                onChange={(e) => setAnswerCode(e.target.value)}
              />
              <Button onClick={handleNext}>다음 문제</Button>
            </Section>
          )}

          {isSubmitted && (
            <Section className="explanation-section">
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              {isCorrect && <Button onClick={handleNext}>다음 문제</Button>}
            </Section>
          )}

          <Sectionchoice className="answer-section">
            <h2>선택지</h2>
            <OptionsContainer>
              {showHint ? (
                <div>
                  {questions[currentQuestion].answerOptions.map(
                    (option, index) => (
                      <p key={index}>{option}</p>
                    )
                  )}
                </div>
              ) : null}
              {!showHint ? (
                <Button onClick={handleShowHint}>힌트 보기</Button>
              ) : null}
            </OptionsContainer>
            <InputAndButtonContainer>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={isSubmitted}
              />
              <Button onClick={handleSubmit} disabled={!userAnswer}>
                제출
              </Button>
            </InputAndButtonContainer>
          </Sectionchoice>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default Quiz;

// 기본 문법:
// 변수와 상수
// 데이터 타입
// 연산자
// 제어문 (if, for, while 등)

// 반복자가 뭔지
