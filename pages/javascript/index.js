import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText: "JavaScript에서 'entries' 메소드는 어떤 작업을 수행하나요?",
      code: "",
      answerOptions: [
        "객체의 모든 열거 가능한 속성의 [key, value] 쌍의 배열을 반환한다",
        "객체의 모든 열거 가능한 속성의 키의 배열을 반환한다",
        "객체의 모든 열거 가능한 속성의 값의 배열을 반환한다",
        "객체의 모든 열거 불가능한 속성의 [key, value] 쌍의 배열을 반환한다",
      ],
      answer:
        "객체의 모든 열거 가능한 속성의 [key, value] 쌍의 배열을 반환한다",
      explanation:
        "'entries' 메소드는 객체의 모든 열거 가능한 속성의 [key, value] 쌍의 배열을 반환합니다. 이 메소드는 배열, Map, Set 등 다양한 자료구조에서 사용할 수 있습니다.",
      explanationCode: `
    const obj = { a: 'one', b: 'two', c: 'three' };
    const entries = Object.entries(obj);
    console.log(entries); // [["a", "one"], ["b", "two"], ["c", "three"]]
  `,
    },
    {
      questionText:
        "JavaScript에서 배열의 'entries' 메소드를 사용하면 어떤 결과를 얻을 수 있나요?",
      code: "",
      answerOptions: [
        "배열의 각 인덱스와 값을 포함하는 새로운 반복 가능한 객체를 반환한다",
        "배열의 모든 열거 가능한 속성의 [key, value] 쌍의 배열을 반환한다",
        "배열의 모든 요소를 열거하는 새로운 반복 가능한 객체를 반환한다",
        "배열의 첫 번째 요소를 반환한다",
      ],
      answer:
        "배열의 각 인덱스와 값을 포함하는 새로운 반복 가능한 객체를 반환한다",
      explanation:
        "배열에서 'entries' 메소드를 사용하면, 배열의 각 인덱스와 값을 포함하는 새로운 반복 가능한 객체를 반환합니다. 이 반복 가능한 객체를 순회하면서 배열의 인덱스와 값을 함께 사용할 수 있습니다.",
      explanationCode: `
    const arr = ['a', 'b', 'c'];
    const iterator = arr.entries();
    for (let entry of iterator) {
      console.log(entry); // [0, 'a'], [1, 'b'], [2, 'c']
    }
  `,
    },
    {
      questionText: "JavaScript에서 'map' 메소드는 어떤 작업을 수행하나요?",
      code: "",
      answerOptions: [
        "배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 결과로 새로운 배열을 생성한다",
        "배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 결과를 기존 배열에 덮어쓴다",
        "배열의 첫 번째 요소부터 시작하여 주어진 함수를 각 요소에 대해 실행하고, 그 결과를 누적한다",
        "배열의 마지막 요소부터 시작하여 주어진 함수를 각 요소에 대해 실행하고, 그 결과를 누적한다",
      ],
      answer:
        "배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 결과로 새로운 배열을 생성한다",
      explanation:
        "'map' 메소드는 배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 결과로 새로운 배열을 생성합니다. 기존 배열은 변경되지 않습니다.",
      explanationCode: `
        const arr = [1, 2, 3, 4, 5];
        const newArr = arr.map(x => x * 2);
        console.log(newArr); // [2, 4, 6, 8, 10]
      `,
    },
    {
      questionText: "JavaScript에서 'filter' 메소드는 어떤 작업을 수행하나요?",
      code: "",
      answerOptions: [
        "배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 함수를 통과하는 요소로 새로운 배열을 생성한다",
        "배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 함수를 통과하지 않는 요소를 기존 배열에서 제거한다",
        "배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 결과를 기존 배열에 덮어쓴다",
        "배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 함수를 통과하는 요소를 기존 배열에서 제거한다",
      ],
      answer:
        "배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 함수를 통과하는 요소로 새로운 배열을 생성한다",
      explanation:
        "'filter' 메소드는 배열의 모든 요소를 순회하면서 주어진 함수를 각 요소에 대해 실행하고, 그 함수를 통과하는 요소로 새로운 배열을 생성합니다. 기존 배열은 변경되지 않습니다.",
      explanationCode: `
        const arr = [1, 2, 3, 4, 5];
        const newArr = arr.filter(x => x % 2 === 0);
        console.log(newArr); // [2, 4]
      `,
    },
    {
      questionText: "JavaScript에서 'this' 키워드는 어떤 값을 참조하나요?",
      code: "",
      answerOptions: [
        "'this' 키워드는 함수가 호출된 컨텍스트를 참조한다",
        "'this' 키워드는 항상 전역 객체를 참조한다",
        "'this' 키워드는 항상 현재 함수를 참조한다",
        "'this' 키워드는 항상 undefined를 참조한다",
      ],
      answer: "'this' 키워드는 함수가 호출된 컨텍스트를 참조한다",
      explanation:
        "'this' 키워드는 함수가 호출된 컨텍스트를 참조합니다. 'this'의 값은 함수가 어떻게 호출되었는지에 따라 달라집니다. 일반 함수에서 'this'는 전역 객체를 참조하거나(undefined in strict mode), 메소드에서 'this'는 메소드를 호출한 객체를 참조하며, 생성자 함수에서 'this'는 새로 생성된 객체를 참조합니다.",
      explanationCode: `
        function normalFunction() {
          console.log(this);
        }
        normalFunction(); // window (or undefined in strict mode)
    
        const obj = {
          method: function() {
            console.log(this);
          }
        };
        obj.method(); // obj
    
        function ConstructorFunction() {
          console.log(this);
        }
        new ConstructorFunction(); // ConstructorFunction {}
      `,
    },
    {
      questionText: "JavaScript에서 'closure'는 무엇을 의미하나요?",
      code: "",
      answerOptions: [
        "함수와 그 함수가 선언된 렉시컬 환경의 조합을 의미한다",
        "함수 내부에서만 접근할 수 있는 변수를 의미한다",
        "함수를 반환하는 함수를 의미한다",
        "함수가 호출될 때마다 생성되는 새로운 스코프를 의미한다",
      ],
      answer: "함수와 그 함수가 선언된 렉시컬 환경의 조합을 의미한다",
      explanation:
        "클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합입니다. 이를 통해 함수는 선언된 환경 외부에서 호출되더라도, 그 환경에 접근할 수 있습니다.",
      explanationCode: `
        function outerFunction() {
          let variable = 'I am from outer function!';
          function innerFunction() {
            console.log(variable);
          }
          return innerFunction;
        }
    
        const closure = outerFunction();
        closure(); // 'I am from outer function!'
      `,
    },
    {
      questionText: "JavaScript에서 'Promise' 객체는 어떤 용도로 사용되나요?",
      code: "",
      answerOptions: [
        "비동기 작업의 최종 완료 혹은 실패와 그 결과 값을 나타낸다",
        "동기 작업의 최종 완료 혹은 실패와 그 결과 값을 나타낸다",
        "함수의 매개변수를 검증하는 데 사용된다",
        "배열이나 객체 등의 데이터를 저장하는 데 사용된다",
      ],
      answer: "비동기 작업의 최종 완료 혹은 실패와 그 결과 값을 나타낸다",
      explanation:
        "'Promise' 객체는 비동기 작업의 최종 완료(또는 실패)와 그 결과 값을 나타내는 JavaScript 객체입니다. 'Promise'는 최종 결과가 준비되기 전에 비동기 작업의 완료를 대기하거나, 그 결과를 처리할 수 있게 합니다.",
      explanationCode: `
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('Promise is resolved!');
          }, 1000);
        });
    
        promise.then(result => console.log(result)); // 'Promise is resolved!'
      `,
    },
    {
      questionText: "JavaScript에서 'async/await'는 어떤 용도로 사용되나요?",
      code: "",
      answerOptions: [
        "'async/await'는 Promise 기반의 비동기 작업을 동기적인 방식으로 작성할 수 있게 해준다",
        "'async/await'는 새로운 비동기 작업을 생성하고, 그 작업을 즉시 실행한다",
        "'async/await'는 함수의 매개변수를 검증하는 데 사용된다",
        "'async/await'는 배열이나 객체 등의 데이터를 저장하는 데 사용된다",
      ],
      answer:
        "'async/await'는 Promise 기반의 비동기 작업을 동기적인 방식으로 작성할 수 있게 해준다",
      explanation:
        "'async/await'는 Promise 기반의 비동기 작업을 동기적인 방식으로 작성할 수 있게 해주는 JavaScript의 문법입니다. 'async' 키워드로 선언된 함수 내부에서 'await' 키워드를 사용하면 Promise의 완료를 기다릴 수 있습니다.",
      explanationCode: `
        async function asyncFunction() {
          const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Promise is resolved!');
            }, 1000);
          });
    
          const result = await promise;
          console.log(result); // 'Promise is resolved!'
        }
    
        asyncFunction();
      `,
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
