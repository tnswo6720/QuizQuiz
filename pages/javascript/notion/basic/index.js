import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "다음 중 자바스크립트에서 'let' 키워드의 특징으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "'let'으로 선언된 변수는 재할당이 가능하다.",
        "'let'으로 선언된 변수는 블록 범위(block scope)를 가진다.",
        "'let'으로 선언된 변수는 호이스팅(hoisting)에 영향을 받지 않는다.",
        "'let'으로 선언된 변수는 해당 범위에서만 사용할 수 있다.",
      ],
      answer:
        "'let'으로 선언된 변수는 호이스팅(hoisting)에 영향을 받지 않는다.",
      explanation:
        "'let'으로 선언된 변수는 호이스팅에 영향을 받지만, 초기화 이전에 접근할 수 없는 '임시 사각 지대(TDZ)'가 존재합니다.",
      explanationCode: `console.log(x); // ReferenceError: x is not defined
      let x = 5;`,
    },
    {
      questionText: "다음 중 'NaN'에 대한 설명으로 올바른 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "'NaN'은 'Not a Number'의 약자로, 숫자가 아닌 값을 숫자로 변환하려고 할 때 반환된다.",
        "'NaN'은 'Null and Null'의 약자로, 두 개의 null 값을 더하려고 할 때 반환된다.",
        "'NaN'은 'Not a Null'의 약자로, null이 아닌 값을 null로 변환하려고 할 때 반환된다.",
        "'NaN'은 'Not a Name'의 약자로, 선언되지 않은 변수에 접근하려고 할 때 반환된다.",
      ],
      answer:
        "'NaN'은 'Not a Number'의 약자로, 숫자가 아닌 값을 숫자로 변환하려고 할 때 반환된다.",
      explanation:
        "'NaN'은 'Not a Number'의 약자로, 숫자가 아닌 값을 숫자로 변환하려고 할 때 반환되는 특수한 값입니다.",
      explanationCode: `console.log(Number('Hello')); // NaN`,
    },
    {
      questionText:
        "다음 중 'null'과 'undefined'의 차이점으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "'undefined'는 값이 할당되지 않은 변수, 'null'은 값이 없음을 명시적으로 나타내고자 할 때 사용한다.",
        "'undefined'는 자바스크립트에서 자동으로 할당되는 값이며, 'null'은 사용자가 명시적으로 할당하는 값이다.",
        "'undefined'와 'null'은 동일하게 '값이 없음'을 나타내는 값이다.",
        "'undefined'는 변수 자체가 존재하지 않음을 나타내며, 'null'은 변수가 존재하지만 값이 없음을 나타낸다.",
      ],
      answer:
        "'undefined'는 변수 자체가 존재하지 않음을 나타내며, 'null'은 변수가 존재하지만 값이 없음을 나타낸다.",
      explanation:
        "'undefined'는 값이 할당되지 않은 변수 또는 존재하지 않는 객체 프로퍼티에 접근하려고 할 때 반환되는 값입니다. 'null'은 값이 없음을 명시적으로 나타내고자 할 때 사용하는 특수한 값입니다.",
      explanationCode: `let x;
      console.log(x); // undefined
    
      let y = null;
      console.log(y); // null`,
    },
    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `if ('false') {
        console.log('true');
      } else {
        console.log('false');
      }`,
      answerOptions: ["true", "false", "undefined", "ReferenceError"],
      answer: "true",
      explanation:
        "자바스크립트에서 문자열 'false'는 truthy 값으로 간주되므로, 'if' 문의 조건문이 참으로 평가되어 'true'가 출력됩니다.",
      explanationCode: `if ('false') {
        console.log('true'); // 이 부분이 실행됩니다.
      } else {
        console.log('false');
      }`,
    },
    {
      questionText:
        "다음 중 'boolean' 데이터 타입에 대한 설명으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "'boolean'은 참(true) 또는 거짓(false) 두 가지 값만 가질 수 있는 데이터 타입이다.",
        "'boolean'은 숫자나 문자열과 같이 연산이 가능하다.",
        "'boolean'은 '0' 또는 '1'의 값을 가진다.",
        "'boolean'은 조건문에서 주로 사용된다.",
      ],
      answer: "'boolean'은 '0' 또는 '1'의 값을 가진다.",
      explanation:
        "'boolean'은 'true' 또는 'false' 두 가지 값만 가질 수 있습니다. '0' 또는 '1'이 아닙니다.",
      explanationCode: `let bool = true;
      console.log(bool); // true
    
      bool = false;
      console.log(bool); // false`,
    },
    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `console.log(1 == '1');
      console.log(1 === '1');`,
      answerOptions: [
        "true, true",
        "true, false",
        "false, true",
        "false, false",
      ],
      answer: "true, false",
      explanation:
        "'==' 연산자는 값만을 비교하므로, 숫자 1과 문자열 '1'은 같다고 판단합니다. 반면 '===' 연산자는 값 뿐만 아니라 타입까지 비교하므로, 숫자 1과 문자열 '1'은 다르다고 판단합니다.",
      explanationCode: `console.log(1 == '1');  // true
      console.log(1 === '1'); // false`,
    },
    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `let x = 0;
      while (x < 3) {
        console.log('Hello');
        x++;
      }`,
      answerOptions: [
        "'Hello'가 세 번 출력된다.",
        "'Hello'가 무한히 출력된다.",
        "'Hello'가 한 번만 출력된다.",
        "아무것도 출력되지 않는다.",
      ],
      answer: "'Hello'가 세 번 출력된다.",
      explanation:
        "while 문은 주어진 조건이 참인 동안 코드 블록을 실행합니다. 'x++'에 의해 x의 값이 1씩 증가하므로, 'Hello'가 세 번 출력된 후 x의 값이 3이 되어 조건이 거짓이 됩니다.",
      explanationCode: `let x = 0;
      while (x < 3) {
        console.log('Hello'); // 'Hello'가 세 번 출력된다.
        x++;
      }`,
    },
    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `const arr = [1, 2, 3];
      const newArr = arr.filter(num => num > 1);
      console.log(newArr);`,
      answerOptions: ["[1, 2, 3]", "[1]", "[2, 3]", "[]"],
      answer: "[2, 3]",
      explanation:
        "'filter' 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 만듭니다. 따라서, 1보다 큰 요소 [2, 3]을 모아 새 배열을 만듭니다.",
      explanationCode: `const arr = [1, 2, 3];
      const newArr = arr.filter(num => num > 1);
      console.log(newArr); // [2, 3]`,
    },
    {
      questionText:
        "자바스크립트에서 'const' 키워드로 선언된 변수의 특징은 무엇인가요?",
      code: "",
      answerOptions: [
        "'const'로 선언된 변수는 재할당이 가능하다.",
        "'const'로 선언된 변수는 값이 변경될 수 없다.",
        "'const'로 선언된 변수는 값을 초기화하지 않아도 된다.",
        "'const'로 선언된 변수는 블록 범위(block scope)를 가지지 않는다.",
      ],
      answer: "'const'로 선언된 변수는 값이 변경될 수 없다.",
      explanation:
        "'const'로 선언된 변수는 한 번 할당된 값을 변경할 수 없습니다. 이는 재할당 뿐만 아니라 재선언도 불가능하다는 것을 의미합니다.",
      explanationCode: `const x = 10;
      x = 20; // TypeError: Assignment to constant variable.`,
    },
    {
      questionText: "다음 코드의 출력 결과는 무엇일까요?",
      code: `console.log(10 > 9);
      console.log(10 == 9);
      console.log(10 < 9);`,
      answerOptions: [
        "true, false, false",
        "true, false, true",
        "false, true, false",
        "false, false, true",
      ],
      answer: "true, false, false",
      explanation:
        "자바스크립트에서 비교 연산자는 두 피연산자를 비교하고 그 결과를 불리언 값으로 반환합니다. 따라서 각각 '10 > 9', '10 == 9', '10 < 9'의 결과는 'true', 'false', 'false'입니다.",
      explanationCode: `console.log(10 > 9);  // true
      console.log(10 == 9); // false
      console.log(10 < 9);  // false`,
    },
    {
      questionText:
        "'for' 반복문을 사용하여 1부터 5까지의 숫자를 출력하는 올바른 코드는 무엇인가요?",
      code: `for (___; ___; ___) {
        console.log(____);
      }`,
      answerOptions: [
        "let i = 1; i <= 5; i++, i",
        "let i = 0; i < 5; i++, i",
        "let i = 1; i <= 5; i++, i+1",
        "let i = 1; i < 5; i++, i",
      ],
      answer: "let i = 1; i <= 5; i++, i",
      explanation:
        "'for' 반복문은 초기화, 조건, 증감식을 이용하여 코드 블록을 반복하여 실행합니다. 따라서 'i'를 1부터 시작하여 5 이하일 동안 1씩 증가시키면서 'i'를 출력하는 코드가 필요합니다.",
      explanationCode: `for (let i = 1; i <= 5; i++) {
        console.log(i); // 1, 2, 3, 4, 5 순서로 출력된다.
      }`,
    },
    {
      questionText: "다음 코드를 실행하면 어떤 값이 출력될까요?",
      code: `
        function calculate(a, b) {
          return a * b;
        }
    
        let x = calculate(7, 3);
        let y = x;
        y = calculate(2, 5);
    
        console.log(x);
      `,
      answerOptions: ["21", "10", "undefined", "TypeError"],
      answer: "21",
      explanation:
        "자바스크립트에서 기본 데이터 타입들은 값에 의한 전달(Pass by Value) 방식을 사용합니다. 따라서 'y' 변수에 다른 값을 할당하더라도 'x' 변수의 값은 변하지 않습니다.",
      explanationCode: `
        function calculate(a, b) {
          return a * b;
        }
    
        let x = calculate(7, 3); // x = 21
        let y = x; // y = 21
        y = calculate(2, 5); // y = 10
    
        console.log(x); // 21
      `,
    },

    {
      questionText:
        "다음 중 자바스크립트에서 'undefined'와 'null'의 차이점은 무엇일까요?",
      answerOptions: [
        "'null'은 값이 없음을 의미하고, 'undefined'는 변수가 선언되었지만 값이 할당되지 않았음을 의미한다.",
        "'null'은 변수가 선언되었지만 값이 할당되지 않았음을 의미하고, 'undefined'는 값이 없음을 의미한다.",
        "'null'과 'undefined'는 동일한 의미를 가진다.",
        "'null'은 값이 0임을 의미하고, 'undefined'는 값이 할당되지 않았음을 의미한다.",
      ],
      answer:
        "'null'은 값이 없음을 의미하고, 'undefined'는 변수가 선언되었지만 값이 할당되지 않았음을 의미한다.",
      explanation:
        "'null'은 명시적으로 값이 없음을 표현할 때 사용합니다. 반면 'undefined'는 변수가 선언되었지만 아직 값이 할당되지 않은 상태를 나타냅니다.",
    },

    {
      questionText: "다음 코드를 실행하면 어떤 값이 출력될까요?",
      code: `
        let a;
        let b = null;
    
        console.log(typeof a, typeof b);
      `,
      answerOptions: [
        "'undefined' 'object'",
        "'undefined' 'null'",
        "'object' 'null'",
        "'object' 'undefined'",
      ],
      answer: "'undefined' 'object'",
      explanation:
        "자바스크립트에서 선언만 되고 초기화되지 않은 변수의 타입은 'undefined'입니다. 반면 'null'은 개발자가 명시적으로 값이 '없음'을 나타내기 위해 사용하는 특별한 값으로, 타입은 'object'로 표시됩니다.",
      explanationCode: `
        let a; // a는 선언만 되어 있으므로 타입은 'undefined'
        let b = null; // b는 명시적으로 'null'로 초기화되었으므로 타입은 'object'
    
        console.log(typeof a, typeof b); // 'undefined' 'object'
      `,
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
    setIsCorrect(userAnswer === questions[currentQuestion].answer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
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
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
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
              <pre>{questions[currentQuestion].explanationCode}</pre>{" "}
              {/* 설명에 대한 예시 코드를 보여줍니다. */}
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
