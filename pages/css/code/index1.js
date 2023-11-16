const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "CSS에서 요소의 배경 이미지를 설정하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 속성은 무엇일까요?",
      code: `
          .element {
            ______: url('background.jpg');
          }
          `,
      answerOptions: [
        "background-image",
        "background-color",
        "background",
        "image",
      ],
      answer: "background-image",
      explanation:
        "CSS에서 요소의 배경 이미지를 설정하는 속성은 'background-image'입니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 특정 요소와 그 자손 요소에 스타일을 적용하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 선택자는 무엇일까요?",
      code: `
          .element ______ {
            color: red;
          }
          `,
      answerOptions: [">", "+", "~", " "],
      answer: " ",
      explanation:
        "CSS에서 특정 요소와 그 자손 요소에 스타일을 적용하려면 공백( )을 사용하는 선택자를 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 요소의 배경색을 투명하게 만들려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 값은 무엇일까요?",
      code: `
          .element {
            background-color: ______;
          }
          `,
      answerOptions: ["transparent", "none", "clear", "0"],
      answer: "transparent",
      explanation:
        "CSS에서 요소의 배경색을 투명하게 만들려면 'transparent' 값을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 텍스트의 색상을 변경하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 속성은 무엇일까요?",
      code: `
          .element {
            ______: red;
          }
          `,
      answerOptions: ["color", "text-color", "font-color", "background-color"],
      answer: "color",
      explanation:
        "CSS에서 텍스트의 색상을 변경하려면 'color' 속성을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 요소의 너비를 설정하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 속성은 무엇일까요?",
      code: `
          .element {
            ______: 100px;
          }
          `,
      answerOptions: ["width", "size", "length", "height"],
      answer: "width",
      explanation:
        "CSS에서 요소의 너비를 설정하려면 'width' 속성을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 요소의 내부 여백을 설정하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 속성은 무엇일까요?",
      code: `
          .element {
            ______: 20px;
          }
          `,
      answerOptions: ["padding", "margin", "border", "space"],
      answer: "padding",
      explanation:
        "CSS에서 요소의 내부 여백을 설정하려면 'padding' 속성을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 특정 색상을 배경색으로 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        body {
          ______: #f0f0f0;
        }
      `,
      answerOptions: [
        "color",
        "background-color",
        "border-color",
        "text-color",
      ],
      answer: "background-color",
      explanation:
        "CSS에서 배경색을 설정하려면 'background-color' 속성을 사용합니다.",
    },

    {
      questionText:
        "CSS에서 텍스트의 정렬 방식을 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        p {
          ______: center;
        }
      `,
      answerOptions: [
        "text-align",
        "align-items",
        "justify-content",
        "align-text",
      ],
      answer: "text-align",
      explanation:
        "CSS에서 텍스트의 정렬 방식을 설정하려면 'text-align' 속성을 사용합니다.",
    },

    {
      questionText:
        "CSS에서 요소의 너비를 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 100px;
        }
      `,
      answerOptions: ["width", "height", "size", "length"],
      answer: "width",
      explanation:
        "CSS에서 요소의 너비를 설정하려면 'width' 속성을 사용합니다.",
    },
    {
      questionText:
        "CSS에서 요소의 상하좌우 여백을 한 번에 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 10px 15px 20px 25px;
        }
      `,
      answerOptions: ["padding", "margin", "border", "position"],
      answer: "margin",
      explanation:
        "CSS에서 요소의 상하좌우 여백을 한 번에 설정하려면 'margin' 속성을 사용합니다. 값은 상, 우, 하, 좌 순서대로 적용됩니다.",
    },

    {
      questionText:
        "CSS에서 특정 요소만 선택하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 선택자는 무엇일까요?",
      code: `
        ______:first-child {
          color: red;
        }
      `,
      answerOptions: ["p", "h1", "div", "body"],
      answer: "p",
      explanation:
        "CSS에서 특정 요소만 선택하려면 요소 선택자를 사용합니다. 이 경우 'p' 태그의 첫 번째 자식 요소만 선택하려면 'p:first-child'를 사용합니다.",
    },

    {
      questionText:
        "CSS에서 요소의 위치를 절대 위치로 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성 값은 무엇일까요?",
      code: `
        .box {
          position: ______;
        }
      `,
      answerOptions: ["static", "relative", "absolute", "fixed"],
      answer: "absolute",
      explanation:
        "CSS에서 요소의 위치를 절대 위치로 설정하려면 'position' 속성 값을 'absolute'로 설정합니다.",
    },
    {
      questionText:
        "CSS에서 flexbox의 방향을 역방향으로 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성 값은 무엇일까요?",
      code: `
        .container {
          display: flex;
          flex-direction: ______;
        }
      `,
      answerOptions: ["row", "column", "row-reverse", "column-reverse"],
      answer: "row-reverse",
      explanation:
        "CSS에서 flexbox의 방향을 역방향으로 설정하려면 'flex-direction' 속성 값을 'row-reverse' 또는 'column-reverse'로 설정합니다.",
    },

    {
      questionText:
        "CSS에서 요소의 테두리를 둥글게 만들려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 50%;
        }
      `,
      answerOptions: [
        "border",
        "border-radius",
        "border-style",
        "border-width",
      ],
      answer: "border-radius",
      explanation:
        "CSS에서 요소의 테두리를 둥글게 만들려면 'border-radius' 속성을 사용합니다.",
    },

    {
      questionText:
        "CSS에서 요소의 z축 방향의 위치를 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 1;
        }
      `,
      answerOptions: ["z-index", "position", "display", "visibility"],
      answer: "z-index",
      explanation:
        "CSS에서 요소의 z축 방향의 위치를 설정하려면 'z-index' 속성을 사용합니다.",
    },
    {
      questionText:
        "CSS에서 요소의 내부 여백을 한 번에 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 10px 15px 20px 25px;
        }
      `,
      answerOptions: ["padding", "margin", "border", "position"],
      answer: "padding",
      explanation:
        "CSS에서 요소의 내부 여백을 한 번에 설정하려면 'padding' 속성을 사용합니다. 값은 상, 우, 하, 좌 순서대로 적용됩니다.",
    },

    {
      questionText:
        "CSS에서 요소의 투명도를 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 0.5;
        }
      `,
      answerOptions: ["opacity", "visibility", "color", "background"],
      answer: "opacity",
      explanation:
        "CSS에서 요소의 투명도를 설정하려면 'opacity' 속성을 사용합니다. 값은 0(완전 투명)에서 1(완전 불투명) 사이입니다.",
    },

    {
      questionText:
        "CSS에서 특정 요소만 선택하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 선택자는 무엇일까요?",
      code: `
        ______:last-child {
          color: red;
        }
      `,
      answerOptions: ["p", "h1", "div", "body"],
      answer: "div",
      explanation:
        "CSS에서 특정 요소만 선택하려면 요소 선택자를 사용합니다. 이 경우 'div' 태그의 마지막 자식 요소만 선택하려면 'div:last-child'를 사용합니다.",
    },
  ];