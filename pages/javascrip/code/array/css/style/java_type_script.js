// questions1.js
export const cssCodeStyle = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText: "HTML 요소에 직접 CSS를 적용하는 방법은 무엇인가요?",
    code: `
      <p ____="color: red;">This is a paragraph.</p>
    `,
    answerOptions: ["style", "css", "class", "id"],
    answer: "style",
    explanation:
      "HTML 요소에 직접 CSS를 적용하는 방법을 인라인 스타일이라고 합니다. 이를 위해 'style' 속성을 사용합니다.",
    subject: "css",
    subSubject: "style",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "HTML 문서 내부에 CSS를 적용하는 방법은 무엇인가요?",
    code: `
      <____>
        p {
          color: red;
        }
      </____>
    `,
    answerOptions: ["style", "css", "script", "head"],
    answer: "style",
    explanation:
      "HTML 문서 내부에 CSS를 적용하는 방법을 내부 스타일 시트라고 합니다. 이를 위해 'style' 태그를 사용합니다.",
    subject: "css",
    subSubject: "style",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "외부 CSS 파일을 HTML 문서에 적용하는 방법은 무엇인가요?",
    code: `
      <____ href="styles.css">
    `,
    answerOptions: ["style", "css", "script", "link"],
    answer: "link",
    explanation:
      "외부 CSS 파일을 HTML 문서에 적용하는 방법을 외부 스타일 시트라고 합니다. 이를 위해 'link' 태그를 사용합니다.",
    subject: "css",
    subSubject: "style",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 클래스 선택자를 사용하려면 어떤 기호를 앞에 붙이나요?",
    code: `
      .____ {
        color: red;
      }
    `,
    answerOptions: ["#", ".", ":", "@"],
    answer: ".",
    explanation:
      "CSS에서 클래스 선택자를 사용하려면 점(.)을 앞에 붙입니다. 예를 들어 '.class'는 'class'라는 클래스를 가진 요소를 선택합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "CSS에서 속성 선택자를 사용하려면 어떤 기호를 사용하나요?",
    code: `
      a[____='nofollow'] {
        color: red;
      }
    `,
    answerOptions: ["#", ".", ":", "rel"],
    answer: "rel",
    explanation:
      "CSS에서 속성 선택자를 사용하려면 대괄호([]) 안에 속성 이름을 넣습니다. 예를 들어 'a[rel='nofollow']'는 'rel' 속성 값이 'nofollow'인 'a' 요소를 선택합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 상태에 따라 스타일을 적용하려면 어떤 선택자를 사용하나요?",
    code: `
      a:____ {
        color: red;
      }
    `,
    answerOptions: ["active", "visited", "hover", "link"],
    answer: "hover",
    explanation:
      "CSS에서 요소의 상태에 따라 스타일을 적용하려면 가상 클래스 선택자를 사용합니다. 예를 들어 'a:hover'는 마우스가 'a' 요소 위에 있을 때 'a' 요소를 선택합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "HTML 요소에 직접 CSS를 적용하는 방법은 무엇인가요?",
    code: `
      <p ____="color: red;">This is a paragraph.</p>
    `,
    answerOptions: ["style", "css", "class", "id"],
    answer: "style",
    explanation:
      "HTML 요소에 직접 CSS를 적용하는 방법을 인라인 스타일이라고 합니다. 이를 위해 'style' 속성을 사용합니다.",
    subject: "css",
    subSubject: "style",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "HTML 문서 내부에 CSS를 적용하는 방법은 무엇인가요?",
    code: `
      <____>
        p {
          color: red;
        }
      </____>
    `,
    answerOptions: ["style", "css", "script", "head"],
    answer: "style",
    explanation:
      "HTML 문서 내부에 CSS를 적용하는 방법을 내부 스타일 시트라고 합니다. 이를 위해 'style' 태그를 사용합니다.",
    subject: "css",
    subSubject: "style",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "외부 CSS 파일을 HTML 문서에 적용하는 방법은 무엇인가요?",
    code: `
      <____ href="styles.css">
    `,
    answerOptions: ["style", "css", "script", "link"],
    answer: "link",
    explanation:
      "외부 CSS 파일을 HTML 문서에 적용하는 방법을 외부 스타일 시트라고 합니다. 이를 위해 'link' 태그를 사용합니다.",
    subject: "css",
    subSubject: "style",
    quizType: "coding",
  },
];
