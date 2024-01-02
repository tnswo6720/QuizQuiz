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
  {
    type: "multiple-choice",
    questionText:
      "다음 코드를 보고 'getElementById'와 'getElementsByClassName'의 차이점에 대한 설명 중, 틀린 것은 무엇인가요?",
    code: `
    <div id="testId" class="testClass">Hello, World!</div>
    <div class="testClass">Hello, again!</div>

    <script>
    var byId = document.getElementById("testId");
    var byClass = document.getElementsByClassName("testClass");
    </script>
    `,
    answerOptions: [
      {
        text: "'getElementById'는 문서에서 'testId'라는 ID를 가진 요소를 찾아 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'getElementsByClassName'는 문서에서 'testClass'라는 클래스를 가진 모든 요소를 찾아 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'getElementById'는 항상 단일 요소를 반환하며, 'getElementsByClassName'는 요소의 배열을 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'getElementsByClassName'는 ID를 기반으로 요소를 찾습니다.",
        isCorrect: true,
      },
    ],
    answer: "'getElementsByClassName'는 ID를 기반으로 요소를 찾습니다.",
    explanation:
      "'getElementsByClassName'는 클래스를 기반으로 요소를 찾는 메서드입니다. ID를 기반으로 요소를 찾는 것은 'getElementById'의 역할입니다. 따라서 'getElementsByClassName'는 ID를 기반으로 요소를 찾는다는 설명이 틀렸습니다.",
    subject: "javascript",
    subSubject: "dom manipulation",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드를 보고 'querySelector'에 대한 설명 중, 틀린 것은 무엇인가요?",
    code: `
    <div id="testId" class="testClass">Hello, World!</div>
    <div class="testClass">Hello, again!</div>

    <script>
    var byQuery = document.querySelector(".testClass");
    </script>
    `,
    answerOptions: [
      {
        text: "'querySelector'는 CSS 선택자를 사용하여 문서에서 요소를 찾아 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'querySelector'는 '.testClass'라는 클래스를 가진 첫 번째 요소를 찾아 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'querySelector'는 항상 단일 요소를 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'querySelector'는 '.testClass'라는 클래스를 가진 모든 요소를 찾아 반환합니다.",
        isCorrect: true,
      },
    ],
    answer:
      "'querySelector'는 '.testClass'라는 클래스를 가진 모든 요소를 찾아 반환합니다.",
    explanation:
      "'querySelector'는 CSS 선택자를 사용하여 문서에서 요소를 찾는 메서드입니다. 하지만, 이 메서드는 일치하는 첫 번째 요소만 반환합니다. 따라서 '.testClass'라는 클래스를 가진 모든 요소를 찾아 반환한다는 설명은 틀렸습니다. 모든 요소를 찾고 싶다면 'querySelectorAll'을 사용해야 합니다.",
    subject: "javascript",
    subSubject: "dOM manipulation",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드를 보고 'querySelector'와 'querySelectorAll'의 차이점에 대한 설명 중, 틀린 것은 무엇인가요?",
    code: `
    <div id="testId" class="testClass">Hello, World!</div>
    <div class="testClass">Hello, again!</div>

    <script>
    var singleElement = document.querySelector(".testClass");
    var allElements = document.querySelectorAll(".testClass");
    </script>
    `,
    answerOptions: [
      {
        text: "'querySelector'는 CSS 선택자를 사용하여 문서에서 요소를 찾아 첫 번째 일치하는 요소를 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'querySelectorAll'는 CSS 선택자를 사용하여 문서에서 요소를 찾아 모든 일치하는 요소를 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'querySelector'는 항상 단일 요소를 반환하며, 'querySelectorAll'는 요소의 노드 리스트를 반환합니다.",
        isCorrect: false,
      },
      {
        text: "'querySelectorAll'는 첫 번째 일치하는 요소만 반환합니다.",
        isCorrect: true,
      },
    ],
    answer: "'querySelectorAll'는 첫 번째 일치하는 요소만 반환합니다.",
    explanation:
      "'querySelectorAll'은 CSS 선택자를 사용하여 문서에서 요소를 찾는 메서드입니다. 하지만, 이 메서드는 일치하는 모든 요소를 노드 리스트 형태로 반환합니다. 따라서 첫 번째 일치하는 요소만 반환한다는 설명은 틀렸습니다. 첫 번째 요소만 반환하는 것은 'querySelector'의 역할입니다.",
    subject: "javascript",
    subSubject: "dOM manipulation",
    quizType: "coding",
  },

  // promise
];
