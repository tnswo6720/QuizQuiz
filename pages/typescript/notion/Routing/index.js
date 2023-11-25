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
    }, // 이 부분에 컴마 추가
    {
      questionText:
        "Next.js에서 동적 라우팅을 구현하기 위해 어떤 메서드를 사용해야 하는가?",
      code: "",
      answerOptions: [
        "router.push",
        "router.pull",
        "router.change",
        "router.move",
      ],
      answer: "router.push",
      explanation:
        "Next.js에서는 useRouter 훅에서 제공하는 push 메서드를 사용해서 동적 라우팅을 구현할 수 있습니다. 이 메서드를 이용해 페이지를 이동시킬 수 있습니다.",
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
      questionText: "아래 코드에서 router.query.qqq의 역할은 무엇인가?",
      code: `
      import { useQuery, gql } from "@apollo.client";
      import { useRouter } from "next/Router";
      
      const FETCH_BOARD = gql\`
        query fetchBoard($number: Int) {
          fetchBoard(number: $number) {
            number
            writer
            title
            contents
          }
        }
      \`;
      
      export default function StaticRoutingMovedPage() {
        const router = useRouter();
      
        const { data } = useQuery(FETCH_BOARD, {
          variables: {
            number: Number(router.query.qqq),
          },
        });
      
        return (
          <div>
            <div>1번 게시글 이동이 완료되었습니다</div>
            <div>작성자: {data.fetchBoard.writer}</div>
            <div>제목: {data.fetchBoard.title}</div>
            <div>내용: {data.fetchBoard.contents}</div>
          </div>
        );
      }
      `,
      answerOptions: [
        "새로운 페이지로 이동하는 역할",
        "URL의 쿼리 파라미터를 가져오는 역할",
        "데이터를 가져오는 역할",
        "데이터를 업데이트하는 역할",
      ],
      answer: "URL의 쿼리 파라미터를 가져오는 역할",
      explanation:
        "router.query는 URL의 쿼리 파라미터를 객체 형태로 가져오는 역할을 합니다. 여기서는 qqq라는 쿼리 파라미터의 값을 가져와서 useQuery의 변수로 사용하고 있습니다.",
      explanationCode: "",
    },
    {
      questionText:
        "다음 중 'useRouter' 훅에 대한 설명으로 옳지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "'useRouter'는 Next.js의 라우팅을 위한 훅으로, 현재 라우터 객체를 반환한다.",
        "'useRouter'를 사용하면 라우터의 속성이나 메소드에 접근할 수 있다.",
        "'useRouter'의 'push' 메소드를 이용하여 프로그래매틱 라우팅을 할 수 있다.",
        "'useRouter'는 서버 사이드 렌더링(SSR)에서 사용할 수 없다.",
      ],
      answer: "'useRouter'는 서버 사이드 렌더링(SSR)에서 사용할 수 없다.",
      explanation:
        "'useRouter' 훅은 클라이언트 사이드에서 뿐만 아니라 서버 사이드에서도 사용할 수 있습니다. Next.js는 서버 사이드 렌더링(SSR)을 지원하므로, 'useRouter'는 서버 사이드에서도 현재 라우터 객체에 접근할 수 있게 해줍니다.",
      explanationCode: "",
    },
    {
      questionText: "다음 코드의 실행 결과는 무엇일까요?",
      code: `
        const router = useRouter();
        router.push('/section05/05-05-dynamic-routing-board-mutation-moved/' + 'result.createBoard.number');
      `,
      answerOptions: [
        "새로운 페이지로 이동한다.",
        "현재 페이지를 새로고침한다.",
        "에러가 발생한다.",
        "아무런 변화가 없다.",
      ],
      answer: "새로운 페이지로 이동한다.",
      explanation:
        "'useRouter'의 'push' 메소드는 주어진 경로로 라우팅을 수행하므로, 새로운 페이지로 이동하게 됩니다. 여기서 'result.createBoard.number'는 동적 라우팅을 위한 경로 파라미터입니다.",
      explanationCode: `
        const router = useRouter();
        router.push('/section05/05-05-dynamic-routing-board-mutation-moved/' + 'result.createBoard.number'); // 새로운 페이지로 이동한다.
      `,
    },

    {
      questionText:
        "다음 중 'export'와 'export default'의 차이에 대한 설명으로 옳지 않은 것은 무엇인가요?",
      code: `
      // module1.js
      export const name = "John";
    
      // module2.js
      export default function() {
        console.log("Hello World");
      }
    
      // main.js
      import { name } from './module1';
      import myFunction from './module2';
      `,
      answerOptions: [
        "'export'는 한 모듈에서 여러 개의 값을 내보낼 수 있지만, 'export default'는 하나의 값만 내보낼 수 있다.",
        "'export'로 내보낸 값을 가져올 때는 반드시 중괄호 {}를 사용해야 하지만, 'export default'로 내보낸 값을 가져올 때는 중괄호를 사용하지 않아도 된다.",
        "'export'로 내보낸 값을 가져올 때는 원래의 이름을 사용해야 하지만, 'export default'로 내보낸 값을 가져올 때는 원하는 이름을 사용할 수 있다.",
        "'export default'는 한 모듈에서 여러 개의 값을 내보낼 수 있지만, 'export'는 하나의 값만 내보낼 수 있다.",
      ],
      answer:
        "'export default'는 한 모듈에서 여러 개의 값을 내보낼 수 있지만, 'export'는 하나의 값만 내보낼 수 있다.",
      explanation:
        "'export default'는 한 모듈에서 하나의 값을 내보낼 수 있습니다. 반면, 'export'는 한 모듈에서 여러 개의 값을 내보낼 수 있습니다. 'export default'로 내보낸 값을 가져올 때는 원하는 이름을 사용할 수 있지만, 'export'로 내보낸 값을 가져올 때는 원래의 이름을 사용해야 합니다.",
      explanationCode: `
        
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
