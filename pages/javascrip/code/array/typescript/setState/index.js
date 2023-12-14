// questions1.js
export const typescriptCodeSetState = [
  // 질문 데이터...

  {
    type: "fill-in-the-blank",
    questionText:
      "다음 React 함수형 컴포넌트에서 빈칸에 들어갈 적절한 코드는 무엇일까요? 이 코드는 count 상태값을 1 증가시키는 기능을 합니다.",
    code: `
      function Counter() {
        const [count, setCount] = React.useState(0);
    
        const incrementCount = () => {
          setCount(______);
        };
    
        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
          </div>
        );
      }
      `,
    answerOptions: [
      ["count + 1"],
      ["++count"],
      ["(count) => count + 1"],
      ["(count) => ++count"],
    ],
    answer: ["count + 1"],
    explanation:
      "React의 useState 훅에서 상태를 업데이트할 때는 상태 설정 함수(setCount)에 직접 새로운 상태값을 전달합니다. 따라서 'count + 1'이 적절한 코드입니다. 이 코드는 count 상태값을 1 증가시키는 기능을 합니다.",
    subject: "typescript",
    subSubject: "setState",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 React 함수형 컴포넌트에서 빈칸에 들어갈 적절한 코드는 무엇일까요? 이 코드는 입력 필드의 값을 상태로 관리하는 기능을 합니다.",
    code: `
    function TextInput() {
      const [text, setText] = React.useState('');
  
      const handleChange = (event) => {
        setText(______);
      };
  
      return (
        <div>
          <input type="text" value={text} onChange={handleChange} />
          <p>Text: {text}</p>
        </div>
      );
    }
    `,
    answerOptions: [
      ["event"],
      ["event.target"],
      ["event.value"],
      ["event.target.value"],
    ],
    answer: ["event.target.value"],
    explanation:
      "React에서 이벤트 핸들러 내에서 입력 필드의 값을 가져오려면 'event.target.value'를 사용합니다. 따라서 'setText(event.target.value)'가 적절한 코드입니다. 이 코드는 입력 필드의 값을 text 상태로 설정하는 기능을 합니다.",
    subject: "typescript",
    subSubject: "setState",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "React 함수형 컴포넌트에서 count 상태값을 2배로 증가시키는 기능을 수행하는 빈칸에 들어갈 적절한 코드는 무엇일까요?",
    code: `
    function Counter() {
      const [count, setCount] = React.useState(1);
  
      const doubleCount = () => {
        setCount(______);
      };
  
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={doubleCount}>Double</button>
        </div>
      );
    }
    `,
    answerOptions: [
      ["count * 2"],
      ["count + count"],
      ["(count) => count * 2"],
      ["(count) => count + count"],
    ],
    answer: ["count * 2"],
    explanation:
      "React의 useState 훅에서 상태를 업데이트할 때는 상태 설정 함수(setCount)에 직접 새로운 상태값을 전달합니다. 따라서 'count * 2'가 적절한 코드입니다. 이 코드는 count 상태값을 2배로 증가시키는 기능을 합니다.",
    subject: "typescript",
    subSubject: "setState",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "스타일드 컴포넌트에서 props의 isActive 값에 따라 버튼의 글씨색을 변경하는 기능을 수행하는 빈칸에 들어갈 적절한 코드는 무엇일까요?",
    code: `
    import styled from 'styled-components';
  
    export const BlueButton = styled.button\`
      color: '$'{(props) => ______};
    \`;
    `,
    answerOptions: [
      ['"blue"'],
      ['props.isActive ? "blue" : "red"'],
      ['props.isActive && "blue"'],
      ["props.isActive"],
    ],
    answer: ['props.isActive ? "blue" : "red"'],
    explanation:
      "스타일드 컴포넌트에서는 함수를 이용하여 props에 따라 동적으로 CSS 속성값을 결정할 수 있습니다. 따라서 'props.isActive ? \"blue\" : \"red\"'가 적절한 코드입니다. 이 코드는 props의 isActive 값에 따라 버튼의 글씨색을 'blue' 또는 'red'로 변경하는 기능을 합니다.",
    subject: "typescript",
    subSubject: "setState",
    quizType: "coding",
  },
];
