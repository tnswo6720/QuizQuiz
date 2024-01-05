// questions1.js
export const cssNotionFLEX = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'flex: 0 0 50%;' 속성에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    .example {
      display: flex;
    }

    .example div {
      flex: 0 0 50%;
    }
    `,
    answerOptions: [
      {
        text: "flex-grow는 0, flex-shrink는 0, flex-basis는 50%를 의미합니다.",
        isCorrect: true,
      },
      {
        text: "flex-grow는 0, flex-shrink는 50%, flex-basis는 0을 의미합니다.",
        isCorrect: false,
      },
      {
        text: "flex-grow는 50%, flex-shrink는 0, flex-basis는 0을 의미합니다.",
        isCorrect: false,
      },
      {
        text: "flex-grow는 50%, flex-shrink는 50%, flex-basis는 0을 의미합니다.",
        isCorrect: false,
      },
    ],
    answer: "flex-grow는 0, flex-shrink는 0, flex-basis는 50%를 의미합니다.",
    explanation:
      "CSS의 'flex' 속성은 'flex-grow', 'flex-shrink', 'flex-basis'의 단축 속성입니다. 'flex: 0 0 50%;'에서 첫 번째 0은 'flex-grow'를, 두 번째 0은 'flex-shrink'를, '50%'는 'flex-basis'를 의미합니다. 따라서 이 속성은 컨테이너 내에서 항목이 성장하거나 줄어들지 않고, 기본 크기를 50%로 설정하라는 것을 의미합니다.",
    subject: "css",
    subSubject: "flexbox",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'flex-grow', 'flex-shrink', 'flex-basis' 속성에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    .example {
      display: flex;
    }

    .example div {
      flex-grow: 1;
      flex-shrink: 2;
      flex-basis: 50%;
    }
    `,
    answerOptions: [
      {
        text: "'flex-grow'는 아이템이 여유 공간 내에서 얼마나 늘어날 수 있는지를 결정하고, 'flex-shrink'는 아이템이 공간 부족 시 얼마나 줄어들 수 있는지를 결정하며, 'flex-basis'는 아이템의 기본 크기를 결정합니다.",
        isCorrect: true,
      },
      {
        text: "'flex-grow'는 아이템의 기본 크기를 결정하고, 'flex-shrink'는 아이템이 여유 공간 내에서 얼마나 늘어날 수 있는지를 결정하며, 'flex-basis'는 아이템이 공간 부족 시 얼마나 줄어들 수 있는지를 결정합니다.",
        isCorrect: false,
      },
      {
        text: "'flex-grow'는 아이템이 공간 부족 시 얼마나 줄어들 수 있는지를 결정하고, 'flex-shrink'는 아이템의 기본 크기를 결정하며, 'flex-basis'는 아이템이 여유 공간 내에서 얼마나 늘어날 수 있는지를 결정합니다.",
        isCorrect: false,
      },
      {
        text: "'flex-grow', 'flex-shrink', 'flex-basis' 모두 아이템의 기본 크기를 결정합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'flex-grow'는 아이템이 여유 공간 내에서 얼마나 늘어날 수 있는지를 결정하고, 'flex-shrink'는 아이템이 공간 부족 시 얼마나 줄어들 수 있는지를 결정하며, 'flex-basis'는 아이템의 기본 크기를 결정합니다.",
    explanation:
      "'flex-grow'는 아이템이 여유 공간 내에서 얼마나 늘어날 있는지를 결정합니다. 'flex-shrink'는 아이템이 공간 부족 시 얼마나 줄어들 수 있는지를 결정합니다. 'flex-basis'는 아이템이 가질 수 있는 기본 크기를 결정합니다. 이 세 가지 속성이 결합되어 'flex' 속성을 이룹니다.",
    subject: "css",
    subSubject: "flexbox",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'justify-content' 속성에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
    .example {
      display: flex;
      justify-content: space-between;
    }
    `,
    answerOptions: [
      {
        text: "'justify-content' 속성은 아이템들이 주 축(main axis)을 따라 어떻게 배치될지를 결정합니다.",
        isCorrect: true,
      },
      {
        text: "'justify-content' 속성은 아이템들이 교차 축(cross axis)을 따라 어떻게 배치될지를 결정합니다.",
        isCorrect: false,
      },
      {
        text: "'justify-content' 속성은 아이템의 크기를 결정합니다.",
        isCorrect: false,
      },
      {
        text: "'justify-content' 속성은 아이템의 위치를 결정합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'justify-content' 속성은 아이템들이 주 축(main axis)을 따라 어떻게 배치될지를 결정합니다.",
    explanation:
      "'justify-content' 속성은 flex 아이템들이 주 축(main axis)을 따라 어떻게 배치될지를 결정합니다. 이 속성을 통해 아이템들 사이의 간격을 조절하거나, 아이템들을 양끝으로 분산시키는 등의 배치를 할 수 있습니다.",
    subject: "css",
    subSubject: "flexbox",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'align-items' 속성에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
  .example {
    display: flex;
    align-items: center;
  }
  `,
    answerOptions: [
      {
        text: "'align-items' 속성은 아이템들이 교차 축(cross axis)을 따라 어떻게 배치될지를 결정합니다.",
        isCorrect: true,
      },
      {
        text: "'align-items' 속성은 아이템들이 주 축(main axis)을 따라 어떻게 배치될지를 결정합니다.",
        isCorrect: false,
      },
      {
        text: "'align-items' 속성은 아이템의 크기를 결정합니다.",
        isCorrect: false,
      },
      {
        text: "'align-items' 속성은 아이템의 위치를 결정합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'align-items' 속성은 아이템들이 교차 축(cross axis)을 따라 어떻게 배치될지를 결정합니다.",
    explanation:
      "'align-items' 속성은 flex 아이템들이 교차 축(cross axis)을 따라 어떻게 배치될지를 결정합니다. 이 속성을 통해 아이템들의 수직 정렬을 조절할 수 있습니다.",
    subject: "css",
    subSubject: "flexbox",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "CSS의 'flex-direction' 속성에 대한 설명 중, 올바른 것은 무엇인가요?",
    code: `
  .example {
    display: flex;
    flex-direction: column;
  }
  `,
    answerOptions: [
      {
        text: "'flex-direction' 속성은 아이템들이 어떤 방향으로 배치될지를 결정합니다.",
        isCorrect: true,
      },
      {
        text: "'flex-direction' 속성은 아이템들의 크기를 결정합니다.",
        isCorrect: false,
      },
      {
        text: "'flex-direction' 속성은 아이템들의 위치를 결정합니다.",
        isCorrect: false,
      },
      {
        text: "'flex-direction' 속성은 아이템들의 색상을 결정합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'flex-direction' 속성은 아이템들이 어떤 방향으로 배치될지를 결정합니다.",
    explanation:
      "'flex-direction' 속성은 flex 아이템들이 어떤 방향으로 배치될지를 결정합니다. 이 속성을 통해 아이템들을 수직 또는 수평 방향으로 배치할 수 있습니다.",
    subject: "css",
    subSubject: "flexbox",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 CSS 코드를 보고, 'background' 속성에 대해 올바르게 설명한 것은 무엇인가요?",
    code: `
    .box {
      background: url('image.jpg') repeat-x 50% 50% / 200px 100px;
    }
    `,
    answerOptions: [
      {
        text: "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 가로 방향으로만 반복되고, 너비가 200px, 높이가 100px로 설정된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 세로 방향으로만 반복되고, 너비가 200px, 높이가 100px로 설정된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 가로 방향으로만 반복되고, 너비가 100px, 높이가 200px로 설정된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 가로 방향으로만 반복되며, 너비가 200px, 높이가 100px로 설정된다.",
        isCorrect: true,
      },
    ],
    answer:
      "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 가로 방향으로만 반복되며, 너비가 200px, 높이가 100px로 설정된다.",
    explanation:
      "'background' 속성은 배경 속성을 한 번에 설정할 수 있습니다. 'url('image.jpg') repeat-x 50% 50% / 200px 100px' 값은 배경 이미지를 중앙에 위치시키고, 가로 방향으로만 반복하며, 너비를 200px, 높이를 100px로 설정하도록 합니다.",
    subject: "css",
    subSubject: "Background",
    quizType: "coding",
  },
];
