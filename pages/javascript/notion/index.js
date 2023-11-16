import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "'forEach'와 'map' 메소드의 주요 차이점은 무엇인가요?",
      code: "", // 문제에 사용될 코드를 넣습니다.
      answerOptions: [
        "둘 다 배열의 각 요소에 함수를 적용하지만, 'forEach'는 새로운 배열을 반환하고 'map'은 반환하지 않는다.",
        "둘 다 배열의 각 요소에 함수를 적용하지만, 'map'은 새로운 배열을 반환하고 'forEach'는 반환하지 않는다.",
        "'forEach'는 배열의 각 요소에 함수를 적용하지만, 'map'은 그렇지 않다.",
        "'map'은 배열의 각 요소에 함수를 적용하지만, 'forEach'는 그렇지 않다.",
      ],
      answer:
        "둘 다 배열의 각 요소에 함수를 적용하지만, 'map'은 새로운 배열을 반환하고 'forEach'는 반환하지 않는다.",
      explanation:
        "'forEach'와 'map' 메소드는 모두 배열의 각 요소에 함수를 적용합니다. 하지만 'map' 메소드는 함수를 적용한 결과를 모아 새로운 배열을 반환하고, 'forEach' 메소드는 아무것도 반환하지 않습니다. ",
      explanationCode: `// 'map' 메소드 사용 예시
      const array1 = [1, 2, 3, 4, 5];
      const newArray1 = array1.map(num => num * 2);
      console.log(newArray1); // [2, 4, 6, 8, 10] 출력
      console.log(array1);    // [1, 2, 3, 4, 5] 출력, 원본 배열은 변하지 않습니다.
      
      // 'forEach' 메소드 사용 예시
      const array2 = [1, 2, 3, 4, 5];
      array2.forEach((num, index) => {
        array2[index] = num * 2; // 원본 배열의 요소를 직접 수정합니다.
      });
      console.log(array2); // [2, 4, 6, 8, 10] 출력`,
    },
    {
      questionText:
        "JavaScript에서 '=='와 '===' 연산자의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'=='는 값만 비교하고, '==='는 값과 타입 모두를 비교한다",
        "'=='는 값과 타입 모두를 비교하고, '==='는 값만 비교한다",
        "'=='와 '===' 모두 값만 비교한다",
        "'=='와 '===' 모두 값과 타입 모두를 비교한다",
      ],
      answer: "'=='는 값만 비교하고, '==='는 값과 타입 모두를 비교한다",
      explanation:
        "'==' 연산자는 피연산자들이 같은 값으로 간주될 수 있는지를 비교하는 반면, '===' 연산자는 피연산자들이 같은 값이면서 동일한 타입인지를 비교합니다.",
      explanationCode: `/* JavaScript 코드 */
        var num = 5;
        var str = "5";
        
        console.log(num == str);  // true
        console.log(num === str); // false`,
    },
    {
      questionText:
        "JavaScript에서 'let'과 'const' 변수 선언의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'let'은 재할당이 가능하고, 'const'는 재할당이 불가능하다",
        "'let'은 재할당이 불가능하고, 'const'는 재할당이 가능하다",
        "'let'과 'const' 모두 재할당이 가능하다",
        "'let'과 'const' 모두 재할당이 불가능하다",
      ],
      answer: "'let'은 재할당이 가능하고, 'const'는 재할당이 불가능하다",
      explanation:
        "'let' 선언은 변수에 새로운 값을 할당할 수 있게 해주지만, 'const' 선언은 한번 선언된 변수에 새로운 값을 할당할 수 없게 합니다.",
      explanationCode: `/* JavaScript 코드 */
        let variable = 1;
        variable = 2; // 가능
    
        const constant = 1;
        constant = 2; // 에러 발생`,
    },
    {
      questionText:
        "자바스크립트에서 'null'과 'undefined'의 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'null'은 값이 없음을 명시적으로 나타내는 특별한 값이며, 'undefined'는 값이 할당되지 않은 변수를 가리킵니다.",
        "'undefined'는 값이 없음을 명시적으로 나타내는 특별한 값이며, 'null'은 값이 할당되지 않은 변수를 가리킵니다.",
        "'null'과 'undefined'은 동일한 의미입니다.",
        "'null'은 값이 없음을 나타내는 특별한 값이며, 'undefined'는 변수 자체가 존재하지 않음을 나타냅니다.",
      ],
      answer:
        "'null'은 값이 없음을 명시적으로 나타내는 특별한 값이며, 'undefined'는 값이 할당되지 않은 변수를 가리킵니다.",
      explanation:
        "'null'은 값이 없음을 명시적으로 나타내는 특별한 값입니다. 반면에 'undefined'는 값이 할당되지 않은 변수를 나타내거나, 정의되지 않은 속성을 참조하거나, 아무 값도 반환하지 않는 함수의 반환 값을 나타냅니다.",
      explanationCode: `var myVar; // 아무 값도 할당하지 않으면, myVar는 undefined입니다.
    
      myVar = null; // myVar의 값을 명시적으로 null로 설정할 수 있습니다.`,
    },
    {
      questionText: "자바스크립트에서 'closure'는 무엇인가요?",
      code: "",
      answerOptions: [
        "클로저는 함수와 그 함수가 선언된 어휘적 환경의 조합입니다.",
        "클로저는 함수의 매개변수를 동적으로 변경하는 메커니즘입니다.",
        "클로저는 함수의 반환 값을 설정하는 방법입니다.",
        "클로저는 함수의 실행을 일시 중지하고, 나중에 재개할 수 있는 기능입니다.",
      ],
      answer: "클로저는 함수와 그 함수가 선언된 어휘적 환경의 조합입니다.",
      explanation:
        "클로저는 함수와 그 함수가 선언된 어휘적 환경의 조합입니다. 이 환경은 클로저가 생성된 시점의 유효 범위에 있는 모든 지역 변수로 구성됩니다. 간단히 말해, 클로저는 함수 내부에서 생성된 내부 함수가 외부 함수의 변수에 접근할 수 있게 해주는 것입니다.",
      explanationCode: `function outer() {
        var b = 10;
        function inner() {
            var a = 20; 
            console.log(a+b);
        }
        return inner;
    }
      
    var X = outer();
    console.log(X); // X는 inner를 가리킵니다.
    
    X(); // 이것은 inner 함수를 실행하는 것과 같습니다. 이 함수는 outer 함수의 변수 'b'에 접근할 수 있습니다. 따라서 30이 출력됩니다.`,
    },
    {
      questionText: "자바스크립트에서 'event bubbling'은 무엇인가요?",
      code: "",
      answerOptions: [
        "이벤트 버블링은 특정 HTML 요소에서 이벤트가 발생했을 때, 해당 이벤트가 상위의 요소로 전달되는 현상을 말합니다.",
        "이벤트 버블링은 특정 HTML 요소에서 이벤트가 발생했을 때, 해당 이벤트가 하위의 요소로 전달되는 현상을 말합니다.",
        "이벤트 버블링은 특정 HTML 요소에서 이벤트가 발생했을 때, 해당 이벤트를 즉시 중단하는 기능을 말합니다.",
        "이벤트 버블링은 여러 이벤트 핸들러를 한 번에 등록하거나 제거하는 기능을 말합니다.",
      ],
      answer:
        "이벤트 버블링은 특정 HTML 요소에서 이벤트가 발생했을 때, 해당 이벤트가 상위의 요소로 전달되는 현상을 말합니다.",
      explanation:
        "이벤트 버블링은 특정 HTML 요소에서 이벤트가 발생했을 때, 해당 이벤트가 상위의 요소로 전달되는 현상을 말합니다. 이벤트 버블링 덕분에 부모 요소에서 하위 요소의 이벤트를 감지할 수 있습니다.",
      explanationCode: `document.querySelector("#parent").addEventListener("click", (event) => {
        console.log("Parent element clicked!");
      });
      
      document.querySelector("#child").addEventListener("click", (event) => {
        console.log("Child element clicked!");
        event.stopPropagation(); // 이벤트 버블링을 중단합니다.
      });
      
      // #child 요소를 클릭하면 "Child element clicked!"만 출력됩니다.
      // event.stopPropagation() 메소드 덕분에 #parent 요소로 이벤트가 버블링되지 않습니다.`,
    },
    {
      questionText:
        "자바스크립트에서 'reduce' 메소드의 주요 기능은 무엇인가요?",
      code: "",
      answerOptions: [
        "'reduce'는 배열의 모든 요소에 대해 주어진 리듀서 함수를 실행하고, 단일 결과 값을 반환합니다.",
        "'reduce'는 배열의 모든 요소를 순회하며, 각 요소에 대해 주어진 콜백 함수를 실행합니다.",
        "'reduce'는 배열의 모든 요소를 연결하고, 결합된 문자열을 반환합니다.",
        "'reduce'는 배열의 모든 요소를 정렬하고, 정렬된 배열을 반환합니다.",
      ],
      answer:
        "'reduce'는 배열의 모든 요소에 대해 주어진 리듀서 함수를 실행하고, 단일 결과 값을 반환합니다.",
      explanation:
        "'reduce' 메소드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 단일 출력 값을 만듭니다. 이 메소드는 배열 내의 모든 값을 하나의 값으로 줄이는 데 사용됩니다.",
      explanationCode: `const array = [1, 2, 3, 4];
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
      // 1 + 2 + 3 + 4
      console.log(array.reduce(reducer)); // 10이 출력됩니다.
    
      // 5 + 1 + 2 + 3 + 4
      console.log(array.reduce(reducer, 5)); // 15가 출력됩니다.`,
    },
    {
      questionText: "자바스크립트에서 클로저를 사용하면 어떤 이점이 있나요?",
      code: "",
      answerOptions: [
        "클로저를 사용하면 함수의 스코프 밖에서도 함수의 지역 변수에 접근할 수 있습니다.",
        "클로저를 사용하면 함수의 실행 시간을 단축할 수 있습니다.",
        "클로저를 사용하면 함수의 반환 값을 자동으로 계산할 수 있습니다.",
        "클로저를 사용하면 함수의 매개변수를 자동으로 유효성 검사할 수 있습니다.",
      ],
      answer:
        "클로저를 사용하면 함수의 스코프 밖에서도 함수의 지역 변수에 접근할 수 있습니다.",
      explanation:
        "클로저는 함수와 그 함수가 선언된 어휘적 환경의 조합입니다. 이를 통해 자바스크립트에서는 함수가 선언된 어휘적 환경을 기억하여, 함수가 함수 외부에서 실행되어도 그 환경에 접근할 수 있습니다. 이는 데이터 은닉, 데이터 캡슐화, 그리고 객체 데이터의 지속성 등을 가능하게 합니다.",
      explanationCode: `function outerFunction(outerVariable) {
        return function innerFunction(innerVariable) {
          console.log('outerVariable:', outerVariable);
          console.log('innerVariable:', innerVariable);
        }
      }
    
      const newFunction = outerFunction('outside');
      newFunction('inside'); // outerVariable: outside innerVariable: inside`,
    },
    {
      questionText:
        "자바스크립트에서 클로저를 사용하여 'private' 변수를 생성하는 방법은 무엇인가요?",
      code: "",
      answerOptions: [
        "클로저를 사용하여 함수 내부에 변수를 선언하고, 이 변수에 접근하는 함수를 반환합니다.",
        "클로저를 사용하여 함수 외부에 변수를 선언하고, 이 변수에 접근하는 함수를 반환합니다.",
        "'private' 키워드를 사용하여 함수 내부에 변수를 선언합니다.",
        "'private' 키워드를 사용하여 함수 외부에 변수를 선언합니다.",
      ],
      answer:
        "클로저를 사용하여 함수 내부에 변수를 선언하고, 이 변수에 접근하는 함수를 반환합니다.",
      explanation:
        "자바스크립트에서 'private' 변수는 언어 자체에서 직접 지원하지 않지만, 클로저를 사용하여 'private' 변수를 흉내낼 수 있습니다. 이를 위해 함수 내부에 변수를 선언하고, 이 변수에 접근하는 함수를 반환합니다.",
      explanationCode: `function privateVariableExample() {
        let privateVar = 'I am private';
        return {
          get: function() { return privateVar; },
          set: function(v) { privateVar = v; }
        }
      }
    
      let example = privateVariableExample();
      console.log(example.get()); // 'I am private' 출력
      example.set('Now I am public');
      console.log(example.get()); // 'Now I am public' 출력`,
    },

    // 추가 문제를 넣을 수 있습니다.
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setQuestions(shuffleArray(initialQuestions));
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
