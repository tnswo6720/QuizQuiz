// questions1.js
export const javascriptCodeDom = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "주어진 스크립트에서, 버튼 클릭 시 `h1` 태그의 첫 번째 요소의 색상이 노란색에서 빨간색, 그리고 빨간색에서 노란색으로 번갈아가며 변경되도록 합니다. 아래 코드의 빈칸을 채우세요.",
    code: `
      const h1 = document.______('.title');
      console.log(h1[0]);
      h1[0].innerHTML = '1111';
      h1[0].style.color = 'yellow';
      h1[0].style.fontSize = '60px';
      h1[0].style.paddingLeft = '160px';
  
      const button = document.querySelector('button');
      button.______('click', () => {
        if (h1[0].style.color === 'yellow') {
          h1[0].style.color = 'red';
        } else {
          h1[0].style.color = 'yellow';
        }
      });
    `,
    answerOptions: [
      ["querySelectorAll, addEventListener"],
      ["getElementByClass, onEvent"],
      ["getElementsByClassName, addListener"],
      ["querySelectorAll, attachEvent"],
    ],
    answer: ["querySelectorAll, addEventListener"],
    explanation:
      "JavaScript에서 여러 요소를 선택하기 위해 `document.querySelectorAll` 메서드를 사용합니다. 이 메서드는 주어진 CSS 선택자에 일치하는 문서의 요소들의 NodeList를 반환합니다. 이벤트 리스너를 추가하기 위해서는 `addEventListener` 메서드를 사용하는데, 이는 지정된 이벤트가 대상에 전달될 때마다 호출할 함수를 설정합니다. 따라서 `document.querySelectorAll('.title')`는 클래스가 'title'인 모든 `h1` 요소를 선택하고, `button.addEventListener('click', callbackFunction)`은 버튼에 클릭 이벤트 리스너를 추가하여 클릭 시 콜백 함수가 실행되도록 합니다.",
    subject: "javascript",
    subSubject: "Dom",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "HTML 문서에서 특정 태그 이름을 가진 모든 요소를 선택하는 메서드의 사용법에 대해 실습합니다. 이 메서드를 사용하여 'div' 태그를 가진 모든 요소의 배경색을 'lightblue'로 변경하는 함수를 작성하세요.",
    code: `
      function changeDivBackgrounds() {
        const divs = document.______('div');
        for (let i = 0; i < divs.length; i++) {
          divs[i].style.______ = 'lightblue';
        }
      }
    `,
    answerOptions: [
      ["getElementsByTagName, backgroundColor"],
      ["getElementsByTag, background"],
      ["findElementsByTagName, background-color"],
      ["queryTag, bgColor"],
    ],
    answer: ["getElementsByTagName, backgroundColor"],
    explanation:
      "`document.getElementsByTagName` 메서드는 주어진 태그 이름(tag name)과 일치하는 모든 요소의 HTMLCollection을 반환합니다. 이 컬렉션은 유사 배열 객체로, for 루프를 사용하여 각 요소에 접근할 수 있습니다. 요소의 스타일은 `style` 객체를 통해 접근하며, 여기서는 배경색을 변경하기 위해 `backgroundColor` 속성을 사용합니다.",
    subject: "javascript",
    subSubject: "Dom",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "JavaScript를 사용하여 HTML 문서에서 id가 'myElement'인 요소의 텍스트 내용을 'Hello, World!'로 변경하려면 어떤 코드를 작성해야 하나요?",
    code: `
      document.getElementById('myElement')._______ = 'Hello, World!';
    `,
    answerOptions: [["textContent"], ["innerText"], ["innerHTML"], ["value"]],
    answer: ["textContent"],
    explanation:
      "DOM에서 요소의 텍스트 콘텐츠를 변경하기 위해 'textContent' 속성을 사용할 수 있습니다. 이 속성은 요소의 텍스트를 가져오거나 변경할 때 사용됩니다. 'document.getElementById('myElement').textContent = 'Hello, World!';' 코드는 id가 'myElement'인 요소를 찾아 그 텍스트 내용을 'Hello, World!'로 변경합니다. 'innerText' 속성도 유사한 작업을 수행하지만, 'textContent'는 스타일이나 스크립트가 적용되지 않은 원시 텍스트를 반환하므로 선호됩니다.",
    subject: "javascript",
    subSubject: "DOM",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "웹 페이지에 있는 버튼이 클릭될 때마다 콘솔에 'Button clicked!'라는 메시지를 출력하도록 JavaScript를 사용하여 이벤트 리스너를 추가하려면 어떻게 해야 하나요? 아래의 코드를 완성하세요.",
    code: `
      document.querySelector('button')._______('click', function() {
        console.log('_______');
      });
    `,
    answerOptions: [
      ["addEventListener", "Button clicked!"],
      ["attachEvent", "Button clicked!"],
      ["onEvent", "Button clicked!"],
      ["bindEvent", "Button clicked!"],
    ],
    answer: ["addEventListener", "Button clicked!"],
    explanation:
      "DOM 요소에 이벤트 리스너를 추가하기 위해 'addEventListener' 메서드를 사용합니다. 이 메서드는 첫 번째 인자로 이벤트 타입을, 두 번째 인자로 호출될 콜백 함수를 받습니다. 'document.querySelector('button').addEventListener('click', function() { console.log('Button clicked!'); });' 코드는 버튼이 클릭될 때마다 콘솔에 'Button clicked!'라는 메시지를 출력하도록 합니다.",
    subject: "javascript",
    subSubject: "DOM",
    quizType: "coding",
  },
];
