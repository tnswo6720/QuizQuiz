// questions1.js
export const javascriptCodeEvent = [
  // 질문 데이터...

  // 자바스크립트 event
  // 자바스크립트 event

  {
    type: "fill-in-the-blank",
    questionText:
      "1자바스크립트에서 HTML 요소에 이벤트 리스너를 추가하는 메서드는 무엇인가요?",
    code: `
      const btn = document.querySelector('button');
  
      btn.______('click', function() {
        console.log('Button clicked!');
      });
    `,
    answerOptions: [
      "addEventListener",
      "removeEventListener",
      "dispatchEvent",
      "createEvent",
    ],
    answer: "addEventListener",
    explanation:
      "'addEventListener' 메서드는 특정 이벤트를 감지하고 그에 반응하는 이벤트 리스너를 추가하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "2자바스크립트에서 HTML 요소에 추가된 이벤트 리스너를 제거하는 메서드는 무엇인가요?",
    code: `
      const btn = document.querySelector('button');
  
      function handleClick() {
        console.log('Button clicked!');
      }
  
      btn.addEventListener('click', handleClick);
      btn.______('click', handleClick);
    `,
    answerOptions: [
      "addEventListener",
      "removeEventListener",
      "dispatchEvent",
      "createEvent",
    ],
    answer: "removeEventListener",
    explanation:
      "'removeEventListener' 메서드는 이전에 추가된 이벤트 리스너를 제거하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "3자바스크립트에서 새로운 이벤트 객체를 생성하는 생성자는 무엇인가요?",
    code: `
      const btn = document.querySelector('button');
  
      const event = new ______('click');
  
      btn.dispatchEvent(event);
    `,
    answerOptions: ["Event", "CustomEvent", "MouseEvent", "KeyboardEvent"],
    answer: "Event",
    explanation:
      "'Event' 생성자는 새로운 이벤트 객체를 생성하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 이벤트 객체의 타입을 확인하는 속성은 무엇인가요?",
    code: `
      const btn = document.querySelector('button');
  
      btn.addEventListener('click', function(event) {
        console.log(event.______);
      });
    `,
    answerOptions: ["type", "target", "currentTarget", "detail"],
    answer: "type",
    explanation:
      "이벤트 객체의 'type' 속성은 발생한 이벤트의 타입을 나타냅니다. 이 경우 'click'이 출력됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 이벤트가 발생한 대상 요소를 확인하는 속성은 무엇인가요?",
    code: `
      const btn = document.querySelector('button');
  
      btn.addEventListener('click', function(event) {
        console.log(event.______);
      });
    `,
    answerOptions: ["type", "target", "currentTarget", "detail"],
    answer: "target",
    explanation:
      "이벤트 객체의 'target' 속성은 이벤트가 발생한 대상 요소를 나타냅니다. 이 경우 'button' 요소가 출력됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
];
