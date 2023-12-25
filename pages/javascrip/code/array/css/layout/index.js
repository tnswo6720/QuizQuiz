// questions1.js
export const cssCodelayout = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 위치를 기본 위치로 설정하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .box {
        ______: ______;
      }
    `,
    answerOptions: [
      ["position", "static"],
      ["position", "relative"],
      ["position", "absolute"],
      ["position", "fixed"],
    ],
    answer: ["position, static"],
    explanation:
      "CSS에서 요소의 위치를 기본 위치로 설정하려면 'position' 속성을 사용하고, 그 값으로 'static'을 지정합니다. 'position: static;'은 요소를 정상적인 문서 흐름에 따라 배치하며, top, bottom, left, right 등 위치 지정 속성을 무시합니다.",
    subject: "css",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 위치를 상대 위치로 설정하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .box {
        ______: ______;
      }
    `,
    answerOptions: [
      ["position", "relative"],
      ["position", "static"],
      ["position", "absolute"],
      ["position", "fixed"],
    ],
    answer: ["position, relative"],
    explanation:
      "CSS에서 요소의 위치를 상대 위치로 설정하려면 'position' 속성을 사용하고, 그 값으로 'relative'를 지정합니다. 'position: relative;'는 요소를 정상적인 문서 흐름에 따라 배치하고, 그 위치를 기준으로 top, right, bottom, left 속성을 사용해 위치를 조정합니다.",
    subject: "css",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 위치를 절대 위치로 설정하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .box {
        ______: ______;
      }
    `,
    answerOptions: [
      ["position", "absolute"],
      ["position", "static"],
      ["position", "relative"],
      ["position", "fixed"],
    ],
    answer: ["position, absolute"],
    explanation:
      "CSS에서 요소의 위치를 절대 위치로 설정하려면 'position' 속성을 사용하고, 그 값으로 'absolute'를 지정합니다. 'position: absolute;'는 가장 가까운 상위 요소 중 position 속성이 static이 아닌 요소를 기준으로 위치를 정합니다. 만약 상위 요소 중에서 position 속성이 static이 아닌 요소가 없다면, 문서의 body를 기준으로 위치가 정해집니다.",
    subject: "css",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 위치를 고정 위치로 설정하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .box {
        ______: ______;
      }
    `,
    answerOptions: [
      ["position", "fixed"],
      ["position", "static"],
      ["position", "relative"],
      ["position", "absolute"],
    ],
    answer: ["position, fixed"],
    explanation:
      "CSS에서 요소의 위치를 고정 위치로 설정하려면 'position' 속성을 사용하고, 그 값으로 'fixed'를 지정합니다. 'position: fixed;'는 요소를 뷰포트를 기준으로 위치를 고정시키며, 스크롤이 되어도 그 위치가 변하지 않습니다.",
    subject: "css",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 위치를 스티키로 설정하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .box {
        ______: ______;
      }
    `,
    answerOptions: [
      ["position", "sticky"],
      ["position", "static"],
      ["position", "relative"],
      ["position", "absolute"],
    ],
    answer: ["position, sticky"],
    explanation:
      "CSS에서 요소의 위치를 스티키로 설정하려면 'position' 속성을 사용하고, 그 값으로 'sticky'를 지정합니다. 'position: sticky;'는 스크롤 위치에 따라 상대적인 위치와 고정 위치를 번갈아 사용하는 특성을 가집니다. 특정 영역을 벗어나기 전까지는 일반적인 문서 흐름에 따라 배치되고, 벗어나면 화면에서 고정된 위치에 머무릅니다.",
    subject: "css",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 플렉스 레이아웃을 적용하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .container {
        ______: ______;
      }
    `,
    answerOptions: [
      ["display", "flex"],
      ["display", "block"],
      ["display", "inline"],
      ["display", "inline-block"],
    ],
    answer: ["display, flex"],
    explanation:
      "CSS에서 플렉스 레이아웃을 적용하려면 'display' 속성을 사용하고, 그 값으로 'flex'를 지정합니다. 'display: flex;'는 컨테이너 내의 아이템들이 유연하게 배치될 수 있도록 해줍니다. 플렉스 아이템들은 컨테이너의 여유 공간에 따라 그 크기가 늘어나거나 줄어들 수 있습니다.",

    subject: "css",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS 그리드 레이아웃에서 컨테이너에 3개의 열을 생성하고, 각각의 너비를 '100px', 'auto', '2fr'로 설정하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .container {
        ______: ______ ______ ______;
      }
    `,
    answerOptions: [
      ["grid-template-columns", "100px", "auto", "2fr"],
      ["grid-template-rows", "100px", "auto", "2fr"],
      ["grid-auto-columns", "100px", "auto", "2fr"],
      ["grid-auto-rows", "100px", "auto", "2fr"],
    ],
    answer: ["grid-template-columns, 100px, auto, 2fr"],
    explanation:
      "CSS 그리드 레이아웃에서 컨테이너에 열을 생성하려면 'grid-template-columns' 속성을 사용합니다. 그리고 각 열의 너비를 설정하려면 해당 속성에 값을 지정합니다. '100px'는 열의 너비를 100px로 고정, 'auto'는 컨텐츠의 크기에 맞게, '2fr'는 남은 공간을 fr 단위에 따라 분할하여 설정하게 됩니다. 여기서 'grid-template-columns: 100px auto 2fr;'는 컨테이너를 100픽셀 너비의 열, 내용에 맞는 너비의 열, 그리고 남은 공간을 2개의 동일한 부분으로 나눈 열, 총 3개의 열로 분할하라는 의미입니다.",
    explanationImage: "/grid1.png",
    subject: "css",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS Flexbox에서 아이템들을 가로 축에서 오른쪽부터 왼쪽으로 정렬하려면 어떤 속성을 사용해야 하는지, 아래의 빈칸을 채워주세요.",
    code: `
      .container {
        display: flex;
        _____: _____;
      }
    `,
    answerOptions: [
      ["flex-direction", "row-reverse"],
      ["justify-content", "flex-end"],
      ["align-items", "flex-end"],
      ["flex-direction", "column-reverse"],
    ],
    answer: ["flex-direction, row-reverse"],
    explanation:
      "CSS Flexbox에서 아이템들을 가로 축에서 오른쪽부터 왼쪽으로 정렬하려면 'flex-direction' 속성을 'row-reverse'로 설정합니다. 이렇게 하면 아이템들이 컨테이너의 오른쪽부터 왼쪽으로 배열됩니다.",
    subject: "css",
    subSubject: "layout",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "반응형 웹 디자인에서 화면 크기가 600px 이하일 때 특정 스타일을 적용하려면, 아래의 빈칸을 채워주세요.",
    code: `
      @media _____ _____ (_____ : _____) {
        body {
          background-color: lightblue;
        }
      }
    `,
    answerOptions: [
      ["only screen", "and", "max-width", "600px"],
      ["only print", "and", "max-width", "600px"],
      ["only screen", "and", "min-width", "600px"],
      ["only screen", "and", "width", "600px"],
    ],
    answer: ["only screen, and, max-width, 600px"],
    explanation:
      "반응형 웹 디자인에서 화면 크기가 600px 이하일 때 특정 스타일을 적용하려면 '@media only screen and (max-width: 600px)'를 사용합니다. 이는 화면 크기가 600px 이하일 때 body의 배경색을 lightblue로 변경하라는 의미입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
];
