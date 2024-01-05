// questions1.js
export const javascriptCodeDom = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "주어진 스크립트에서, 버튼 클릭 시 `h1` 태그의 첫 번째 요소의 색상이 노란색에서 빨간색, 그리고 빨간색에서 노란색으로 번갈아가며 변경되도록 합니다. 아래 코드의 빈칸을 채우세요.",
    code: `
      const h1 = document._______('.title');
      console.log(h1[0]);
      h1[0].innerHTML = '1111';
      h1[0].style.color = 'yellow';
      h1[0].style.fontSize = '60px';
      h1[0].style.paddingLeft = '160px';
  
      const button = document.querySelector('button');
      button._______('click', () => {
        if (h1[0].style.color === 'yellow') {
          h1[0].style.color = 'red';
        } else {
          h1[0].style.color = 'yellow';
        }
      });
    `,
    answerOptions: [
      ["querySelectorAll", "addEventListener"],
      ["getElementByClass", "onEvent"],
      ["getElementsByClassName", "addListener"],
      ["querySelectorAll", "attachEvent"],
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
      "HTML 문서에서 특정 태그 이름을 가진 모든 요소를 선택하는 `document.getElementsByTagName` 메서드의 사용법에 대해 실습합니다. 이 메서드를 사용하여 'div' 태그를 가진 모든 요소의 배경색을 'lightblue'로 변경하는 함수를 작성하세요.",
    code: `
      function changeDivBackgrounds() {
        const divs = document._____('div');
        for (let i = 0; i < divs.length; i++) {
          divs[i].style._____ = 'lightblue';
        }
      }
    `,
    answerOptions: [
      ["getElementsByTagName", "backgroundColor"],
      ["getElementsByTag", "background"],
      ["findElementsByTagName", "background-color"],
      ["queryTag", "bgColor"],
    ],
    answer: ["getElementsByTagName, backgroundColor"],
    explanation:
      "`document.getElementsByTagName` 메서드는 주어진 태그 이름(tag name)과 일치하는 모든 요소의 HTMLCollection을 반환합니다. 이 컬렉션은 유사 배열 객체로, for 루프를 사용하여 각 요소에 접근할 수 있습니다. 요소의 스타일은 `style` 객체를 통해 접근하며, 여기서는 배경색을 변경하기 위해 `backgroundColor` 속성을 사용합니다.",
    subject: "javascript",
    subSubject: "DOM",
    quizType: "coding",
  },
];
