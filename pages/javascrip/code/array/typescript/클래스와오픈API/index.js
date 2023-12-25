// questions1.js
export const typescriptCodeClass = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "React 클래스 컴포넌트에서 DOM이 처음으로 렌더링 된 후에 실행되는 라이프사이클 메서드는 무엇인가요? 아래의 빈칸을 채워주세요.",
    code: `
      import { Component } from "react";
  
      export default class ClassCounterPage extends Component {
        // ...
  
        _________(): void {
          console.log("그려지고 나서 실행!!!");
        }
  
        // ...
      }
    `,
    answerOptions: [
      "componentDidMount",
      "componentWillMount",
      "componentDidUpdate",
      "componentWillUnmount",
    ],
    answer: "componentDidMount",
    explanation:
      "React 클래스 컴포넌트에서 'componentDidMount' 메서드는 컴포넌트가 마운트된 직후, 즉 DOM에 삽입된 후에 실행됩니다. 이 시점에서 API 호출, DOM 조작, 상태 업데이트 등을 수행할 수 있으며, 이러한 작업들은 컴포넌트가 사용자에게 보여지기 전에 이루어져야 하는 경우에 사용됩니다.",
    subject: "typescript",
    subSubject: "class",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "React 클래스 컴포넌트에서 상태(state)나 속성(props)이 변경된 후에 실행되는 라이프사이클 메서드는 무엇인가요? 아래의 빈칸을 채워주세요.",
    code: `
      import { Component } from "react";
  
      export default class ClassCounterPage extends Component {
        // ...
  
        _________(): void {
          console.log("변경되고 나서 실행!!");
        }
  
        // ...
      }
    `,
    answerOptions: [
      "componentWillUpdate",
      "componentDidMount",
      "componentDidUpdate",
      "componentWillUnmount",
    ],
    answer: "componentDidUpdate",
    explanation:
      "React 클래스 컴포넌트에서 'componentDidUpdate' 메서드는 컴포넌트의 업데이트가 DOM에 반영된 후에 실행됩니다. 이 메서드는 주로 업데이트가 발생한 후의 DOM을 조작하거나, 업데이트에 따른 추가적인 네트워크 요청을 수행하는 데 사용됩니다.",
    subject: "typescript",
    subSubject: "class",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "React 클래스 컴포넌트에서 컴포넌트가 DOM에서 제거되기 직전에 호출되는 라이프사이클 메서드는 무엇인가요? 아래의 빈칸을 채워주세요.",
    code: `
      import { Component } from "react";
  
      export default class ClassCounterPage extends Component {
        // ...
  
        _________(): void {
          console.log("사라지기 전에 실행!!");
          // 예) 채팅방 나가기 API 호출 등
        }
  
        // ...
      }
    `,
    answerOptions: [
      "componentWillMount",
      "componentDidMount",
      "componentDidUpdate",
      "componentWillUnmount",
    ],
    answer: "componentWillUnmount",
    explanation:
      "React 클래스 컴포넌트에서 'componentWillUnmount' 메서드는 컴포넌트가 DOM에서 제거되기 바로 직전에 호출됩니다. 이 메서드는 주로 이벤트 리스너 제거, 타이머 해제, 네트워크 요청 취소 등의 정리(clean-up) 작업을 수행하는 데 사용됩니다. 컴포넌트의 마운트 해제 과정에서 필요한 마지막 정리 작업을 수행하여 메모리 누수를 방지하는 데 중요한 역할을 합니다.",
    subject: "typescript",
    subSubject: "class",
    quizType: "coding",
  },
];
