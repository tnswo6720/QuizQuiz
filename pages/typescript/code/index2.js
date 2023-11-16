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
        "주어진 문자열에서 특정 문자나 문자열을 찾아 다른 문자열로 대체하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const str = "Hello, World!";
      const newStr = str.______('World', 'Everyone');
      `,
      answerOptions: ["replace", "split", "splice", "join"],
      answer: "replace",
      explanation:
        "'replace' 메소드는 문자열에서 일정 패턴을 찾아 다른 문자열로 대체하는데 사용됩니다. 첫 번째 인자는 찾을 패턴이고, 두 번째 인자는 그 패턴을 대체할 문자열입니다. 따라서 문자열에서 'World'를 'Everyone'으로 바꾸기 위해 'replace' 메소드를 사용합니다.",
    },
    {
      questionText:
        "주어진 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과를 모아 새 배열을 만들려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const array = ['1', '2', '3', '4', '5'];
      const newArray = array.______(str => parseInt(str));
      `,
      answerOptions: ["map", "forEach", "filter", "reduce"],
      answer: "map",
      explanation:
        "'map' 메소드는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과를 모아 새 배열을 반환합니다. 따라서 배열의 각 요소를 정수로 변환한 새 배열을 만들기 위해 'map' 메소드를 사용합니다.",
    },
    {
      questionText:
        "주어진 숫자가 짝수인지 확인하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 연산자는 무엇일까요?",
      code: `
      const num = 10;
      const isEven = num ____ 2 === 0;
      `,
      answerOptions: ["+", "-", "*", "%"],
      answer: "%",
      explanation:
        "숫자를 2로 나눈 나머지가 0이면 그 숫자는 짝수입니다. 이를 확인하기 위해 '%' 연산자를 사용합니다.",
    },
    {
      questionText:
        "주어진 배열의 모든 요소를 합치려고 합니다. 이때, 초기 값을 0으로 설정하고 각 요소를 더해나갑니다. 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const array = [1, 2, 3, 4, 5];
      const sum = array.______((total, num) => total + num, 0);
      `,
      answerOptions: ["map", "filter", "reduce", "forEach"],
      answer: "reduce",
      explanation:
        "'reduce' 메소드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 단일 출력값을 반환합니다. 이를 통해 배열의 모든 요소를 합할 수 있습니다.",
    },
    {
      questionText:
        "주어진 객체가 특정 키를 가지고 있는지 확인하려고 합니다. 이를 위해 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
      const obj = { a: 1, b: 2, c: 3 };
      const hasKey = obj.______('b');
      `,
      answerOptions: ["hasOwnProperty", "includes", "indexOf", "find"],
      answer: "hasOwnProperty",
      explanation:
        "'hasOwnProperty' 메소드는 객체가 특정 속성을 자신의 직접적인 속성으로 가지고 있는지를 판별합니다. 따라서 객체가 'b'라는 키를 가지고 있는지 확인하기 위해 'hasOwnProperty' 메소드를 사용합니다.",
    },
    {
      questionText:
        "자바스크립트에서 비동기 작업을 처리하기 위해 사용하는 내장 객체는 무엇일까요?",
      code: `
      ______.resolve('Success').then((value) => console.log(value));
      `,
      answerOptions: ["Array", "Function", "Promise", "Object"],
      answer: "Promise",
      explanation:
        "비동기 작업을 처리하고 그 결과를 나타내는 데에는 'Promise' 객체가 사용됩니다. 'Promise' 객체는 비동기 작업이 완료될 때까지 기다렸다가, 작업이 성공적으로 완료되면 그 결과를 반환하거나 실패하면 오류를 반환합니다.",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false); // 힌트를 보여줄지 말지를 결정하는 상태를 추가합니다.

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
  const handleSubmit = () => {
    setIsCorrect(userAnswer === questions[currentQuestion].answer);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
    setShowHint(false); // 다음 문제로 넘어갈 때 힌트를 가려둡니다.
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
            {showHint ? ( // showHint 상태에 따라 선택지를 조건부 렌더링합니다.
              questions[currentQuestion].answerOptions.map((option, index) => (
                <p key={index}>{option}</p>
              ))
            ) : (
              <button onClick={handleShowHint}>힌트 보기</button> // 힌트 보기 버튼을 추가합니다.
            )}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>제출</button>
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
              {currentQuestion < questions.length - 1 && (
                <button onClick={handleNext}>다음 문제</button>
              )}
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
