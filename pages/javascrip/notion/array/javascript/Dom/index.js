// questions1.js
export const javascriptNotionDom = [
  // 질문 데이터...
  // promise

  {
    type: "multiple-choice",
    questionText: "아래의 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      <div id="myDiv">Hello, world!</div>

      <script>
        var div = document.getElementById('myDiv');
        div.textContent = 'Hello, OpenAI!';
        console.log(div.textContent);
      </script>
    `,
    answerOptions: [
      {
        text: "'Hello, OpenAI!'",
        isCorrect: true,
      },
      {
        text: "'Hello, world!'",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
    ],
    answer: "'Hello, OpenAI!'",
    explanation:
      "DOM 조작을 통해 'myDiv' 요소의 텍스트 내용을 'Hello, OpenAI!'로 변경하였으므로, console.log(div.textContent)는 'Hello, OpenAI!'를 출력합니다.",
    subject: "javascript",
    subSubject: "dom manipulation",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      <div id="myDiv">
        <p>Hello, world!</p>
      </div>

      <script>
        var div = document.getElementById('myDiv');
        var p = div.querySelector('p');
        p.textContent = 'Hello, OpenAI!';
        console.log(p.textContent);
      </script>
    `,
    answerOptions: [
      {
        text: "'Hello, OpenAI!'",
        isCorrect: true,
      },
      {
        text: "'Hello, world!'",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
    ],
    answer: "'Hello, OpenAI!'",
    explanation:
      "DOM 조작을 통해 'myDiv' 요소 내의 'p' 요소의 텍스트 내용을 'Hello, OpenAI!'로 변경하였으므로, console.log(p.textContent)는 'Hello, OpenAI!'를 출력합니다.",
    subject: "javascript",
    subSubject: "dom manipulation",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      <div id="myDiv">
        <p id="myP">Hello, world!</p>
      </div>

      <script>
        var p = document.getElementById('myP');
        p.textContent = 'Hello, OpenAI!';
        console.log(p.textContent);
      </script>
    `,
    answerOptions: [
      {
        text: "'Hello, OpenAI!'",
        isCorrect: true,
      },
      {
        text: "'Hello, world!'",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
    ],
    answer: "'Hello, OpenAI!'",
    explanation:
      "DOM 조작을 통해 'myP' 요소의 텍스트 내용을 'Hello, OpenAI!'로 변경하였으므로, console.log(p.textContent)는 'Hello, OpenAI!'를 출력합니다.",
    subject: "javascript",
    subSubject: "dom manipulation",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      <div id="myDiv">
        <p id="myP">Hello, world!</p>
      </div>

      <script>
        var div = document.getElementById('myDiv');
        var p = document.createElement('p');
        p.textContent = 'Hello, OpenAI!';
        div.appendChild(p);
        console.log(p.textContent);
      </script>
    `,
    answerOptions: [
      {
        text: "'Hello, OpenAI!'",
        isCorrect: true,
      },
      {
        text: "'Hello, world!'",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
    ],
    answer: "'Hello, OpenAI!'",
    explanation:
      "DOM 조작을 통해 새로운 'p' 요소를 생성하고, 텍스트 내용을 'Hello, OpenAI!'로 설정한 후 'myDiv' 요소의 자식 요소로 추가하였으므로, console.log(p.textContent)는 'Hello, OpenAI!'를 출력합니다.",
    subject: "javascript",
    subSubject: "dom manipulation",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      <div id="myDiv">
        <p id="myP">Hello, world!</p>
      </div>

      <script>
        var p = document.getElementById('myP');
        p.remove();
        console.log(document.getElementById('myP'));
      </script>
    `,
    answerOptions: [
      {
        text: "null",
        isCorrect: true,
      },
      {
        text: "'Hello, world!'",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "'Hello, OpenAI!'",
        isCorrect: false,
      },
    ],
    answer: "null",
    explanation:
      "DOM 조작을 통해 'myP' 요소를 제거하였으므로, console.log(document.getElementById('myP'))는 null을 출력합니다.",
    subject: "javascript",
    subSubject: "dom manipulation",
    quizType: "coding",
  },

  // promise
];
