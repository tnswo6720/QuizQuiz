// questions1.js
export const javascriptNotionEvent = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "아래 옵션 중 JavaScript에서 이벤트를 정의하는 가장 정확한 설명은 무엇인가요?",
    answerOptions: [
      {
        text: "문서나 브라우저 창의 상태 변경에 따른 사용자나 브라우저의 특정 동작",
        isCorrect: true,
      },
      {
        text: "함수 내에서 사용될 수 있는 변수",
        isCorrect: false,
      },
      {
        text: "HTML 요소의 속성",
        isCorrect: false,
      },
      {
        text: "코드의 실행 순서를 변경하는 구문",
        isCorrect: false,
      },
    ],
    answer:
      "문서나 브라우저 창의 상태 변경에 따른 사용자나 브라우저의 특정 동작",
    explanation:
      "JavaScript에서 이벤트는 문서나 브라우저 창의 상태 변경에 따른 사용자나 브라우저의 특정 동작을 말합니다. 예를 들어, 사용자가 버튼을 클릭하면 'click' 이벤트가 발생합니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 버튼 요소에 클릭 이벤트 리스너를 추가하는 올바른 방법은 무엇인가요?",
    code: `
      var button = document.querySelector('button');
    `,
    answerOptions: [
      {
        text: "button.addEventListener('click', function() { console.log('Button clicked!'); });",
        isCorrect: true,
      },
      {
        text: "button.on('click', function() { console.log('Button clicked!'); });",
        isCorrect: false,
      },
      {
        text: "button.click(function() { console.log('Button clicked!'); });",
        isCorrect: false,
      },
      {
        text: "button.bind('click', function() { console.log('Button clicked!'); });",
        isCorrect: false,
      },
    ],
    answer:
      "button.addEventListener('click', function() { console.log('Button clicked!'); });",
    explanation:
      "JavaScript에서 이벤트 리스너는 'addEventListener' 메서드를 사용하여 추가합니다. 이 메서드는 이벤트 타입과 이벤트가 발생했을 때 실행될 함수를 인자로 받습니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 옵션 중 JavaScript에서 'mouseover' 이벤트가 발생하는 시점은 언제인가요?",
    answerOptions: [
      {
        text: "마우스 포인터가 요소 위로 이동했을 때",
        isCorrect: true,
      },
      {
        text: "마우스 버튼을 클릭했을 때",
        isCorrect: false,
      },
      {
        text: "키보드 키를 눌렀을 때",
        isCorrect: false,
      },
      {
        text: "마우스 포인터가 요소를 벗어났을 때",
        isCorrect: false,
      },
    ],
    answer: "마우스 포인터가 요소 위로 이동했을 때",
    explanation:
      "'mouseover' 이벤트는 마우스 포인터가 특정 요소 위로 이동했을 때 발생합니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'p' 요소에 'mouseover' 이벤트 리스너를 추가하는 올바른 방법은 무엇인가요?",
    code: `
      var p = document.querySelector('p');
    `,
    answerOptions: [
      {
        text: "p.addEventListener('mouseover', function() { console.log('Mouse over!'); });",
        isCorrect: true,
      },
      {
        text: "p.on('mouseover', function() { console.log('Mouse over!'); });",
        isCorrect: false,
      },
      {
        text: "p.mouseover(function() { console.log('Mouse over!'); });",
        isCorrect: false,
      },
      {
        text: "p.bind('mouseover', function() { console.log('Mouse over!'); });",
        isCorrect: false,
      },
    ],
    answer:
      "p.addEventListener('mouseover', function() { console.log('Mouse over!'); });",
    explanation:
      "'addEventListener' 메서드를 사용하여 이벤트 리스너를 추가합니다. 이 메서드는 이벤트 타입과 이벤트가 발생했을 때 실행될 함수를 인자로 받습니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 옵션 중 JavaScript에서 'keydown' 이벤트가 발생하는 시점은 언제인가요?",
    answerOptions: [
      {
        text: "키보드 키를 누르는 순간",
        isCorrect: true,
      },
      {
        text: "키보드 키를 누르고 있다가 떼는 순간",
        isCorrect: false,
      },
      {
        text: "마우스 버튼을 클릭했을 때",
        isCorrect: false,
      },
      {
        text: "마우스 포인터가 요소 위로 이동했을 때",
        isCorrect: false,
      },
    ],
    answer: "키보드 키를 누르는 순간",
    explanation: "'keydown' 이벤트는 키보드 키를 누르는 순간에 발생합니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'input' 요소에 'keydown' 이벤트 리스너를 추가하는 올바른 방법은 무엇인가요?",
    code: `
      var input = document.querySelector('input');
    `,
    answerOptions: [
      {
        text: "input.addEventListener('keydown', function() { console.log('Key down!'); });",
        isCorrect: true,
      },
      {
        text: "input.on('keydown', function() { console.log('Key down!'); });",
        isCorrect: false,
      },
      {
        text: "input.keydown(function() { console.log('Key down!'); });",
        isCorrect: false,
      },
      {
        text: "input.bind('keydown', function() { console.log('Key down!'); });",
        isCorrect: false,
      },
    ],
    answer:
      "input.addEventListener('keydown', function() { console.log('Key down!'); });",
    explanation:
      "'addEventListener' 메서드를 사용하여 이벤트 리스너를 추가합니다. 이 메서드는 이벤트 타입과 이벤트가 발생했을 때 실행될 함수를 인자로 받습니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 옵션 중 JavaScript에서 'keyup' 이벤트가 발생하는 시점은 언제인가요?",
    answerOptions: [
      {
        text: "키보드 키를 누르고 있다가 떼는 순간",
        isCorrect: true,
      },
      {
        text: "키보드 키를 누르는 순간",
        isCorrect: false,
      },
      {
        text: "마우스 버튼을 클릭했을 때",
        isCorrect: false,
      },
      {
        text: "마우스 포인터가 요소 위로 이동했을 때",
        isCorrect: false,
      },
    ],
    answer: "키보드 키를 누르고 있다가 떼는 순간",
    explanation:
      "'keyup' 이벤트는 키보드 키를 누르고 있다가 떼는 순간에 발생합니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'textarea' 요소에 'keyup' 이벤트 리스너를 추가하는 올바른 방법은 무엇인가요?",
    code: `
      var textarea = document.querySelector('textarea');
    `,
    answerOptions: [
      {
        text: "textarea.addEventListener('keyup', function() { console.log('Key up!'); });",
        isCorrect: true,
      },
      {
        text: "textarea.on('keyup', function() { console.log('Key up!'); });",
        isCorrect: false,
      },
      {
        text: "textarea.keyup(function() { console.log('Key up!'); });",
        isCorrect: false,
      },
      {
        text: "textarea.bind('keyup', function() { console.log('Key up!'); });",
        isCorrect: false,
      },
    ],
    answer:
      "textarea.addEventListener('keyup', function() { console.log('Key up!'); });",
    explanation:
      "'addEventListener' 메서드를 사용하여 이벤트 리스너를 추가합니다. 이 메서드는 이벤트 타입과 이벤트가 발생했을 때 실행될 함수를 인자로 받습니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 옵션 중 JavaScript에서 'change' 이벤트가 발생하는 조건은 무엇인가요?",
    answerOptions: [
      {
        text: "입력 필드의 값이 변경되고 해당 필드가 포커스를 잃었을 때",
        isCorrect: true,
      },
      {
        text: "입력 필드의 값이 변경되었을 때",
        isCorrect: false,
      },
      {
        text: "입력 필드가 포커스를 잃었을 때",
        isCorrect: false,
      },
      {
        text: "입력 필드에 포커스가 맞춰졌을 때",
        isCorrect: false,
      },
    ],
    answer: "입력 필드의 값이 변경되고 해당 필드가 포커스를 잃었을 때",
    explanation:
      "'change' 이벤트는 입력 필드의 값이 변경되고 해당 필드가 포커스를 잃었을 때 발생합니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'select' 요소에 'change' 이벤트 리스너를 추가하는 올바른 방법은 무엇인가요?",
    code: `
      var select = document.querySelector('select');
    `,
    answerOptions: [
      {
        text: "select.addEventListener('change', function() { console.log('Changed!'); });",
        isCorrect: true,
      },
      {
        text: "select.on('change', function() { console.log('Changed!'); });",
        isCorrect: false,
      },
      {
        text: "select.change(function() { console.log('Changed!'); });",
        isCorrect: false,
      },
      {
        text: "select.bind('change', function() { console.log('Changed!'); });",
        isCorrect: false,
      },
    ],
    answer:
      "select.addEventListener('change', function() { console.log('Changed!'); });",
    explanation:
      "'addEventListener' 메서드를 사용하여 이벤트 리스너를 추가합니다. 이 메서드는 이벤트 타입과 이벤트가 발생했을 때 실행될 함수를 인자로 받습니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드를 실행하면, 'Click!' 버튼을 클릭했을 때 어떤 alert가 먼저 표시됩니까?",
    code: `
      <div id="parent">
        <button id="child">Click!</button>
      </div>

      <script>
        document.getElementById('child').addEventListener('click', function() {
          alert('Child Button Clicked!');
        });

        document.getElementById('parent').addEventListener('click', function() {
          alert('Parent Div Clicked!');
        });
      </script>
    `,
    answerOptions: [
      {
        text: "'Child Button Clicked!'",
        isCorrect: true,
      },
      {
        text: "'Parent Div Clicked!'",
        isCorrect: false,
      },
    ],
    answer: "'Child Button Clicked!'",
    explanation:
      "이벤트 버블링 때문에, 'Child Button Clicked!' alert가 먼저 표시되고, 그 다음에 'Parent Div Clicked!' alert가 표시됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드를 실행하면, 'Click!' 버튼을 클릭했을 때 어떤 alert가 먼저 표시됩니까?",
    code: `
      <div id="parent">
        <button id="child">Click!</button>
      </div>

      <script>
        document.getElementById('child').addEventListener('click', function() {
          alert('Child Button Clicked!');
        });

        document.getElementById('parent').addEventListener('click', function() {
          alert('Parent Div Clicked!');
        }, true);
      </script>
    `,
    answerOptions: [
      {
        text: "'Child Button Clicked!'",
        isCorrect: false,
      },
      {
        text: "'Parent Div Clicked!'",
        isCorrect: true,
      },
    ],
    answer: "'Parent Div Clicked!'",
    explanation:
      "이벤트 캡처 때문에, 'Parent Div Clicked!' alert가 먼저 표시되고, 그 다음에 'Child Button Clicked!' alert가 표시됩니다. 이벤트 캡처는 이벤트가 가장 상위의 부모 요소에서 시작하여 이벤트의 대상인 요소까지 내려가는 단계를 의미합니다. 여기서 'parent' 요소의 이벤트 리스너는 세 번째 인자가 `true`이므로 캡처링 단계에서 동작하게 됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
];
