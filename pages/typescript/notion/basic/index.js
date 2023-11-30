import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "타입스크립트를 사용하는 주된 이유는 무엇인가요?",
      code: "let isDone: boolean = false;",
      answerOptions: [
        "코드의 가독성 향상",
        "정적 타이핑으로 인한 버그 감소",
        "코드의 실행 속도 향상",
        "동적 타이핑으로 인한 유연성",
      ],
      answer: "정적 타이핑으로 인한 버그 감소",
      explanation:
        "타입스크립트는 정적 타이핑을 지원하여 코드의 안정성을 높이며, 이로 인해 실행 전에 버그를 감지하고 수정할 수 있습니다.",
      explanationCode:
        "let isDone: boolean = false; // 타입스크립트의 정적 타이핑 예시",
    },
    {
      questionText: "`dependencies`와 `devDependencies`의 차이점은 무엇인가요?",
      code: `
      "dependencies": {
        "react": "^17.0.2",
        "react-dom": "^17.0.2"
      },
      "devDependencies": {
        "@types/react": "^17.0.11",
        "@types/react-dom": "^17.0.7",
        "typescript": "^4.2.4"
      }
      `,
      answerOptions: [
        "둘 다 프로젝트에 필요한 모듈을 나타냄",
        "`dependencies`는 빌드 시 필요한 모듈, `devDependencies`는 개발 시 필요한 모듈을 나타냄",
        "`dependencies`는 개발 시 필요한 모듈, `devDependencies`는 빌드 시 필요한 모듈을 나타냄",
        "둘 다 프로젝트의 버전을 나타냄",
      ],
      answer:
        "`dependencies`는 빌드 시 필요한 모듈, `devDependencies`는 개발 시 필요한 모듈을 나타냄",
      explanation:
        "`dependencies`는 프로젝트가 실행될 때 필요한 모듈을 나타내며, `devDependencies`는 개발 과정에서만 필요한 모듈(예: 타입체크, 테스트 등)을 나타냅니다.",
      explanationCode: `
      "dependencies": {
        "react": "^17.0.2",
        "react-dom": "^17.0.2"
      },
      "devDependencies": {
        "@types/react": "^17.0.11",
        "@types/react-dom": "^17.0.7",
        "typescript": "^4.2.4"
      }
      `,
    },
    {
      questionText: "`AppProps`의 역할은 무엇인가요?",
      code: `
      import type { AppProps } from "next/app";
    
      export default function App({ Component, pageProps }: AppProps): JSX.Element {
        // ...
      }
      `,
      answerOptions: [
        "프로젝트의 전역 상태를 관리",
        "Next.js의 모든 페이지 컴포넌트에 전달되는 props를 타입 체크",
        "페이지 컴포넌트의 라이프사이클을 관리",
        "페이지 컴포넌트의 스타일을 관리",
      ],
      answer: "Next.js의 모든 페이지 컴포넌트에 전달되는 props를 타입 체크",
      explanation:
        "`AppProps`는 Next.js의 `App` 컴포넌트에 전달되는 props의 타입을 체크하는 데 사용됩니다. 이 타입은 모든 페이지 컴포넌트에 전달되는 props를 포함합니다.",
      explanationCode: `
      import type { AppProps } from "next/app";
    
      export default function App({ Component, pageProps }: AppProps): JSX.Element {
        // ...
      }
      `,
    },

    {
      questionText:
        "타입스크립트를 설치하기 위해 사용되는 명령어는 무엇인가요?",
      code: "",
      answerOptions: [
        "yarn add typescript",
        "yarn install typescript",
        "yarn update typescript",
        "yarn remove typescript",
      ],
      answer: "yarn add typescript",
      explanation:
        "타입스크립트를 설치하기 위해 `yarn add typescript` 명령어를 사용합니다.",
      explanationCode: "yarn add typescript",
    },
    {
      questionText:
        "타입스크립트로 작성된 .ts 또는 .tsx 파일을 자바스크립트로 변환하기 위해 사용되는 명령어는 무엇인가요?",
      code: "",
      answerOptions: ["tsc", "ts-compile", "ts-transform", "ts-convert"],
      answer: "tsc",
      explanation:
        "타입스크립트 컴파일러인 `tsc` 명령어를 사용하여 .ts 또는 .tsx 파일을 자바스크립트로 변환합니다.",
      explanationCode: "tsc",
    },
    {
      questionText: "JSX는 어떤 언어의 문법 확장인가요?",
      code: "",
      answerOptions: ["자바스크립트", "타입스크립트", "파이썬", "루비"],
      answer: "자바스크립트",
      explanation:
        "JSX는 자바스크립트의 문법 확장으로, React 컴포넌트를 작성하기 위해 사용됩니다.",
      explanationCode: "",
    },
    {
      questionText: "tsx 파일과 ts 파일의 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "tsx는 타입스크립트 문법만을 사용하고, ts는 자바스크립트 문법만을 사용한다.",
        "tsx는 JSX 문법을 사용할 수 있고, ts는 JSX 문법을 사용할 수 없다.",
        "tsx는 자바스크립트 문법만을 사용하고, ts는 타입스크립트 문법만을 사용한다.",
        "tsx는 JSX 문법을 사용할 수 없고, ts는 JSX 문법을 사용할 수 있다.",
      ],
      answer:
        "tsx는 JSX 문법을 사용할 수 있고, ts는 JSX 문법을 사용할 수 없다.",
      explanation:
        "tsx 파일은 타입스크립트와 JSX를 모두 사용할 수 있으며, 주로 React 컴포넌트를 작성할 때 사용됩니다. 반면, ts 파일은 JSX 문법을 사용할 수 없는 순수 타입스크립트 코드를 작성하는 데 사용됩니다.",
      explanationCode: "",
    },
    {
      questionText: "tsconfig.json 파일은 무엇인가요?",
      code: "",
      answerOptions: [
        "타입스크립트 컴파일러의 설정을 정의하는 파일",
        "타입스크립트 프로젝트의 종속성을 관리하는 파일",
        "타입스크립트 프로젝트의 소스 코드를 저장하는 파일",
        "타입스크립트 프로젝트의 배포 설정을 정의하는 파일",
      ],
      answer: "타입스크립트 컴파일러의 설정을 정의하는 파일",
      explanation:
        "tsconfig.json 파일은 타입스크립트 컴파일러의 설정을 정의하는 JSON 파일입니다. 이 파일을 통해 컴파일러가 타입스크립트 코드를 어떻게 컴파일할지 설정할 수 있습니다.",
      explanationCode: "",
    },

    // 기존의 문제들...
  ];

  // 추가 문제를 넣을 수 있습니다.

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

// 보드에서 삭제를 하고 화면을 다시 그리는 것과
// 게시글에 키를 주는 것,
// index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨
// 즉 유일하지 않음
// 리액트에는 프래그먼트라는게 있음
// 특별한 이유가 없으면 Fragment로 감싸자 <div />는 1개 더 그려야되서 조금 느려짐
// 프래그먼트에 key를 입력하는 방법? <Fragment key= {1} />
