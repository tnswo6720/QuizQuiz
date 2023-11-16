import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    {
      questionText: "다음 코드에서 빈칸에 들어갈 적절한 타입은 무엇일까요?",
      code: `
        let name: ______ = "John";
      `,
      answerOptions: ["string", "number", "boolean", "any"],
      answer: "string",
      explanation: "문자열 값을 가지는 변수에는 'string' 타입을 지정합니다.",
    },

    {
      questionText:
        "TypeScript에서 함수의 매개변수와 반환값에 타입을 지정하는 올바른 방법은 무엇일까요?",
      code: `
        function greet(name: ______, age: ______): ______ {
          return \`Hello, my name is \${name} and I am \${age} years old.\`;
        }
      `,
      answerOptions: [
        "string, number, string",
        "number, string, void",
        "string, boolean, number",
        "any, any, any",
      ],
      answer: "string, number, string",
      explanation:
        "TypeScript에서 함수의 매개변수와 반환값에 타입을 지정할 때는 각각의 매개변수 이름 뒤에 콜론(:)과 타입을 지정하고, 함수 이름 뒤에 콜론(:)과 반환값의 타입을 지정합니다.",
    },

    {
      questionText:
        "TypeScript에서 클래스의 멤버 변수에 접근 제한자를 설정하는 올바른 방법은 무엇일까요?",
      code: `
        class Person {
          ______ name: string;
        
          constructor(name: string) {
            this.name = name;
          }
        }
      `,
      answerOptions: ["public", "private", "protected", "static"],
      answer: "public",
      explanation:
        "클래스의 멤버 변수에 접근 제한자를 설정할 때는 변수 이름 앞에 'public', 'private', 'protected' 중 하나를 지정합니다. 'public'은 어디서든 접근 가능함을 의미합니다.",
    },
    {
      questionText: "TypeScript에서 모든 타입의 최상위 타입은 무엇일까요?",
      code: `
        let variable: ______ = "I can be anything";
      `,
      answerOptions: ["any", "unknown", "object", "all"],
      answer: "any",
      explanation:
        "'any' 타입은 TypeScript에서 모든 타입의 최상위 타입입니다. 'any' 타입의 변수는 어떠한 타입의 값도 가질 수 있습니다.",
    },

    {
      questionText:
        "TypeScript에서 특정 값이 없음을 명시적으로 나타내기 위해 사용하는 키워드는 무엇일까요?",
      code: `
        let variable: string | ______ = null;
      `,
      answerOptions: ["null", "void", "undefined", "none"],
      answer: "null",
      explanation:
        "TypeScript에서 값이 없음을 명시적으로 나타내기 위해서는 'null' 키워드를 사용합니다.",
    },

    {
      questionText:
        "TypeScript에서 여러 개의 타입 중 하나의 타입이 될 수 있도록 타입을 지정하는 방법은 무엇일까요?",
      code: `
        let variable: ______ = "I can be a string or a number";
      `,
      answerOptions: [
        "string | number",
        "string & number",
        "string || number",
        "string && number",
      ],
      answer: "string | number",
      explanation:
        "TypeScript에서 여러 개의 타입 중 하나의 타입이 될 수 있도록 타입을 지정하려면, '|' 연산자를 사용하여 각 타입을 연결합니다. 이를 '유니언 타입'이라고 합니다.",
    },

    {
      questionText:
        "TypeScript에서 사용자가 직접 타입을 정의할 수 있는 기능은 무엇일까요?",
      code: `
        ______ Person {
          name: string;
          age: number;
        }
      `,
      answerOptions: ["class", "type", "interface", "enum"],
      answer: "interface",
      explanation:
        "TypeScript에서 'interface' 키워드를 사용하면 사용자가 직접 타입을 정의할 수 있습니다. 'interface'는 여러 다른 타입들을 묶어서 복합적인 타입을 만들 때 사용합니다.",
    },
    {
      questionText:
        "TypeScript에서 함수의 선택적 매개변수를 지정하는 방법은 무엇일까요?",
      code: `
        function greeting(name: string, age: ______): string {
          return \`Hello, my name is \${name} and I am \${age} years old.\`;
        }
      `,
      answerOptions: [
        "number?",
        "number | undefined",
        "number or undefined",
        "number | null",
      ],
      answer: "number?",
      explanation:
        "TypeScript에서 함수의 매개변수가 선택적인 경우, 매개변수 이름 뒤에 '?'를 붙입니다. 이 경우, 해당 매개변수를 생략하거나 undefined 값을 전달할 수 있습니다.",
    },

    {
      questionText:
        "TypeScript에서 배열의 타입을 지정하는 올바른 방법은 무엇일까요?",
      code: `
        let numbers: ______ = [1, 2, 3, 4, 5];
      `,
      answerOptions: [
        "Array<number>",
        "number[]",
        "number array",
        "Both A and B",
      ],
      answer: "Both A and B",
      explanation:
        "TypeScript에서 배열의 타입을 지정하는 방법은 두 가지입니다. 첫 번째는 'Array<타입>' 형태로, 두 번째는 '타입[]' 형태로 지정할 수 있습니다. 따라서 둘 다 올바른 방법입니다.",
    },

    {
      questionText:
        "TypeScript에서 특정 타입만을 허용하는 변수를 선언하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 TypeScript 키워드는 무엇일까요?",
      code: `
        let isDone: ______ = false;
      `,
      answerOptions: ["boolean", "number", "string", "any"],
      answer: "boolean",
      explanation:
        "TypeScript에서 변수에 특정 타입만을 허용하려면 타입 주석을 사용합니다. 이 경우 'boolean' 타입이 필요합니다.",
    },

    {
      questionText:
        "TypeScript에서 함수의 매개변수 타입을 지정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 코드는 무엇일까요?",
      code: `
        function greet(name: ______): string {
          return "Hello, " + name;
        }
      `,
      answerOptions: ["boolean", "number", "string", "any"],
      answer: "string",
      explanation:
        "이 경우, 매개변수 'name'이 문자열 형태로 입력되어야 하므로 'string'이 필요합니다.",
    },

    {
      questionText:
        "TypeScript에서 클래스의 속성에 접근 제한자를 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 TypeScript 키워드는 무엇일까요?",
      code: `
        class Greeter {
          ______ greeting: string;
          constructor(message: string) {
            this.greeting = message;
          }
          greet() {
            return "Hello, " + this.greeting;
          }
        }
      `,
      answerOptions: ["public", "private", "protected", "readonly"],
      answer: "private",
      explanation:
        "TypeScript에서 클래스의 속성에 접근 제한자를 설정하려면 'private', 'public', 'protected' 등의 키워드를 사용할 수 있습니다. 이 경우 'private'이 필요합니다.",
    },

    {
      questionText:
        "Apollo Client를 사용하여 GraphQL Mutation을 설정하고 실행하는 코드입니다. 아래의 코드에서 빈칸에 들어갈 수 있는 코드는 무엇일까요?",
      code: `
        "import { ______, gql } from '@apollo/client';"
    
        "const 나의그래프큐엘셋팅 = gql"
        "  ______ {"
        "    createBoard(writer: '철수', title: '', contents: '반갑습니다') {"
        "      __id"
        "      number"
        "      message"
        "    }"
        "  }"
        ";"
    
        "export default function GraphqlMutationPage() {"
        "  const [나의함수] = ______(나의그래프큐엘셋팅);"
    
        "  const onClickSubmit = async () => {"
        "    const result = await 나의함수();"
        "    console.log(result);"
        "  };"
    
        "  // 한 줄일때는 괄호() 필요 없음"
        "  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;"
        "}"
      `,
      answerOptions: [
        ["useMutation", "mutation", "useMutation"],
        ["useQuery", "mutation", "useMutation"],
        ["useMutation", "query", "useMutation"],
        ["useMutation", "mutation", "useQuery"],
      ],
      answer: ["useMutation", "mutation", "useMutation"],
      explanation:
        "'@apollo/client'에서 'useMutation'을 import하고, GraphQL에서 데이터를 변경하거나 생성할 때는 'mutation' 키워드를 사용합니다. 'useMutation' 함수를 사용하여 mutation을 실행합니다.",
    },
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
