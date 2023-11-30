import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "타입스크립트 파일을 자바스크립트 파일로 변환하는 명령어는 무엇인가요?",
      code: "______",
      answerOptions: ["tsc", "npm", "yarn", "node"],
      answer: "tsc",
      explanation:
        "타입스크립트 컴파일러인 `tsc` 명령어를 사용하여 .ts 또는 .tsx 파일을 자바스크립트로 변환합니다.",
      explanationCode: "tsc",
    },
    {
      questionText: "다음 코드에서 'ccc' 변수에 할당 가능한 타입은 무엇인가요?",
      code: `
        let ccc: ______ = 1000;
        ccc = "1000원";
      `,
      answerOptions: ["string", "number", "string | number", "any"],
      answer: "string | number",
      explanation:
        "'ccc' 변수는 숫자와 문자열을 모두 할당받을 수 있으므로, 빈 칸에는 'string | number'가 들어갑니다. 'string | number'는 'ccc'가 문자열 혹은 숫자 타입의 값을 가질 수 있음을 나타내는 유니언 타입입니다.",
    },
    {
      questionText:
        "타입스크립트를 설치하기 위해 사용되는 yarn 명령어를 작성해보세요.",
      code: "______ add typescript",
      answer: "yarn",
      explanation:
        "타입스크립트를 설치하기 위해 `yarn add typescript` 명령어를 사용합니다.",
      explanationCode: "yarn add typescript",
    },
    {
      questionText:
        "변수 'aaa'에 문자열을 할당한 후, 숫자를 할당하려고 할 때 발생하는 에러는 무엇인가요?",
      code: `
        let aaa: string = "안녕하세요";
        aaa = 3;
      `,
      answer: "Type error",
      explanation:
        "변수 'aaa'는 문자열 타입으로 선언되었기 때문에 숫자를 할당하려고 하면 타입 에러가 발생합니다.",
    },
    {
      questionText:
        "변수 'bbb'에 문자열을 할당한 후, 숫자를 할당하려고 할 때 발생하는 에러는 무엇인가요?",
      code: `
        let bbb: string = "반갑습니다";
        bbb = 10;
      `,
      answer: "Type error",
      explanation:
        "변수 'bbb'는 문자열 타입으로 선언되었기 때문에 숫자를 할당하려고 하면 타입 에러가 발생합니다.",
    },
    {
      questionText:
        "변수 'eee'에 불린 값을 할당한 후, 문자열을 할당하려고 할 때 발생하는 에러는 무엇인가요?",
      code: `
        let eee: boolean = true;
        eee = false;
        eee = "false";
      `,
      answer: "Type error",
      explanation:
        "변수 'eee'는 불린 타입으로 선언되었기 때문에 문자열을 할당하려고 하면 타입 에러가 발생합니다.",
    },
    {
      questionText:
        "아래 코드에서 'fff'와 'ggg' 변수에 각각 할당 가능한 배열의 타입은 무엇인가요?",
      code: `
        let fff: ______ = [1, 2, 3, 4, 5, "안녕하세요"];
        let ggg: ______ = ["철수", "영희", "훈이", 10];
      `,
      answerOptions: [
        "(number | string)[], (string | number)[]",
        "number[], string[]",
        "(number | string)[], string[]",
        "number[], (string | number)[]",
      ],
      answer: "(number | string)[], (string | number)[]",
      explanation:
        "'fff'와 'ggg' 변수는 숫자와 문자열을 모두 포함하는 배열을 가지므로, 빈 칸에는 '(number | string)[]'가 들어가야 합니다.",
    },
    {
      questionText:
        "아래 코드에서 'profile' 객체의 'age' 프로퍼티 값으로 숫자와 문자열 모두가 할당될 수 있도록 'IProfile' 인터페이스의 'age' 프로퍼티에 적합한 타입은 무엇인가요?",
      code: `
        interface IProfile {
          name: string;
          age: ______;
          school: string;
          hobby?: string;
        }
    
        const profile: IProfile = {
          name: "철수",
          age: "8살",
          school: "다람쥐초등학교",
        };
      `,
      answerOptions: ["string", "number", "string | number", "any"],
      answer: "string | number",
      explanation:
        "'age' 프로퍼티에는 숫자와 문자열 모두가 할당될 수 있으므로, 'age' 프로퍼티의 타입은 'string | number'이어야 합니다.",
    },

    {
      questionText:
        "아래 'add' 함수에서 'num2' 매개변수에 할당 가능한 타입은 무엇인가요?",
      code: `
        function add(num1: number, num2: ______, unit: string): string {
          return num1 + num2 + unit;
        }
        add(1000, 2000, "원");
      `,
      answerOptions: ["string", "number", "string | number", "any"],
      answer: "number",
      explanation: "'add' 함수의 'num2' 매개변수는 숫자 값을 받아야 합니다.",
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
    const userAnswers = userAnswer
      .split(",")
      .map((ans) => ans.replace(/\s/g, "").toLowerCase()); // 콤마 뒤의 공백 제거 및 소문자로 변환
    const correctAnswers = String(questions[currentQuestion].answer)
      .split(",")
      .map((ans) => ans.replace(/\s/g, "").toLowerCase()); // 콤마 뒤의 공백 제거 및 소문자로 변환

    if (userAnswers.length !== correctAnswers.length) {
      setIsCorrect(false);
    } else {
      const isAllCorrect = userAnswers.every((ans, index) => {
        return ans === correctAnswers[index];
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

// 타입스크립트의 개념

// 타입스크립트 만드는 방법

// 타입스크립트 설치 과정(yarn으로 되어 있을 경우)
// 을 명령어 중심으로

// dependencies와 devDependecies의 차이

// tsconfig.json은 무엇인가?

// nest.js에서 tsconfig.json이 빈칸일 때 감지를 해서 자동적으로 채워지게 하는 방법.
// 그리고 해당 방법을 실행하기 위해 수행해야할 명령어

// 타입스크립트의 용도는?

// js를 tsx로 바꾸는 과정

// jsx가 무엇인가

// tsx와 ts의 차이점
