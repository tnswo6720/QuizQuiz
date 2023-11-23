import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "다음 코드의 빈 칸에 들어갈 수 있는 자바스크립트 함수 선언 방법은?",
      code: `
      ______ myFunction() {
        console.log("Hello World!");
      }
      `,
      answerOptions: ["let", "var", "function", "const"],
      answer: "function",
      explanation:
        "자바스크립트에서 함수를 선언하는 방법 중 하나는 'function' 키워드를 사용하는 것입니다.",
    },
    {
      questionText: "다음 코드의 빈 칸에 들어갈 수 있는 화살표 함수는?",
      code: `
      let myFunction = ______ => console.log("Hello World!");
      `,
      answerOptions: [
        "()",
        "(param)",
        "(param1, param2)",
        "(param = 'default')",
      ],
      answer: "()",
      explanation:
        "인자가 없는 화살표 함수를 선언할 때는 괄호 '()'를 사용합니다.",
    },
    {
      questionText: "다음 코드의 빈 칸에 들어갈 수 있는 콜백 함수는?",
      code: `
      let numbers = [1, 2, 3, 4, 5];
      numbers.map(______);
      `,
      answerOptions: [
        "(num) => num * 2",
        "(num) => {return num * 2}",
        "(num) => return num * 2",
        "num => num * 2",
      ],
      answer: "(num) => num * 2",
      explanation:
        "map 함수의 인자로 콜백 함수를 전달할 수 있고, 이 콜백 함수는 배열의 각 요소에 대해 한 번씩 실행됩니다.",
    },

    {
      questionText:
        "다음 코드의 빈 칸에 들어갈 수 있는 함수 호출 방법은 무엇인가요?",
      code: `
      function myFunction() {
        console.log('Hello, World!');
      }

      ______;
      `,
      answerOptions: ["myFunction()", "myFunction", "myFunction{}"],
      answer: "myFunction()",
      explanation:
        "자바스크립트에서 함수를 호출하는 방법은 함수 이름 뒤에 괄호 '()'를 붙여서 호출합니다.",
    },
    {
      questionText:
        "다음 코드의 빈 칸에 들어갈 수 있는 콜백 함수의 사용 방법은 무엇인가요?",
      code: `
      function myFunction(callback) {
        console.log('Hello, World!');
        ______;
      }
    
      myFunction(() => console.log('This is a callback function'));
      `,
      answerOptions: ["callback", "callback()", "callback{}"],
      answer: "callback()",
      explanation:
        "콜백 함수는 함수의 인자로 전달되며, 나중에 이벤트가 발생했을 때 실행되는 함수를 말합니다. 콜백 함수는 함수의 이름 뒤에 괄호 '()'를 붙여서 호출합니다. 이 경우, 'callback'은 함수 'myFunction'에 전달된 콜백 함수를 참조하므로 'callback()'으로 호출하면 전달받은 콜백 함수가 실행됩니다.",
    },
    {
      questionText:
        "다음 코드의 빈 칸에 들어갈 수 있는 자바스크립트 함수의 반환값은 무엇인가요?",
      code: `
      function myFunction() {
        let sum = 0;
        for(let i=0; i<5; i++) {
          sum += i;
        }
        ______;
      }
    
      console.log(myFunction());
      `,
      answerOptions: ["return sum", "return i", "return 5", "return undefined"],
      answer: "return sum",
      explanation:
        "함수에서 값을 반환하기 위해 'return' 키워드를 사용합니다. 이 경우, 변수 'sum'의 값을 반환해야 합니다.",
    },
    {
      questionText:
        "다음 코드의 빈 칸에 들어갈 수 있는 자바스크립트 화살표 함수는 무엇인가요?",
      code: `
      const subtract = ______ => a - b;
    
      console.log(subtract(5, 2));
      `,
      answerOptions: ["(a, b)", "(a + b)", "(a = 5, b = 2)", "(a)"],
      answer: "(a, b)",
      explanation:
        "화살표 함수에서 여러 개의 매개변수를 사용하려면, 괄호 안에 매개변수를 쉼표로 구분하여 넣어야 합니다.",
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

// 기본 문법:
// 변수와 상수
// 데이터 타입
// 연산자
// 제어문 (if, for, while 등)
