// questions1.js
export const cssNotionselector = [
  // 질문 데이터...
  // basic
  // basic

  {
    type: "multiple-choice",
    questionText: "다음 중 CSS의 아이디 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
      #myId {
        color: blue;
      }
      `,
    answerOptions: [
      {
        text: "아이디 선택자는 class 속성을 선택하는 데 사용된다.",
        isCorrect: false,
      },
      {
        text: "아이디 선택자는 문서 내의 모든 요소를 선택하는 데 사용된다.",
        isCorrect: false,
      },
      {
        text: "아이디 선택자는 문서 내의 특정 요소를 선택하는 데 사용된다.",
        isCorrect: true,
      },
      {
        text: "아이디 선택자는 문서의 특정 태그를 선택하는 데 사용된다.",
        isCorrect: false,
      },
    ],
    answer: "아이디 선택자는 문서 내의 특정 요소를 선택하는 데 사용된다.",
    explanation:
      "CSS의 아이디 선택자는 HTML 문서 내의 특정 요소를 선택하는 데 사용됩니다. 아이디 선택자는 '#'으로 시작하며, HTML 요소의 id 속성과 일치하는 값을 찾아 스타일을 적용합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 CSS의 인접 형제 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
      h1 + p {
        color: red;
      }
      `,
    answerOptions: [
      {
        text: "인접 형제 선택자는 주어진 선택자의 모든 형제 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "인접 형제 선택자는 주어진 선택자의 바로 다음 형제 요소만 선택한다.",
        isCorrect: true,
      },
      {
        text: "인접 형제 선택자는 주어진 선택자의 부모 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "인접 형제 선택자는 주어진 선택자의 자식 요소를 선택한다.",
        isCorrect: false,
      },
    ],
    answer:
      "인접 형제 선택자는 주어진 선택자의 바로 다음 형제 요소만 선택한다.",
    explanation:
      "CSS의 인접 형제 선택자는 주어진 선택자의 바로 다음 형제 요소만 선택합니다. 이 선택자는 '+' 기호를 사용하여 표현됩니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "다음 중 CSS의 아이디 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
        #myId {
          color: blue;
        }
        `,
    answerOptions: [
      {
        text: "아이디 선택자는 class 속성을 선택하는 데 사용된다.",
        isCorrect: false,
      },
      {
        text: "아이디 선택자는 문서 내의 모든 요소를 선택하는 데 사용된다.",
        isCorrect: false,
      },
      {
        text: "아이디 선택자는 문서 내의 특정 요소를 선택하는 데 사용된다.",
        isCorrect: true,
      },
      {
        text: "아이디 선택자는 문서의 특정 태그를 선택하는 데 사용된다.",
        isCorrect: false,
      },
    ],
    answer: "아이디 선택자는 문서 내의 특정 요소를 선택하는 데 사용된다.",
    explanation:
      "CSS의 아이디 선택자는 HTML 문서 내의 특정 요소를 선택하는 데 사용됩니다. 아이디 선택자는 '#'으로 시작하며, HTML 요소의 id 속성과 일치하는 값을 찾아 스타일을 적용합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 CSS의 인접 형제 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
        h1 + p {
          color: red;
        }
        `,
    answerOptions: [
      {
        text: "인접 형제 선택자는 주어진 선택자의 모든 형제 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "인접 형제 선택자는 주어진 선택자의 바로 다음 형제 요소만 선택한다.",
        isCorrect: true,
      },
      {
        text: "인접 형제 선택자는 주어진 선택자의 부모 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "인접 형제 선택자는 주어진 선택자의 자식 요소를 선택한다.",
        isCorrect: false,
      },
    ],
    answer:
      "인접 형제 선택자는 주어진 선택자의 바로 다음 형제 요소만 선택한다.",
    explanation:
      "CSS의 인접 형제 선택자는 주어진 선택자의 바로 다음 형제 요소만 선택합니다. 이 선택자는 '+' 기호를 사용하여 표현됩니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 중 CSS의 자식 결합자에 대한 올바른 설명은 무엇인가?",
    code: `
    ul > li {
      color: purple;
    }
    `,
    answerOptions: [
      {
        text: "자식 결합자는 주어진 선택자의 모든 하위 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "자식 결합자는 주어진 선택자의 바로 다음 형제 요소만 선택한다.",
        isCorrect: false,
      },
      {
        text: "자식 결합자는 주어진 선택자의 직계 자식만 선택한다.",
        isCorrect: true,
      },
      {
        text: "자식 결합자는 주어진 선택자의 부모 요소를 선택한다.",
        isCorrect: false,
      },
    ],
    answer: "자식 결합자는 주어진 선택자의 직계 자식만 선택한다.",
    explanation:
      "CSS의 자식 결합자는 주어진 선택자의 직계 자식만 선택합니다. 이 선택자는 '>' 기호를 사용하여 표현됩니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 중 CSS의 클래스 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
    .myClass {
      color: yellow;
    }
    `,
    answerOptions: [
      {
        text: "클래스 선택자는 문서 내의 모든 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "클래스 선택자는 문서 내의 특정 아이디를 가진 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "클래스 선택자는 문서 내의 특정 태그를 가진 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "클래스 선택자는 문서 내의 해당 클래스를 가진 모든 요소를 선택한다.",
        isCorrect: true,
      },
    ],
    answer:
      "클래스 선택자는 문서 내의 해당 클래스를 가진 모든 요소를 선택한다.",
    explanation:
      "CSS의 클래스 선택자는 HTML 문서 내의 해당 클래스를 가진 모든 요소를 선택하여 스타일을 적용합니다. 클래스 선택자는 '.'으로 시작합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 CSS의 일반 형제 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
    h1 ~ p {
      color: orange;
    }
    `,
    answerOptions: [
      {
        text: "일반 형제 선택자는 주어진 선택자의 모든 하위 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "일반 형제 선택자는 주어진 선택자의 바로 다음 형제 요소만 선택한다.",
        isCorrect: false,
      },
      {
        text: "일반 형제 선택자는 주어진 선택자의 모든 형제 요소를 선택한다.",
        isCorrect: true,
      },
      {
        text: "일반 형제 선택자는 주어진 선택자의 부모 요소를 선택한다.",
        isCorrect: false,
      },
    ],
    answer: "일반 형제 선택자는 주어진 선택자의 모든 형제 요소를 선택한다.",
    explanation:
      "CSS의 일반 형제 선택자는 주어진 선택자의 모든 형제 요소를 선택합니다. 이 선택자는 '~' 기호를 사용하여 표현됩니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 중 CSS의 자손 결합자에 대한 올바른 설명은 무엇인가?",
    code: `
    div a {
      color: pink;
    }
    `,
    answerOptions: [
      {
        text: "자손 결합자는 주어진 선택자의 모든 하위 요소를 선택한다.",
        isCorrect: true,
      },
      {
        text: "자손 결합자는 주어진 선택자의 바로 다음 형제 요소만 선택한다.",
        isCorrect: false,
      },
      {
        text: "자손 결합자는 주어진 선택자의 직계 자식만 선택한다.",
        isCorrect: false,
      },
      {
        text: "자손 결합자는 주어진 선택자의 부모 요소를 선택한다.",
        isCorrect: false,
      },
    ],
    answer: "자손 결합자는 주어진 선택자의 모든 하위 요소를 선택한다.",
    explanation:
      "CSS의 자손 결합자는 주어진 선택자의 모든 하위 요소를 선택합니다. 이 선택자는 공백으로 표현됩니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 CSS의 가상 클래스 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
    a:hover {
      color: teal;
    }
    `,
    answerOptions: [
      {
        text: "가상 클래스 선택자는 문서 내의 모든 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "가상 클래스 선택자는 문서 내의 특정 아이디를 가진 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "가상 클래스 선택자는 문서 내의 특정 상태에 있는 요소를 선택한다.",
        isCorrect: true,
      },
      {
        text: "가상 클래스 선택자는 문서 내의 특정 태그를 가진 요소를 선택한다.",
        isCorrect: false,
      },
    ],
    answer: "가상 클래스 선택자는 문서 내의 특정 상태에 있는 요소를 선택한다.",
    explanation:
      "CSS의 가상 클래스 선택자는 HTML 요소의 특정 상태에 있는 요소를 선택하여 스타일을 적용합니다. 가상 클래스 선택자는 ':'으로 시작합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 중 CSS의 속성 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
    input[type='text'] {
      color: navy;
    }
    `,
    answerOptions: [
      {
        text: "속성 선택자는 문서 내의 모든 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "속성 선택자는 문서 내의 특정 아이디를 가진 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "속성 선택자는 문서 내의 특정 속성을 가진 요소를 선택한다.",
        isCorrect: true,
      },
      {
        text: "속성 선택자는 문서 내의 특정 태그를 가진 요소를 선택한다.",
        isCorrect: false,
      },
    ],
    answer: "속성 선택자는 문서 내의 특정 속성을 가진 요소를 선택한다.",
    explanation:
      "CSS의 속성 선택자는 HTML 문서 내의 특정 속성을 가진 요소를 선택하여 스타일을 적용합니다. 속성 선택자는 대괄호([])로 표현됩니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 CSS의 가상 요소 선택자에 대한 올바른 설명은 무엇인가?",
    code: `
    p::first-line {
      color: olive;
    }
    `,
    answerOptions: [
      {
        text: "가상 요소 선택자는 문서 내의 모든 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "가상 요소 선택자는 문서 내의 특정 아이디를 가진 요소를 선택한다.",
        isCorrect: false,
      },
      {
        text: "가상 요소 선택자는 문서 내의 특정 부분에 스타일을 적용한다.",
        isCorrect: true,
      },
      {
        text: "가상 요소 선택자는 문서 내의 특정 태그를 가진 요소를 선택한다.",
        isCorrect: false,
      },
    ],
    answer: "가상 요소 선택자는 문서 내의 특정 부분에 스타일을 적용한다.",
    explanation:
      "CSS의 가상 요소 선택자는 HTML 요소의 특정 부분에 스타일을 적용합니다. 가상 요소 선택자는 '::'으로 시작합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
];
