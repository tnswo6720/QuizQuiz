import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button, CodeBlock } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "함수 선언과 호출에 대한 설명으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "함수 선언은 function 키워드를 사용한다.",
        "함수를 호출하려면 함수 이름 다음에 괄호를 붙인다.",
        "함수 선언은 반드시 함수의 이름이 필요하다.",
        "함수는 호출하기 전에 선언되어야 한다.",
      ],
      answer: "함수 선언은 반드시 함수의 이름이 필요하다.",
      explanation:
        "함수 선언은 반드시 함수의 이름이 필요하지는 않습니다. 이름이 없는 함수를 익명 함수라고 합니다.",
      explanationCode: `let anonymous = function() {
        console.log("This is an anonymous function");
      }
      anonymous();`,
    },

    // 여기에 문제를 추가합니다...
    {
      questionText: "다음 중 화살표 함수의 특징으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "화살표 함수는 항상 익명 함수이다.",
        "화살표 함수는 자신만의 this를 가지지 않는다.",
        "화살표 함수는 new 연산자를 사용하여 생성자로 사용할 수 있다.",
        "화살표 함수는 arguments 객체를 바인딩하지 않는다.",
      ],
      answer: "화살표 함수는 new 연산자를 사용하여 생성자로 사용할 수 있다.",
      explanation:
        "'화살표 함수는 new 연산자를 사용하여 생성자로 사용할 수 없습니다. 이는 화살표 함수가 자신의 this를 가지지 않기 때문입니다.'",
      explanationCode: `
        const ArrowFunc = () => console.log(this);
        ArrowFunc(); // undefined or window (in browser)
        new ArrowFunc(); // TypeError: ArrowFunc is not a constructor
        `,
    },
    {
      questionText:
        "다음 중 콜백 함수에 대한 설명으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "콜백 함수는 다른 함수의 인수로 전달되는 함수이다.",
        "콜백 함수는 주로 비동기적 작업을 처리할 때 사용된다.",
        "콜백 함수는 항상 익명 함수여야 한다.",
        "콜백 함수는 함수를 호출한 함수에 의해 호출된다.",
      ],
      answer: "콜백 함수는 항상 익명 함수여야 한다.",
      explanation:
        "'콜백 함수는 항상 익명 함수일 필요는 없습니다. 익명 함수 뿐만 아니라 기명 함수도 콜백 함수로 사용할 수 있습니다.'",
      explanationCode: `
        function greeting(name) {
          console.log('Hello ' + name);
        }
  
        function processUserInput(callback) {
          let name = prompt('Please enter your name.');
          callback(name);
        }
  
        processUserInput(greeting); // Hello [Entered Name]
        `,
    },
    {
      questionText: "다음 중 클로저에 대한 설명으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합이다.",
        "클로저는 외부 함수의 변수를 참조하는 내부 함수를 의미한다.",
        "클로저는 외부 스코프의 변수를 사용할 수 없다.",
        "클로저는 자바스크립트의 고급 주제 중 하나이다.",
      ],
      answer: "클로저는 외부 스코프의 변수를 사용할 수 없다.",
      explanation:
        "'클로저는 외부 스코프의 변수를 사용할 수 있습니다. 실제로 클로저는 외부 함수의 변수를 참조하는 내부 함수를 의미합니다.'",
      explanationCode: `
        function outerFunction(outerVariable) {
          return function innerFunction(innerVariable) {
            console.log('outerVariable:', outerVariable);
            console.log('innerVariable:', innerVariable);
          }
        }
  
        const newFunction = outerFunction('outside');
        newFunction('inside'); // logs: outerVariable: outside, innerVariable: inside
        `,
    },
    {
      questionText:
        "다음 중 호이스팅에 대한 설명으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "호이스팅은 변수와 함수의 선언을 코드의 맨 위로 끌어올리는 자바스크립트의 동작 방식을 의미한다.",
        "호이스팅은 선언만 끌어올리며, 할당은 끌어올려지지 않는다.",
        "let과 const로 선언된 변수는 호이스팅되지 않는다.",
        "함수 표현식은 호이스팅되지 않는다.",
      ],
      answer: "let과 const로 선언된 변수는 호이스팅되지 않는다.",
      explanation:
        "'let과 const로 선언된 변수도 호이스팅되지만, 초기화 이전에 접근할 수 없는 '임시 사각 지대(TDZ)'가 존재합니다.'",
      explanationCode: `
        console.log(x); // ReferenceError: Cannot access 'x' before initialization
        let x = 5;
        `,
    },
    {
      questionText: "호이스팅이란 무엇인가요?",
      code: "",
      answerOptions: [
        "변수의 유효 범위를 제어하는 기법",
        "변수와 함수 선언을 스코프의 최상단으로 끌어올리는 것",
        "함수 내부에서 외부의 변수를 참조하는 것",
        "비동기 작업을 동기적으로 처리하는 방법",
      ],
      answer: "변수와 함수 선언을 스코프의 최상단으로 끌어올리는 것",
      explanation:
        "자바스크립트에서 호이스팅이란 변수나 함수의 선언이 그들의 스코프에서 가장 위로 끌어올려지는 특성을 의미합니다. 그러나 선언만 끌어올려지며, 초기화나 할당은 호이스팅되지 않습니다.",
      explanationCode: `
        console.log(x); // undefined
        var x = 5;
  
        console.log(y); // ReferenceError: y is not defined
        `,
    },
    {
      questionText: "콜백 함수란 무엇인가요?",
      code: "",
      answerOptions: [
        "특정 이벤트가 발생하면 호출되는 함수",
        "특정 시점에 호출되도록 예약된 함수",
        "다른 함수의 인자로 사용되어 해당 함수의 내부에서 실행되는 함수",
        "특정 조건이 만족될 때만 실행되는 함수",
      ],
      answer: "다른 함수의 인자로 사용되어 해당 함수의 내부에서 실행되는 함수",
      explanation:
        "콜백 함수는 다른 함수의 인자로 전달되는 함수를 의미합니다. 이 함수는 나중에 이벤트가 발생하거나 특정 작업이 완료되었을 때 호출됩니다. 이런 방식은 비동기 프로그래밍에서 흔히 볼 수 있습니다.",
      explanationCode: `
        function greeting(name) {
          console.log('Hello ' + name);
        }
  
        function processUserInput(callback) {
          let name = prompt('Please enter your name.');
          callback(name);
        }
  
        processUserInput(greeting); // Hello [Entered Name]
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
    const formattedUserAnswer = userAnswer.replace(/\s/g, "").toLowerCase();
    const formattedCorrectAnswer = questions[currentQuestion].answer
      .replace(/\s/g, "")
      .toLowerCase();

    setIsCorrect(formattedUserAnswer === formattedCorrectAnswer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
  };

  return (
    <Wrapper>
      {questions.length > 0 ? (
        <>
          <Section>
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <CodeBlock>{questions[currentQuestion].code}</CodeBlock>
          </Section>

          {isSubmitted && (
            <Section>
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <CodeBlock>
                {questions[currentQuestion].explanationCode}
              </CodeBlock>
              {currentQuestion < questions.length - 1 && (
                <Button onClick={handleNext}>다음 문제</Button>
              )}
            </Section>
          )}

          <Section>
            <h2>선택지</h2>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <Button onClick={handleSubmit}>제출</Button>
          </Section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default Quiz;
