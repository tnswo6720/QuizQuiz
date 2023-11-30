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
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요?  이 메서드는 배열의 각 요소를 함수를 통해 변환하고, 변환된 요소로 새로운 배열을 생성합니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const newArr = arr.______(function(num) { 
          return num * 2; 
        });
        
        console.log(newArr);
      `,
      answerOptions: ["map", "reduce", "filter", "forEach"],
      answer: "map",
      explanation:
        "배열의 각 요소를 함수를 통해 변환하고 변환된 요소로 새 배열을 생성하는 'map' 메서드가 적절합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 각 요소에 대해 함수를 실행합니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        arr.______(function(num) { 
          console.log(num);
        });
      `,
      answerOptions: ["map", "reduce", "filter", "forEach"],
      answer: "forEach",
      explanation:
        "배열의 각 요소에 대해 함수를 실행하는 'forEach' 메서드가 적절합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 생성자는 무엇인가요? 이 생성자는 배열을 생성합니다.",
      code: `
        const arr = new ______(1, 2, 3, 4, 5);
        
        console.log(arr);
      `,
      answerOptions: ["Array", "Object", "Function", "String"],
      answer: "Array",
      explanation: "배열을 생성하는 'Array' 생성자가 적절합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 반복자 메서드는 무엇인가요? 이 메서드는 배열의 각 요소에 대한 반복자를 생성합니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const iterator = arr.______();
        
        console.log(iterator.next().value);
      `,
      answerOptions: ["values", "keys", "entries", "forEach"],
      answer: "values",
      explanation:
        "배열의 각 요소에 대한 반복자를 생성하는 'values' 메서드가 적절합니다. 반복자(Iterator)는 '반복 가능한 객체'를 통해 순차적으로 접근하는 패턴입니다",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 요소 중 함수의 조건을 만족하는 요소만을 새 배열로 생성합니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const newArr = arr.______(function(num) { 
          return num > 3; 
        });
        
        console.log(newArr);
      `,
      answerOptions: ["map", "reduce", "filter", "forEach"],
      answer: "filter",
      explanation:
        "배열의 요소 중 함수의 조건을 만족하는 요소만을 새 배열로 생성하는 'filter' 메서드가 적절합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 모든 요소를 사용하여 하나의 값으로 줄입니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const sum = arr.______(function(acc, cur) { 
          return acc + cur; 
        }, 0);
        
        console.log(sum);
      `,
      answerOptions: ["map", "reduce", "filter", "forEach"],
      answer: "reduce",
      explanation:
        "배열의 모든 요소를 사용하여 하나의 값으로 줄이는 'reduce' 메서드가 적절합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열에서 특정 요소를 찾아 그 인덱스를 반환합니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const index = arr.______(3);
        
        console.log(index);
      `,
      answerOptions: ["indexOf", "findIndex", "lastIndexOf", "includes"],
      answer: "indexOf",
      explanation:
        "배열에서 특정 요소를 찾아 그 인덱스를 반환하는 'indexOf' 메서드가 적절합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const isExists = arr.______(3);
        
        console.log(isExists);
      `,
      answerOptions: ["indexOf", "findIndex", "lastIndexOf", "includes"],
      answer: "includes",
      explanation:
        "배열이 특정 요소를 포함하고 있는지 판별하는 'includes' 메서드가 적절합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 순서를 반전시킵니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const newArr = arr.______();
        
        console.log(newArr);
      `,
      answerOptions: ["join", "concat", "slice", "reverse"],
      answer: "reverse",
      explanation: "배열의 순서를 반전시키는 'reverse' 메서드가 적절합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 일부를 추출하여 새 배열을 생성합니다.",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const copiedArr = arr.______(1, 3);
        
        console.log(copiedArr);
      `,
      answerOptions: ["join", "concat", "slice", "reverse"],
      answer: "slice",
      explanation:
        "배열의 일부를 추출하여 새 배열을 생성하는 'slice' 메서드가 적절합니다.",
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
