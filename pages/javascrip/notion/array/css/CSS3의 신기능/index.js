// questions1.js
export const cssNotionNew = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'transform' 속성에 대한 설명 중, 아래 코드에서 어떤 변환을 적용하고 있는지 올바르게 설명한 것은 무엇인가요?",
    code: "div { transform: rotate(45deg); }",
    answerOptions: [
      { text: "div 요소를 45도 회전시킨다.", isCorrect: true },
      { text: "div 요소를 45픽셀 이동시킨다.", isCorrect: false },
      { text: "div 요소의 크기를 45% 증가시킨다.", isCorrect: false },
      { text: "div 요소를 45% 투명하게 만든다.", isCorrect: false },
    ],
    answer: "div 요소를 45도 회전시킨다.",
    explanation:
      "'transform' 속성은 요소에 2D 또는 3D 변환을 적용합니다. 'rotate' 함수는 요소를 주어진 각도만큼 회전시킵니다.",
    subject: "css",
    subSubject: "new",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "CSS의 'transition' 속성에 대한 설명 중, 아래 코드에서 어떤 효과를 적용하고 있는지 올바르게 설명한 것은 무엇인가요?",
    code: "div { transition: width 2s ease-in-out; }",
    answerOptions: [
      { text: "div 요소의 너비가 2초 동안 서서히 변경된다.", isCorrect: true },
      { text: "div 요소의 높이가 2초 동안 서서히 변경된다.", isCorrect: false },
      {
        text: "div 요소의 배경색이 2초 동안 서서히 변경된다.",
        isCorrect: false,
      },
      {
        text: "div 요소의 투명도가 2초 동안 서서히 변경된다.",
        isCorrect: false,
      },
    ],
    answer: "div 요소의 너비가 2초 동안 서서히 변경된다.",
    explanation:
      "'transition' 속성은 요소의 특정 스타일을 변경할 때 애니메이션 속도를 조절합니다. 이 경우, 너비(width)가 2초 동안 서서히 변경됩니다.",
    subject: "css",
    subSubject: "new",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'animation' 속성에 대한 설명 중, 아래 코드에서 어떤 효과를 적용하고 있는지 올바르게 설명한 것은 무엇인가요?",
    code: "div { animation: myAnimation 5s infinite; }",
    answerOptions: [
      {
        text: "div 요소에 'myAnimation' 애니메이션을 무한히 반복하여 5초 동안 실행한다.",
        isCorrect: true,
      },
      { text: "div 요소를 5초 동안 무한히 확대한다.", isCorrect: false },
      {
        text: "div 요소의 'myAnimation' 클래스를 5초 동안 무한히 추가한다.",
        isCorrect: false,
      },
      {
        text: "div 요소에 'myAnimation' 효과를 5초 동안 한 번만 적용한다.",
        isCorrect: false,
      },
    ],
    answer:
      "div 요소에 'myAnimation' 애니메이션을 무한히 반복하여 5초 동안 실행한다.",
    explanation:
      "'animation' 속성은 요소에 애니메이션을 적용합니다. 이 경우, 'myAnimation'이라는 애니메이션을 무한히 반복하여 5초 동안 실행합니다.",
    subject: "css",
    subSubject: "new",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'box-shadow' 속성에 대한 설명 중, 아래 코드에서 어떤 효과를 적용하고 있는지 올바르게 설명한 것은 무엇인가요?",
    code: "div { box-shadow: 10px 5px 5px black; }",
    answerOptions: [
      {
        text: "div 요소에 가로 오프셋 10픽셀, 세로 오프셋 5픽셀, 흐림 반경 5픽셀의 검은색 그림자를 추가한다.",
        isCorrect: true,
      },
      {
        text: "div 요소에 가로 오프셋 10픽셀, 세로 오프셋 5픽셀의 검은색 테두리를 추가한다.",
        isCorrect: false,
      },
      {
        text: "div 요소의 배경색을 검은색으로 변경하고, 가로 10픽셀, 세로 5픽셀의 그림자 효과를 준다.",
        isCorrect: false,
      },
      {
        text: "div 요소의 텍스트에 가로 오프셋 10픽셀, 세로 오프셋 5픽셀, 흐림 반경 5픽셀의 검은색 그림자를 추가한다.",
        isCorrect: false,
      },
    ],
    answer:
      "div 요소에 가로 오프셋 10픽셀, 세로 오프셋 5픽셀, 흐림 반경 5픽셀의 검은색 그림자를 추가한다.",
    explanation:
      "'box-shadow' 속성은 요소에 그림자를 추가합니다. 이 경우, 가로 오프셋 10픽셀, 세로 오프셋 5픽셀, 흐림 반경 5픽셀의 검은색 그림자가 추가됩니다.",
    subject: "css",
    subSubject: "new",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'gradient' 속성에 대한 설명 중, 아래 코드에서 어떤 효과를 적용하고 있는지 올바르게 설명한 것은 무엇인가요?",
    code: "div { background: linear-gradient(to right, red, yellow); }",
    answerOptions: [
      {
        text: "div 요소의 배경을 왼쪽에서 오른쪽으로 빨간색에서 노란색으로 변하는 선형 그라디언트로 설정한다.",
        isCorrect: true,
      },
      {
        text: "div 요소의 배경을 위에서 아래로 빨간색에서 노란색으로 변하는 선형 그라디언트로 설정한다.",
        isCorrect: false,
      },
      {
        text: "div 요소의 배경을 빨간색에서 노란색으로 변하는 원형 그라디언트로 설정한다.",
        isCorrect: false,
      },
      {
        text: "div 요소의 배경을 오른쪽에서 왼쪽으로 빨간색에서 노란색으로 변하는 선형 그라디언트로 설정한다.",
        isCorrect: false,
      },
    ],
    answer:
      "div 요소의 배경을 왼쪽에서 오른쪽으로 빨간색에서 노란색으로 변하는 선형 그라디언트로 설정한다.",
    explanation:
      "'linear-gradient' 함수는 선형 그라디언트 배경 이미지를 생성합니다. 이 경우, 왼쪽에서 오른쪽으로 빨간색에서 노란색으로 변하는 그라디언트가 생성됩니다.",
    subject: "css",
    subSubject: "new",
    quizType: "coding",
  },
];
