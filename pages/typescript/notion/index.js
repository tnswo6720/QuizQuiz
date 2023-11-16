import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "React에서 'state'와 'props'의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'state'는 컴포넌트 내부에서 관리하고 변경할 수 있는 데이터이고, 'props'는 부모 컴포넌트로부터 받아오는 데이터이다.",
        "'state'는 부모 컴포넌트로부터 받아오는 데이터이고, 'props'는 컴포넌트 내부에서 관리하고 변경할 수 있는 데이터이다.",
        "'state'와 'props' 모두 컴포넌트 내부에서 관리하고 변경할 수 있는 데이터이다.",
        "'state'와 'props' 모두 부모 컴포넌트로부터 받아오는 데이터이다.",
      ],
      answer:
        "'state'는 컴포넌트 내부에서 관리하고 변경할 수 있는 데이터이고, 'props'는 부모 컴포넌트로부터 받아오는 데이터이다.",
      explanation:
        "'state'는 컴포넌트 내부에서 관리하고 변경할 수 있는 데이터를 의미하며, 컴포넌트의 동작을 제어합니다. 반면에 'props'는 부모 컴포넌트로부터 받아오는 데이터를 의미하며, 일반적으로 변경되지 않습니다.",
      explanationCode: `/* React 코드 */
      class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = { value: '' }; // state 초기화
        }
    
        render() {
          return <div>{this.props.name} {this.state.value}</div>; // props와 state 사용
        }
      }
    
      ReactDOM.render(<MyComponent name="John" />, document.getElementById('root'));`,
    },

    {
      questionText: "React의 'Virtual DOM'이란 무엇인가요?",
      code: "",
      answerOptions: [
        "'Virtual DOM'은 실제 DOM을 추상화한 것으로, 실제 DOM에 직접 접근하는 대신 'Virtual DOM'을 통해 작업을 수행한다.",
        "'Virtual DOM'은 실제 DOM에 직접 접근하는 방법을 제공한다.",
        "'Virtual DOM'은 웹 페이지의 스타일을 제어하는 데 사용된다.",
        "'Virtual DOM'은 웹 페이지의 컨텐츠를 제어하는 데 사용된다.",
      ],
      answer:
        "'Virtual DOM'은 실제 DOM을 추상화한 것으로, 실제 DOM에 직접 접근하는 대신 'Virtual DOM'을 통해 작업을 수행한다.",
      explanation:
        "'Virtual DOM'은 실제 DOM을 추상화한 것으로, React에서는 DOM 변경을 최소화하고 효율적으로 수행하기 위해 'Virtual DOM'을 사용합니다. 컴포넌트의 state나 props가 변경되면, React는 'Virtual DOM'을 새로 생성하고 이전 'Virtual DOM'과 비교하여 변경된 부분만 실제 DOM에 반영합니다.",
      explanationCode: `/* React 코드 */
      function MyComponent() {
        const [count, setCount] = React.useState(0);
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
    
      ReactDOM.render(<MyComponent />, document.getElementById('root')); // 'Virtual DOM'을 사용하여 실제 DOM에 반영`,
    },
    {
      questionText:
        "Apollo Client를 생성할 때 사용하는 uri는 무엇을 나타내는 것인가요?",
      code: `
        const client = new ApolloClient({
          uri: "http://backend-example.codebootcamp.co.kr/graphql",
          cache: new InMemoryCache(),
        });
      `,
      answerOptions: [
        "백엔드 서버의 주소",
        "프론트엔드 서버의 주소",
        "데이터베이스 서버의 주소",
        "캐시 서버의 주소",
      ],
      answer: "백엔드 서버의 주소",
      explanation:
        "uri는 Uniform Resource Identifier의 약자로, 서버의 위치를 지정합니다. Apollo Client는 이 uri를 통해 백엔드 서버와 통신합니다.",
      explanationCode: "",
    },
    {
      questionText: "Apollo Client의 InMemoryCache는 무슨 역할을 하는가요?",
      code: `
        const client = new ApolloClient({
          uri: "http://backend-example.codebootcamp.co.kr/graphql",
          cache: new InMemoryCache(),
        });
      `,
      answerOptions: [
        "데이터를 임시로 저장",
        "데이터를 영구적으로 저장",
        "데이터를 암호화",
        "데이터를 압축",
      ],
      answer: "데이터를 임시로 저장",
      explanation:
        "InMemoryCache는 Apollo Client의 기본 캐시 구현체로, 백엔드에서 가져온 데이터를 메모리에 임시로 저장하는 역할을 합니다. 이를 통해 중복된 네트워크 요청을 방지하고, 앱의 반응성을 향상시킬 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText: "ApolloProvider 컴포넌트는 어떤 역할을 하는가요?",
      code: `
        return (
          <ApolloProvider client={client}>
            {props.children}
          </ApolloProvider>
        )
      `,
      answerOptions: [
        "Apollo Client를 React 앱에 연결",
        "React 앱을 Apollo Server에 연결",
        "Apollo Server를 React 앱에 연결",
        "React 앱을 Apollo Client에 연결",
      ],
      answer: "Apollo Client를 React 앱에 연결",
      explanation:
        "ApolloProvider는 Apollo Client를 React 앱에 연결하는 역할을 합니다. 이를 통해 React 컴포넌트 내에서 GraphQL API를 쉽게 호출할 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText: "Apollo Client를 생성할 때 필요한 필수 옵션은 무엇인가요?",
      code: `
        const client = new ApolloClient({
          uri: "http://backend-example.codebootcamp.co.kr/graphql",
          cache: new InMemoryCache(),
        });
      `,
      answerOptions: ["uri", "cache", "headers", "credentials"],
      answer: "uri, cache",
      explanation:
        "Apollo Client를 생성할 때는 반드시 uri와 cache 옵션이 필요합니다. uri는 서버의 위치를 지정하고, cache는 데이터를 임시로 저장하는 역할을 합니다.",
      explanationCode: "",
    },
    {
      questionText: "ApolloProvider는 어떤 props를 받아야 하나요?",
      code: `
        return (
          <ApolloProvider client={client}>
            {props.children}
          </ApolloProvider>
        )
      `,
      answerOptions: ["client", "server", "database", "cache"],
      answer: "client",
      explanation:
        "ApolloProvider는 Apollo Client 인스턴스를 client라는 props로 받습니다. 이 client는 ApolloProvider의 하위 컴포넌트들이 GraphQL API를 호출할 때 사용됩니다.",
      explanationCode: "",
    },
    {
      questionText:
        "ApolloProvider의 하위 컴포넌트들은 어떻게 Apollo Client를 사용할 수 있나요?",
      code: `
        return (
          <ApolloProvider client={client}>
            {props.children}
          </ApolloProvider>
        )
      `,
      answerOptions: [
        "props로 전달받음",
        "상태로 전달받음",
        "context에서 가져옴",
        "localStorage에서 가져옴",
      ],
      answer: "context에서 가져옴",
      explanation:
        "ApolloProvider는 client를 context에 제공합니다. 그래서 ApolloProvider의 하위 컴포넌트들은 context에서 Apollo Client를 가져와 GraphQL API를 호출할 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText:
        "React에서 'Virtual DOM'을 사용하는 주된 이유는 무엇인가요?",
      code: "",
      answerOptions: [
        "DOM 변경을 최소화하고 효율적으로 수행하기 위해서",
        "서버와의 통신을 최소화하기 위해서",
        "웹 페이지의 스타일 변경을 쉽게 하기 위해서",
        "웹 페이지의 컨텐츠 변경을 쉽게 하기 위해서",
      ],
      answer: "DOM 변경을 최소화하고 효율적으로 수행하기 위해서",
      explanation:
        "DOM 변경은 비용이 많이 드는 작업입니다. 'Virtual DOM'을 사용하면, 컴포넌트의 state나 props가 변경될 때마다 실제 DOM을 다시 그리는 대신 'Virtual DOM'을 새로 생성하고 이전 'Virtual DOM'과 비교하여 변경된 부분만 실제 DOM에 반영합니다. 이를 통해 DOM 변경을 최소화하고 효율적으로 수행할 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText: "React에서 'context'는 무엇인가요?",
      code: "",
      answerOptions: [
        "'context'는 컴포넌트 트리에서 데이터를 공유하는 방법을 제공한다.",
        "'context'는 컴포넌트의 상태를 관리하는 방법을 제공한다.",
        "'context'는 컴포넌트의 props를 관리하는 방법을 제공한다.",
        "'context'는 컴포넌트의 생명주기를 관리하는 방법을 제공한다.",
      ],
      answer:
        "'context'는 컴포넌트 트리에서 데이터를 공유하는 방법을 제공한다.",
      explanation:
        "'context'는 React 컴포넌트 트리 안에서 데이터를 공유하는 방법을 제공합니다. 일반적으로 props는 부모에서 자식으로 데이터를 전달하지만, 'context'를 사용하면 많은 컴포넌트를 거치지 않고도 데이터를 공유할 수 있습니다. 이는 전역 상태 관리에 유용하게 사용될 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText: "React에서 'state'와 'props'의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'state'는 컴포넌트 내부에서 관리되고 변경될 수 있지만, 'props'는 부모 컴포넌트로부터 전달되고 변경할 수 없습니다.",
        "'props'는 컴포넌트 내부에서 관리되고 변경될 수 있지만, 'state'는 부모 컴포넌트로부터 전달되고 변경할 수 없습니다.",
        "'state'와 'props' 모두 컴포넌트 내부에서 관리되고 변경될 수 있습니다.",
        "'state'와 'props' 모두 부모 컴포넌트로부터 전달되고 변경할 수 없습니다.",
      ],
      answer:
        "'state'는 컴포넌트 내부에서 관리되고 변경될 수 있지만, 'props'는 부모 컴포넌트로부터 전달되고 변경할 수 없습니다.",
      explanation:
        "'state'는 컴포넌트 내부에서 관리되며, 사용자의 행동, 네트워크 응답 등으로 인해 시간에 따라 변경될 수 있습니다. 반면에 'props'는 컴포넌트에 전달되는 데이터로, 부모 컴포넌트로부터 전달되며 변경할 수 없습니다.",
      explanationCode: `class Example extends React.Component {
        constructor(props) {
          super(props);
          this.state = { count: 0 }; // 'state'는 컴포넌트 내부에서 관리되며 변경될 수 있습니다.
        }
      
        render() {
          return (
            <div>
              <p>You clicked {this.state.count} times</p>
              <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                Click me
              </button>
              <ChildComponent name={this.props.name} /> // 'props'는 부모 컴포넌트로부터 전달되며 변경할 수 없습니다.
            </div>
          );
        }
      }`,
    },
    {
      questionText: "React에서 'useEffect' 훅의 주요 사용처는 무엇인가요?",
      code: "",
      answerOptions: [
        "'useEffect'는 컴포넌트가 처음 렌더링될 때, 업데이트될 때, 그리고 제거될 때 수행할 작업을 지정할 수 있습니다.",
        "'useEffect'는 컴포넌트의 상태를 저장하고 관리하는 데 사용됩니다.",
        "'useEffect'는 컴포넌트의 props를 관리하는 데 사용됩니다.",
        "'useEffect'는 컴포넌트의 라이프사이클 메소드를 대체하는 데 사용됩니다.",
      ],
      answer:
        "'useEffect'는 컴포넌트가 처음 렌더링될 때, 업데이트될 때, 그리고 제거될 때 수행할 작업을 지정할 수 있습니다.",
      explanation:
        "'useEffect' 훅은 컴포넌트가 처음 렌더링될 때, 업데이트될 때, 그리고 제거될 때 수행할 작업을 지정할 수 있습니다. 이 훅은 사이드 이펙트를 처리하는 데 사용됩니다. 예를 들어, 데이터를 가져오거나 구독을 설정하거나 수동으로 React 컴포넌트의 DOM을 변경하는 작업을 수행할 수 있습니다.",
      explanationCode: `import React, { useState, useEffect } from 'react';
    
      function Example() {
        const [count, setCount] = useState(0);
    
        // 데이터 가져오기, 구독 설정, 수동 DOM 조작 등
        // 컴포넌트가 처음 렌더링될 때, 업데이트될 때, 그리고 제거될 때 수행할 작업을 지정합니다.
        useEffect(() => {
          document.title = \`You clicked \${count} times\`;
        });
    
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }`,
    },
    {
      questionText: "React에서 'useState' 훅의 주요 사용처는 무엇인가요?",
      code: "",
      answerOptions: [
        "'useState'는 컴포넌트의 상태를 저장하고 관리하는 데 사용됩니다.",
        "'useState'는 컴포넌트가 처음 렌더링될 때, 업데이트될 때, 그리고 제거될 때 수행할 작업을 지정할 수 있습니다.",
        "'useState'는 컴포넌트의 props를 관리하는 데 사용됩니다.",
        "'useState'는 컴포넌트의 라이프사이클 메소드를 대체하는 데 사용됩니다.",
      ],
      answer: "'useState'는 컴포넌트의 상태를 저장하고 관리하는 데 사용됩니다.",
      explanation:
        "'useState'는 함수 컴포넌트에서 상태를 추가할 수 있게 해주는 훅입니다. 이 훅은 상태를 저장하고 관리하는 데 사용됩니다. 'useState'는 상태 값과 해당 상태를 설정하는 함수, 그리고 초기 상태 값을 인자로 받습니다.",
      explanationCode: `import React, { useState } from 'react';
    
      function Example() {
        // "count"라는 새로운 상태 변수를 선언합니다.
        // "setCount"는 "count" 변수를 업데이트하는 함수입니다.
        // "useState"의 인자는 상태의 초기 값입니다.
        const [count, setCount] = useState(0);
    
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }`,
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
