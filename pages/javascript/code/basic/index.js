import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "다음 중 자바스크립트에서 '상수'를 선언하는 키워드는 무엇일까요?",
      code: `
      _____ PI = 3.141592;
      `,
      answerOptions: ["let", "var", "const", "if"],
      answer: "const",
      explanation:
        "'const'는 상수를 선언하는 키워드입니다. 한번 선언하고 값이 할당된 상수는 재할당을 통해 값을 변경할 수 없습니다.",
    },

    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `
      const a = 5;
      const b = '5';
    
      console.log(a == b);
      console.log(a === b);
      `,
      answerOptions: [
        "true, true",
        "true, false",
        "false, true",
        "false, false",
      ],
      answer: "true, false",
      explanation:
        "자바스크립트에서 '==' 연산자는 값만을 비교하므로, 숫자 5와 문자열 '5'는 같다고 판단합니다. 반면 '===' 연산자는 값 뿐만 아니라 타입까지 비교하므로, 숫자 5와 문자열 '5'는 다르다고 판단합니다.",
    },
    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `
      for (var i = 0; i < 5; i++) {
        setTimeout(function() {
          console.log(i);
        }, 1000);
      }
      `,
      answerOptions: [
        "0 1 2 3 4",
        "5 5 5 5 5",
        "1 2 3 4 5",
        "undefined undefined undefined undefined undefined",
      ],
      answer: "5 5 5 5 5",
      explanation:
        "변수 i는 'var' 키워드로 선언되었으므로, 함수 스코프를 가집니다. 따라서 setTimeout 함수가 실행될 때 i는 이미 5가 되어있어, '5 5 5 5 5'가 출력됩니다.",
    },
    {
      questionText:
        "다음 중 자바스크립트에서 '배열'을 선언하는 올바른 방법은 무엇일까요?",
      code: `
      const arr = _____;
      `,
      answerOptions: ["{}", "[]", "()", "||"],
      answer: "[]",
      explanation: "자바스크립트에서 배열은 대괄호([])를 사용하여 선언합니다.",
    },
    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `
      let x = 10;
      x += 5;
      console.log(x);
      `,
      answerOptions: ["15", "105", "5", "10"],
      answer: "15",
      explanation:
        "'+=' 연산자는 현재 변수의 값에 주어진 값을 더하고 결과를 해당 변수에 할당하는 역할을 합니다. 따라서, x의 값은 10 + 5인 15가 됩니다.",
    },
    {
      questionText:
        "다음 중 자바스크립트에서 '객체'의 name 프로퍼티에 접근하는 올바른 방법은 무엇일까요?",
      code: `
      const obj = {
        name: 'John',
        age: 30
      };
    
      console.log(obj._____);
      `,
      answerOptions: ["name", "[name]", "{name}", "(name)"],
      answer: "name",
      explanation:
        "자바스크립트에서 객체의 프로퍼티에 접근하기 위해서는 점 표기법을 사용할 수 있습니다. 따라서 'obj.name'이 올바른 방법입니다.",
    },
    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `
      const arr = [1, 2, 3];
      arr.push(4);
      console.log(arr);
      `,
      answerOptions: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4, 1, 2, 3]", "4"],
      answer: "[1, 2, 3, 4]",
      explanation:
        "'push' 메소드는 배열의 끝에 새 요소를 추가합니다. 따라서, arr 배열은 [1, 2, 3, 4]가 됩니다.",
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
