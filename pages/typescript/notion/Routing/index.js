import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "Next.js에서 URL 경로를 변경하는 함수는 무엇인가요?",
      code: "",
      answerOptions: [
        "router.push",
        "router.pull",
        "router.change",
        "router.move",
      ],
      answer: "router.push",
      explanation:
        "Next.js의 useRouter 훅에서 제공하는 push 함수를 사용하면, 프로그래밍적으로 URL 경로를 변경할 수 있습니다. 이 함수를 사용하여 사용자를 다른 페이지로 이동시킬 수 있습니다.",
      explanationCode: `
        import { useRouter } from 'next/router';
    
        export default function Page() {
          const router = useRouter();
    
          const handleClick = () => {
            router.push('/another-page');
          };
    
          return (
            <button onClick={handleClick}>
              Go to Another Page
            </button>
          );
        }
      `,
    },
    {
      questionText:
        "Next.js에서 현재 페이지의 경로를 가져오려면 어떻게 해야할까요?",
      code: "",
      answerOptions: [
        "router.pathname",
        "router.path",
        "router.url",
        "router.route",
      ],
      answer: "router.pathname",
      explanation:
        "Next.js의 useRouter 훅에서 제공하는 pathname 프로퍼티를 사용하면 현재 페이지의 경로를 가져올 수 있습니다. 이 값을 사용하여 현재 페이지에 따라 다른 동작을 수행하는 등의 작업을 할 수 있습니다.",
      explanationCode: `
        import { useRouter } from 'next/router';
    
        export default function Page() {
          const router = useRouter();
    
          return (
            <div>
              Current page: {router.pathname}
            </div>
          );
        }
      `,
    },
    {
      questionText: "Optional Chaining 연산자 '?.’는 무엇을 하는 연산자인가요?",
      code: "",
      answerOptions: [
        "객체가 null 또는 undefined인 경우에도 에러를 발생시키지 않고 undefined를 반환한다.",
        "객체가 null 또는 undefined인 경우에 에러를 발생시킨다.",
        "객체가 null 또는 undefined인 경우에 true를 반환한다.",
        "객체가 null 또는 undefined인 경우에 false를 반환한다.",
      ],
      answer:
        "객체가 null 또는 undefined인 경우에도 에러를 발생시키지 않고 undefined를 반환한다.",
      explanation:
        "Optional Chaining 연산자 '?.’는 객체가 null 또는 undefined인 경우에도 에러를 발생시키지 않고 안전하게 undefined를 반환합니다. 이를 통해 프로그래머는 객체의 속성에 안전하게 접근할 수 있습니다.",
      explanationCode: `
        const data = null;
        console.log(data?.property); // undefined
      `,
    },
    {
      questionText: "Nullish Coalescing 연산자 '??'가 하는 작업은 무엇인가요?",
      code: "",
      answerOptions: [
        "값이 null 또는 undefined인 경우에 대체 값을 반환한다.",
        "값이 null 또는 undefined인 경우에 true를 반환한다.",
        "값이 null 또는 undefined인 경우에 false를 반환한다.",
        "값이 null 또는 undefined인 경우에 에러를 발생시킨다.",
      ],
      answer: "값이 null 또는 undefined인 경우에 대체 값을 반환한다.",
      explanation:
        "Nullish Coalescing 연산자 '??'는 좌변의 값이 null 또는 undefined인 경우에 우변의 값을 반환합니다. 이를 통해 프로그래머는 값의 존재 여부를 안전하게 확인하고 대체 값을 지정할 수 있습니다.",
      explanationCode: `
        const data = null;
        const value = data ?? 'default';
        console.log(value); // 'default'
      `,
    },
    {
      questionText: "조건부 렌더링이란 무엇인가요?",
      code: "",
      answerOptions: [
        "조건에 따라 다른 컴포넌트를 렌더링하는 방식",
        "조건에 따라 동일한 컴포넌트를 렌더링하는 방식",
        "조건에 따라 컴포넌트를 렌더링하지 않는 방식",
        "조건에 따라 컴포넌트를 숨기는 방식",
      ],
      answer: "조건에 따라 다른 컴포넌트를 렌더링하는 방식",
      explanation:
        "조건부 렌더링은 조건에 따라 다른 컴포넌트를 렌더링하는 방식입니다. React와 같은 프레임워크에서는 조건부 렌더링을 통해 동적인 UI를 생성할 수 있습니다.",
      explanationCode: `
        function Example({ condition }) {
          return (
            <div>
              {condition ? <div>Condition is true</div> : <div>Condition is false</div>}
            </div>
          );
        }
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
