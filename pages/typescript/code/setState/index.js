import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "다음 React 함수형 컴포넌트에서 빈칸에 들어갈 적절한 코드는 무엇일까요? 이 코드는 count 상태값을 1 증가시키는 기능을 합니다.",
      code: `
        function Counter() {
          const [count, setCount] = React.useState(0);
    
          const incrementCount = () => {
            setCount(______);
          };
    
          return (
            <div>
              <p>Count: {count}</p>
              <button onClick={incrementCount}>Increment</button>
            </div>
          );
        }
      `,
      answerOptions: [
        "count + 1",
        "++count",
        "(count) => count + 1",
        "(count) => ++count",
      ],
      answer: "count + 1",
      explanation:
        "React의 useState 훅에서 상태를 업데이트할 때는 상태 설정 함수(setCount)에 직접 새로운 상태값을 전달합니다. 따라서 'count + 1'이 적절한 코드입니다. 이 코드는 count 상태값을 1 증가시키는 기능을 합니다.",
    },
    {
      questionText:
        "다음 React 함수형 컴포넌트에서 빈칸에 들어갈 적절한 코드는 무엇일까요? 이 코드는 입력 필드의 값을 상태로 관리하는 기능을 합니다.",
      code: `
        function TextInput() {
          const [text, setText] = React.useState('');
    
          const handleChange = (event) => {
            setText(______);
          };
    
          return (
            <div>
              <input type="text" value={text} onChange={handleChange} />
              <p>Text: {text}</p>
            </div>
          );
        }
      `,
      answerOptions: [
        "event",
        "event.target",
        "event.value",
        "event.target.value",
      ],
      answer: "event.target.value",
      explanation:
        "React에서 이벤트 핸들러 내에서 입력 필드의 값을 가져오려면 'event.target.value'를 사용합니다. 따라서 'setText(event.target.value)'가 적절한 코드입니다. 이 코드는 입력 필드의 값을 text 상태로 설정하는 기능을 합니다.",
    },
    {
      questionText:
        "다음 React 함수형 컴포넌트에서 빈칸에 들어갈 적절한 코드는 무엇일까요? 이 코드는 count 상태값을 2배로 증가시키는 기능을 합니다.",
      code: `
        function Counter() {
          const [count, setCount] = React.useState(1);
    
          const doubleCount = () => {
            setCount(______);
          };
    
          return (
            <div>
              <p>Count: {count}</p>
              <button onClick={doubleCount}>Double</button>
            </div>
          );
        }
      `,
      answerOptions: [
        "count * 2",
        "count + count",
        "(count) => count * 2",
        "(count) => count + count",
      ],
      answer: "count * 2",
      explanation:
        "React의 useState 훅에서 상태를 업데이트할 때는 상태 설정 함수(setCount)에 직접 새로운 상태값을 전달합니다. 따라서 'count * 2'가 적절한 코드입니다. 이 코드는 count 상태값을 2배로 증가시키는 기능을 합니다.",
    },
    {
      questionText:
        "다음 스타일드 컴포넌트에서 빈칸에 들어갈 적절한 코드는 무엇일까요? 이 코드는 props의 isActive 값에 따라 버튼의 글씨색을 변경하는 기능을 합니다.",
      code: `
        import styled from 'styled-components';
    
        export const BlueButton = styled.button\`
          color: '$'{(props) => ______};
        \`;
      `,
      answerOptions: [
        '"blue"',
        'props.isActive ? "blue" : "red"',
        'props.isActive && "blue"',
        "props.isActive",
      ],
      answer: 'props.isActive ? "blue" : "red"',
      explanation:
        "스타일드 컴포넌트에서는 함수를 이용하여 props에 따라 동적으로 CSS 속성값을 결정할 수 있습니다. 따라서 'props.isActive ? \"blue\" : \"red\"'가 적절한 코드입니다. 이 코드는 props의 isActive 값에 따라 버튼의 글씨색을 'blue' 또는 'red'로 변경하는 기능을 합니다.",
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
    const correctAnswers = String(questions[currentQuestion].answer).split(",");

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
    <div className="app">
      {questions.length > 0 ? (
        <>
          <div className="question-section">
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </div>

          <div className="answer-section">
            <h2>선택지</h2>
            {showHint ? (
              questions[currentQuestion].answerOptions.map((option, index) => (
                <p key={index}>{option}</p>
              ))
            ) : (
              <button onClick={handleShowHint}>힌트 보기</button>
            )}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isSubmitted}
            />
            <button onClick={handleSubmit} disabled={!userAnswer}>
              제출
            </button>
          </div>

          {isSubmitted && (
            <div className="explanation-section">
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              {isCorrect && <button onClick={handleNext}>다음 문제</button>}
            </div>
          )}

          {isSubmitted && !isCorrect && (
            <div className="code-input-section">
              <h2>코드 입력</h2>
              <textarea
                value={answerCode}
                onChange={(e) => setAnswerCode(e.target.value)}
                style={{ width: "30%", height: "100px" }}
              />
              <button onClick={handleNext}>다음 문제</button>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;