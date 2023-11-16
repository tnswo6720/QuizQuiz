import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "주어진 배열의 모든 요소를 두 배로 만드는 새 배열을 만들려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const array = [1, 2, 3, 4, 5];
      const newArray = array.______(num => num * 2);
      `,
      answerOptions: ["map", "filter", "reduce", "forEach"],
      answer: "map",
      explanation:
        "'map' 메소드는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과를 모아 새로운 배열을 반환합니다. 따라서 배열의 모든 요소를 두 배로 만든 새 배열을 만들기 위해 'map' 메소드를 사용합니다.",
    },
    {
      questionText:
        "변수 'x'를 선언하고, 이를 함수 'myFunction' 내에서 사용하려고 합니다. 이때 'x'는 함수 외부에서 선언되었지만, 함수 내부에서 접근이 가능해야 합니다. 다음 코드에서 빈칸에 들어갈 적절한 키워드는 무엇일까요?",
      code: `
      ______ x = 10;
    
      function myFunction() {
        console.log(x);
      }
    
      myFunction();
      `,
      answerOptions: ["var", "let", "const", "static"],
      answer: "let",
      explanation:
        "'let' 키워드를 사용하여 변수를 선언하면, 그 변수는 선언된 블록, 그 블록의 하위 블록 내에서만 접근 가능합니다. 따라서 함수 'myFunction' 내에서도 변수 'x'를 접근할 수 있습니다.",
    },
    {
      questionText:
        "배열의 요소 중에서 3보다 큰 요소만을 추출하여 새로운 배열을 만들려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const array = [1, 2, 3, 4, 5];
      const result = array.______(num => num > 3);
      `,
      answerOptions: ["find", "filter", "reduce", "map"],
      answer: "filter",
      explanation:
        "'filter' 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 만듭니다. 따라서 3보다 큰 요소만을 추출하여 새로운 배열을 만들기 위해 'filter' 메소드를 사용합니다.",
    },
    {
      questionText:
        "주어진 문자열에서 모든 공백을 제거하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const str = "Hello, World!";
      const newStr = str.______(' ', '');
      `,
      answerOptions: ["replace", "trim", "split", "splice"],
      answer: "replace",
      explanation:
        "'replace' 메소드는 문자열에서 일부 또는 모든 패턴을 대체하는 데 사용됩니다. 첫 번째 인자는 찾을 패턴이고, 두 번째 인자는 그 패턴을 대체할 문자열입니다. 따라서 문자열에서 모든 공백을 제거하기 위해 'replace' 메소드를 사용합니다.",
    },
    {
      questionText:
        "주어진 배열에서 마지막 요소를 제거하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const array = [1, 2, 3, 4, 5];
      array.______();
      `,
      answerOptions: ["pop", "push", "shift", "unshift"],
      answer: "pop",
      explanation:
        "'pop' 메소드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다. 따라서 배열에서 마지막 요소를 제거하기 위해 'pop' 메소드를 사용합니다.",
    },
    {
      questionText:
        "주어진 배열의 모든 요소에 대해 주어진 함수를 실행하려고 합니다. 해당 함수는 배열의 요소를 매개변수로 받아 특정 작업을 수행합니다. 이를 위해 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const array = [1, 2, 3, 4, 5];
      array.______(num => console.log(num * 2));
      `,
      answerOptions: ["forEach", "map", "filter", "reduce"],
      answer: "forEach",
      explanation:
        "'forEach' 메소드는 주어진 함수를 배열의 각 요소에 대해 실행합니다. 따라서 배열의 모든 요소에 대해 주어진 함수를 실행하기 위해 'forEach' 메소드를 사용합니다.",
    },
    {
      questionText:
        "주어진 배열에서 첫 번째 요소를 제거하려고 합니다. 이를 위해 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const array = [1, 2, 3, 4, 5];
      array.______();
      `,
      answerOptions: ["shift", "unshift", "pop", "push"],
      answer: "shift",
      explanation:
        "'shift' 메소드는 배열에서 첫 번째 요소를 제거하고 그 요소를 반환합니다. 따라서 배열에서 첫 번째 요소를 제거하기 위해 'shift' 메소드를 사용합니다.",
    },
    {
      questionText:
        "JavaScript에서 배열의 길이를 얻으려면 어떤 속성을 사용해야 하나요?",
      code: `
        var arr = [1, 2, 3, 4, 5];
        var length = arr.______;
      `,
      answerOptions: ["length", "size", "count", "capacity"],
      answer: "length",
      explanation:
        "JavaScript에서 배열의 길이를 얻으려면 'length' 속성을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "JavaScript에서 비동기 함수를 실행하고 그 결과를 얻으려면 어떤 키워드를 사용해야 하나요?",
      code: `
        async function fetchData() {
          // ...
        }
    
        var data = fetchData().______;
      `,
      answerOptions: ["then", "catch", "finally", "async"],
      answer: "then",
      explanation:
        "JavaScript에서 Promise를 반환하는 비동기 함수의 결과를 얻으려면 'then' 메서드를 사용해야 합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "코드의 첫 줄에서 특정 모드를 활성화하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 JavaScript 키워드는 무엇일까요?",
      code: `
        ______ "use strict";
        function testStrict() {
          var v = "I'm strict mode!";
        }
      `,
      answerOptions: ["console.log", "alert", "write", "var"],
      answer: "var",
      explanation:
        "변수 'use strict'를 선언하려면 'var' 키워드를 사용해야 합니다.",
    },

    {
      questionText:
        "다음과 같은 숫자 배열이 있습니다. 이 배열의 특정 위치에 있는 요소를 얻고 싶습니다. 아래의 코드에서 빈칸에 들어갈 수 있는 코드는 무엇일까요?",
      code: `
        var arr = [1, 2, 3, 4, 5];
        var last = arr[______];
      `,
      answerOptions: [
        "arr.length",
        "arr.length - 1",
        "arr.length + 1",
        "arr.length / 2",
      ],
      answer: "arr.length - 1",
      explanation:
        "배열의 마지막 요소를 얻으려면, 배열의 길이보다 1을 뺀 값을 인덱스로 사용해야 합니다.",
    },

    {
      questionText:
        "비동기 처리를 위해 특정 객체를 생성하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 JavaScript 객체는 무엇일까요?",
      code: `
        var promise = new ______((resolve, reject) => {
          resolve("Success!");
        });
      `,
      answerOptions: ["Async", "Await", "Promise", "Async/Await"],
      answer: "Promise",
      explanation:
        "JavaScript에서 비동기 처리를 위해 'Promise' 객체를 사용합니다. 이 객체는 비동기 작업의 성공 또는 실패를 나타냅니다.",
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
  const createAnswerCode = (question, answer) => {
    const { code } = question;
    return code.replace("______", answer);
  };
  const handleSubmit = () => {
    if (userAnswer === questions[currentQuestion].answer) {
      setIsCorrect(true);
      setIsSubmitted(true);
    } else {
      setIsCorrect(false);
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    if (!isCorrect) {
      // 정답을 틀렸을 경우에만 정답 코드를 검사합니다.
      const correctCode = createAnswerCode(
        questions[currentQuestion],
        questions[currentQuestion].answer
      );
      if (
        answerCode.replace(/\s/g, "").toLowerCase() !==
        correctCode.replace(/\s/g, "").toLowerCase()
      ) {
        return; // 정답 코드가 틀렸다면 함수를 더 이상 실행하지 않습니다.
      }
    }

    // 정답을 맞추었거나, 틀렸지만 정답 코드를 맞게 입력했다면 다음 문제로 넘어갑니다.
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setAnswerCode("");
    setIsSubmitted(false);
    setIsCorrect(null);
    setShowHint(false);
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
