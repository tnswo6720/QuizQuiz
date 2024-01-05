// questions1.js
export const cssNotionBackgroundColor = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "아래의 CSS 코드를 보고, 배경 관련 속성에 대해 올바르게 설명한 것은 무엇인가요?",
    code: `
    .box {
      background-color: #ff0000;
      background-image: url('image.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    `,
    answerOptions: [
      {
        text: "'.box' 클래스의 배경 색상은 빨간색이며, 배경 이미지는 'image.jpg'이다. 배경 이미지는 반복되지 않으며, 중앙에 위치하고, 배경의 크기는 컨테이너를 가득 채운다.",
        isCorrect: true,
      },
      {
        text: "'.box' 클래스의 배경 색상은 빨간색이며, 배경 이미지는 'image.jpg'이다. 배경 이미지는 반복되며, 중앙에 위치하고, 배경의 크기는 컨테이너를 가득 채운다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 색상은 빨간색이며, 배경 이미지는 'image.jpg'이다. 배경 이미지는 반복되지 않으며, 왼쪽 상단에 위치하고, 배경의 크기는 컨테이너를 가득 채운다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 색상은 빨간색이며, 배경 이미지는 없다. 배경 이미지는 반복되지 않으며, 중앙에 위치하고, 배경의 크기는 컨테이너를 가득 채운다.",
        isCorrect: false,
      },
    ],
    answer:
      "'.box' 클래스의 배경 색상은 빨간색이며, 배경 이미지는 'image.jpg'이다. 배경 이미지는 반복되지 않으며, 중앙에 위치하고, 배경의 크기는 컨테이너를 가득 채운다.",
    explanation:
      "CSS의 배경 관련 속성에는 배경 색상, 배경 이미지, 배경 반복, 배경 위치, 배경 크기 등이 있습니다. 이 예제에서는 배경 색상을 HEX 코드로 표현하였으며, 배경 이미지를 설정하였습니다. 또한 배경 이미지는 반복되지 않으며, 중앙에 위치하고, 배경의 크기는 컨테이너를 가득 채우도록 설정하였습니다.",
    subject: "css",
    subSubject: "Background",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 CSS 코드를 보고, 'background-repeat' 속성의 값에 대해 올바르게 설명한 것은 무엇인가요?",
    code: `
    .box {
      background-image: url('image.jpg');
      background-repeat: repeat-x;
    }
    `,
    answerOptions: [
      {
        text: "'.box' 클래스의 배경 이미지는 가로 방향으로 반복된다.",
        isCorrect: true,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 세로 방향으로 반복된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 가로와 세로 방향으로 반복된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 반복되지 않는다.",
        isCorrect: false,
      },
    ],
    answer: "'.box' 클래스의 배경 이미지는 가로 방향으로 반복된다.",
    explanation:
      "'background-repeat' 속성은 배경 이미지의 반복 방식을 설정합니다. 'repeat-x' 값은 배경 이미지를 가로 방향으로 반복합니다.",
    subject: "css",
    subSubject: "Background",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 CSS 코드를 보고, 'background-position' 속성의 값에 대해 올바르게 설명한 것은 무엇인가요?",
    code: `
    .box {
      background-image: url('image.jpg');
      background-position: right bottom;
    }
    `,
    answerOptions: [
      {
        text: "'.box' 클래스의 배경 이미지는 오른쪽 하단에 위치한다.",
        isCorrect: true,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 오른쪽 상단에 위치한다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 왼쪽 하단에 위치한다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 왼쪽 상단에 위치한다.",
        isCorrect: false,
      },
    ],
    answer: "'.box' 클래스의 배경 이미지는 오른쪽 하단에 위치한다.",
    explanation:
      "'background-position' 속성은 배경 이미지의 위치를 설정합니다. 'right bottom' 값은 배경 이미지를 오른쪽 하단에 위치하게 합니다.",
    subject: "css",
    subSubject: "Background",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 CSS 코드를 보고, 'background-size' 속성의 값에 대해 올바르게 설명한 것은 무엇인가요?",
    code: `
    .box {
      background-image: url('image.jpg');
      background-size: cover;
    }
    `,
    answerOptions: [
      {
        text: "'.box' 클래스의 배경 이미지는 컨테이너를 완전히 가득 채우며, 필요하다면 이미지가 잘릴 수 있다.",
        isCorrect: true,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 컨테이너에 맞게 크기가 조정되며, 이미지의 비율이 유지된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 원래의 크기를 유지한다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 컨테이너의 너비에 맞게 크기가 조정된다.",
        isCorrect: false,
      },
    ],
    answer:
      "'.box' 클래스의 배경 이미지는 컨테이너를 완전히 가득 채우며, 필요하다면 이미지가 잘릴 수 있다.",
    explanation:
      "'background-size' 속성은 배경 이미지의 크기를 설정합니다. 'cover' 값은 배경 이미지가 컨테이너를 완전히 가득 채우도록 합니다. 이 경우 이미지의 일부가 잘릴 수 있습니다.",
    subject: "css",
    subSubject: "Background",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 CSS 코드를 보고, 'background-size' 속성의 값에 대해 올바르게 설명한 것은 무엇인가요?",
    code: `
    .box {
      background-image: url('image.jpg');
      background-size: 50% auto;
    }
    `,
    answerOptions: [
      {
        text: "'.box' 클래스의 배경 이미지는 컨테이너의 너비의 50% 크기로 설정되며, 높이는 원래 이미지의 비율을 유지한다.",
        isCorrect: true,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 컨테이너를 완전히 가득 채우며, 필요하다면 이미지가 잘릴 수 있다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 원래의 크기를 유지한다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 컨테이너의 높이의 50% 크기로 설정되며, 너비는 원래 이미지의 비율을 유지한다.",
        isCorrect: false,
      },
    ],
    answer:
      "'.box' 클래스의 배경 이미지는 컨테이너의 너비의 50% 크기로 설정되며, 높이는 원래 이미지의 비율을 유지한다.",
    explanation:
      "'background-size' 속성은 배경 이미지의 크기를 설정합니다. '50% auto' 값은 배경 이미지의 너비를 컨테이너의 너비의 50%로 설정하며, 높이는 원래 이미지의 비율을 유지합니다.",
    subject: "css",
    subSubject: "Background",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 CSS 코드를 보고, 'background-position' 속성의 값에 대해 올바르게 설명한 것은 무엇인가요?",
    code: `
    .box {
      background-image: url('image.jpg');
      background-position: 10px 20px;
    }
    `,
    answerOptions: [
      {
        text: "'.box' 클래스의 배경 이미지는 왼쪽에서 10px, 위쪽에서 20px 떨어진 위치에 배치된다.",
        isCorrect: true,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 오른쪽에서 10px, 위쪽에서 20px 떨어진 위치에 배치된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 왼쪽에서 10px, 아래쪽에서 20px 떨어진 위치에 배치된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 오른쪽에서 10px, 아래쪽에서 20px 떨어진 위치에 배치된다.",
        isCorrect: false,
      },
    ],
    answer:
      "'.box' 클래스의 배경 이미지는 왼쪽에서 10px, 위쪽에서 20px 떨어진 위치에 배치된다.",
    explanation:
      "'background-position' 속성은 배경 이미지의 위치를 설정합니다. '10px 20px' 값은 배경 이미지를 왼쪽에서 10px, 위쪽에서 20px 떨어진 위치에 배치하게 합니다.",
    subject: "css",
    subSubject: "Background",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 CSS 코드를 보고, 'background' 속성에 대해 올바르게 설명한 것은 무엇인가요?",
    code: `
    .box {
      background: url('image.jpg') no-repeat center center / cover;
    }
    `,
    answerOptions: [
      {
        text: "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 반복되지 않고, 컨테이너를 완전히 가득 채우도록 크기가 조정된다.",
        isCorrect: true,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 반복되고, 컨테이너를 완전히 가득 채우도록 크기가 조정된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 오른쪽 하단에 위치하며, 반복되지 않고, 컨테이너를 완전히 가득 채우도록 크기가 조정된다.",
        isCorrect: false,
      },
      {
        text: "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 반복되지 않고, 원래의 크기를 유지한다.",
        isCorrect: false,
      },
    ],
    answer:
      "'.box' 클래스의 배경 이미지는 중앙에 위치하며, 반복되지 않고, 컨테이너를 완전히 가득 채우도록 크기가 조정된다.",
    explanation:
      "'background' 속성은 배경 속성을 한 번에 설정할 수 있습니다. 'url('image.jpg') no-repeat center center / cover' 값은 배경 이미지를 중앙에 위치시키고, 반복하지 않으며, 컨테이너를 완전히 가득 채우도록 크기를 조정하도록 설정합니다.",
    subject: "css",
    subSubject: "Background",
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
