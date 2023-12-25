// questions1.js
export const cssNotionResponsive = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "반응형 웹 디자인에서 미디어 쿼리를 사용하는 주된 목적은 무엇인가요?",
    code: `
      @media (min-width: 768px) {
        .container {
          width: 750px;
        }
      }
      @media (min-width: 992px) {
        .container {
          width: 970px;
        }
      }
      @media (min-width: 1200px) {
        .container {
          width: 1170px;
        }
      }
    `,
    answerOptions: [
      {
        text: "미디어 쿼리는 웹 페이지에 애니메이션 효과를 추가하기 위해 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "미디어 쿼리는 웹 페이지의 콘텐츠를 다양한 디바이스와 화면 크기에 맞게 유동적으로 조정하기 위해 사용됩니다.",
        isCorrect: true,
      },
      {
        text: "미디어 쿼리는 웹 페이지가 인쇄될 때의 레이아웃과 스타일을 정의하기 위해 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "미디어 쿼리는 서버와의 통신을 제어하여 다양한 미디어 유형에 적합한 데이터를 로드하기 위해 사용됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "미디어 쿼리는 웹 페이지의 콘텐츠를 다양한 디바이스와 화면 크기에 맞게 유동적으로 조정하기 위해 사용됩니다.",
    explanation:
      "미디어 쿼리(Media Queries)는 CSS3에 도입된 기술로, 디바이스의 유형(예: 스크린, 프린트 등)이나 특정 조건(예: 화면의 너비와 높이)에 따라 다른 스타일 규칙을 적용할 수 있게 합니다. 주로 반응형 웹 디자인을 구현하기 위해 사용되며, 이를 통해 개발자는 하나의 HTML 문서에 대해 여러 디바이스와 화면 크기에서 적절한 레이아웃과 스타일을 정의할 수 있습니다. 예를 들어, 위의 코드 예시는 디바이스 화면의 너비에 따라 `.container` 클래스의 너비를 다르게 설정하고 있습니다. 이는 더 큰 화면에서는 더 넓은 컨테이너를 제공하여 콘텐츠를 보다 적절하게 표시할 수 있도록 하기 위함입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "반응형 웹 디자인에서 이미지를 반응형으로 만드는 방법과 그 목적에 대해 설명하십시오. 아래의 설명 중 가장 정확한 것을 고르세요.",
    code: `
      img {
        max-width: 100%;
        height: auto;
      }
    `,
    answerOptions: [
      {
        text: "반응형 이미지는 이미지를 브라우저 창의 크기에 맞게 확대하기 위해 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "반응형 이미지는 페이지 로딩 시간을 늘리기 위해 이미지의 크기를 최대로 설정합니다.",
        isCorrect: false,
      },
      {
        text: "반응형 이미지는 다양한 디스플레이 환경에서 이미지가 구겨지지 않고, 그 크기가 적절하게 조정되도록 합니다.",
        isCorrect: true,
      },
      {
        text: "반응형 이미지는 웹사이트의 접근성을 감소시키기 위해 이미지의 해상도를 감소시킵니다.",
        isCorrect: false,
      },
    ],
    answer:
      "반응형 이미지는 다양한 디스플레이 환경에서 이미지가 구겨지지 않고, 그 크기가 적절하게 조정되도록 합니다.",
    explanation:
      "반응형 이미지는 웹 페이지가 다양한 화면 크기와 해상도를 가진 기기에서 볼 때, 이미지가 자연스럽게 크기가 조정되도록 하는 기술입니다. CSS에서 `max-width: 100%;`와 `height: auto;` 속성을 이미지에 적용함으로써, 이미지는 부모 요소의 너비에 맞춰 유동적으로 크기가 변하고, 비율은 원본대로 유지됩니다. 이는 모바일 기기와 데스크탑 환경 양쪽에서 이미지가 올바르게 표시되도록 하며, 사용자 경험을 향상시키고, 레이아웃의 일관성을 유지하는 데 기여합니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "반응형 웹 디자인에서 테이블을 반응형으로 만드는 기술적 접근 방식에 대해 설명하십시오. 아래의 설명 중 가장 정확한 것을 고르세요.",
    code: `
      @media screen and (max-width: 600px) {
        table {
          width: 100%;
          display: block;
        }
        thead, tbody, th, td, tr {
          display: block;
        }
        thead tr {
          position: absolute;
          top: -9999px;
          left: -9999px;
        }
        tr { border: 1px solid #ccc; }
        td {
          border: none;
          border-bottom: 1px solid #eee;
          position: relative;
          padding-left: 50%;
        }
        td:before {
          position: absolute;
          top: 6px;
          left: 6px;
          width: 45%;
          padding-right: 10px;
          white-space: nowrap;
          content: attr(data-title);
        }
      }
    `,
    answerOptions: [
      {
        text: "반응형 테이블은 모든 디바이스에서 테이블의 모든 열과 행을 동시에 보여주기 위해 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "반응형 테이블은 좁은 화면에서는 가로 스크롤을 통해 테이블을 볼 수 있게 하며, 넓은 화면에서는 테이블의 모든 컨텐츠를 한눈에 볼 수 있게 합니다.",
        isCorrect: false,
      },
      {
        text: "반응형 테이블은 테이블의 각 셀을 개별적인 블록 요소로 변환하여, 좁은 화면에서도 내용을 세로로 읽을 수 있게 합니다.",
        isCorrect: true,
      },
      {
        text: "반응형 테이블은 테이블의 가로 길이를 줄여서 모바일 기기에서 테이블의 크기를 줄이기 위해 사용됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "반응형 테이블은 테이블의 각 셀을 개별적인 블록 요소로 변환하여, 좁은 화면에서도 내용을 세로로 읽을 수 있게 합니다.",
    explanation:
      "좁은 화면을 가진 기기에서 전통적인 테이블 레이아웃은 모든 컨텐츠를 적절히 보여주는 데 어려움이 있습니다. 반응형 테이블 디자인은 미디어 쿼리를 사용하여 화면 크기에 따라 테이블의 레이아웃을 변경합니다. 위의 CSS 코드 예시에서는 `max-width: 600px`의 조건 하에서 테이블과 그 셀들을 블록 요소로 전환하고, 각 셀에 `data-title` 속성으로 레이블을 추가하여 좁은 화면에서도 테이블의 데이터를 이해하기 쉽게 만듭니다. 이 방식은 테이블 셀을 세로로 쌓아서 각 셀의 레이블과 데이터를 세로로 읽을 수 있도록 하여 모바일 친화적인 경험을 제공합니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "반응형 웹 디자인에서 고려해야 할 기본 원칙은 무엇인가요? 아래의 옵션 중 올바른 것을 고르세요.",
    code: "",
    answerOptions: [
      {
        text: "화면 해상도에 따라 고정된 레이아웃 크기를 사용하여 일관된 디자인을 유지합니다.",
        isCorrect: false,
      },
      {
        text: "모든 웹 페이지 요소는 절대 단위로 크기가 지정되어야 하며, 디바이스의 화면 크기에 관계없이 동일하게 표시되어야 합니다.",
        isCorrect: false,
      },
      {
        text: "유동적 그리드 레이아웃, 유연한 이미지, 미디어 쿼리를 사용하여 다양한 디바이스와 화면 크기에 맞게 콘텐츠를 조정합니다.",
        isCorrect: true,
      },
      {
        text: "모든 텍스트는 이미지로 변환되어야 하므로, 사용자가 화면을 확대하거나 축소하더라도 텍스트의 품질이 유지됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "유동적 그리드 레이아웃, 유연한 이미지, 미디어 쿼리를 사용하여 다양한 디바이스와 화면 크기에 맞게 콘텐츠를 조정합니다.",
    explanation:
      "반응형 웹 디자인의 핵심 원칙은 웹 페이지가 다양한 디바이스에서 보기에 적합하도록 만드는 것입니다. 이를 위해 개발자들은 유동적인 그리드 레이아웃을 사용하여 요소의 크기가 상대적으로 조정되도록 하고, 이미지와 미디어는 최대 너비를 100%로 설정하여 화면 크기에 맞게 조절되도록 합니다. 또한, 미디어 쿼리를 사용하여 다양한 디스플레이 조건에서 적절한 CSS 스타일을 적용할 수 있습니다. 이러한 원칙들은 웹 페이지가 소형 모바일 디바이스부터 대형 데스크탑 모니터까지 모든 화면에서 잘 보이도록 보장합니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "반응형 웹 디자인에서 유동적 그리드 시스템을 구현하기 위해 CSS에서 주로 사용되는 속성은 무엇인가요? 아래의 코드 예시를 참고하여 선택하십시오.",
    code: `
      .container {
        display: flex;
        flex-wrap: wrap;
      }
      .column {
        flex: 0 0 50%;
        max-width: 50%;
      }
      @media screen and (max-width: 600px) {
        .column {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }
    `,
    answerOptions: [
      {
        text: "flex 속성을 사용하여 각 컬럼의 너비를 백분율로 설정하고, 미디어 쿼리를 통해 화면 크기에 따라 이를 조정합니다.",
        isCorrect: true,
      },
      {
        text: "position 속성을 absolute로 설정하여 모든 컬럼이 화면에 맞춰 위치하도록 합니다.",
        isCorrect: false,
      },
      {
        text: "width 속성을 픽셀 단위로 설정하여 모든 컬럼의 크기를 고정합니다.",
        isCorrect: false,
      },
      {
        text: "margin 속성을 사용하여 컬럼 사이의 간격만 조정합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "flex 속성을 사용하여 각 컬럼의 너비를 백분율로 설정하고, 미디어 쿼리를 통해 화면 크기에 따라 이를 조정합니다.",
    explanation:
      "유동적 그리드 시스템은 컨테이너 내의 컬럼들이 다양한 화면 크기에 맞춰 유연하게 조정될 수 있도록 하는 레이아웃 기법입니다. 이 코드 예시에서는 CSS의 flexbox 모델을 사용하여 '.column' 클래스를 가진 요소들이 유동적으로 크기 조정이 가능하도록 설정하고 있습니다. 기본 상태에서는 2개의 컬럼이 화면의 50%씩 차지하지만, 화면의 너비가 600px 이하가 되면 미디어 쿼리를 통해 컬럼이 100% 너비를 가지도록 조정합니다. 이를 통해 작은 화면에서는 컬럼이 위아래로 쌓이게 되어 사용자는 세로로 스크롤하여 내용을 볼 수 있습니다. 이러한 유동적 그리드 시스템은 반응형 웹 디자인의 핵심 요소 중 하나입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "반응형 웹 디자인에서 이미지를 유연하게 만들기 위해 사용되는 CSS 속성은 무엇인가요? 아래의 코드 예시를 참고하여 선택하십시오.",
    code: `
      img.responsive {
        max-width: 100%;
        height: auto;
      }
    `,
    answerOptions: [
      {
        text: "이미지의 `max-width` 속성을 `100%`로 설정하고, `height` 속성을 `auto`로 설정하여 이미지가 부모 요소의 너비에 따라 크기가 조정되도록 합니다.",
        isCorrect: true,
      },
      {
        text: "이미지의 `width` 속성을 고정 픽셀 값으로 설정하여 이미지의 크기를 고정시킵니다.",
        isCorrect: false,
      },
      {
        text: "이미지의 `display` 속성을 `block`으로 설정하여 이미지가 화면 전체 너비를 차지하도록 합니다.",
        isCorrect: false,
      },
      {
        text: "이미지에 `position: relative`를 적용하고 `top` 및 `left` 값을 조정하여 이미지의 위치를 동적으로 조정합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "이미지의 `max-width` 속성을 `100%`로 설정하고, `height` 속성을 `auto`로 설정하여 이미지가 부모 요소의 너비에 따라 크기가 조정되도록 합니다.",
    explanation:
      "반응형 웹 디자인에서 이미지를 유연하게 만들기 위해서는 이미지가 부모 요소의 크기에 맞게 적응할 수 있어야 합니다. 이를 위해 `max-width` 속성을 `100%`로 설정하면, 이미지는 부모 요소의 최대 너비까지만 확장되고 그 이상으로는 커지지 않습니다. `height`를 `auto`로 설정함으로써 이미지의 원래 종횡비가 유지되며, 이에 따라 이미지의 높이가 자동으로 조정됩니다. 이 방식을 통해 이미지는 다양한 디스플레이 크기에서 자연스럽게 표현되면서, 레이아웃을 깨트리지 않고 콘텐츠에 부드럽게 적응합니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "미디어 쿼리를 사용하여 특정 브레이크포인트 이하에서 적용할 CSS 규칙을 정의하는 방법은 무엇입니까? 아래 코드 예시를 참고하여 정답을 선택하십시오.",
    code: `
      @media screen and (max-width: 768px) {
        body {
          background-color: lightblue;
        }
      }
    `,
    answerOptions: [
      {
        text: "미디어 쿼리는 화면의 크기에 따라 다른 스타일을 적용할 수 없으므로, 이는 잘못된 사용법입니다.",
        isCorrect: false,
      },
      {
        text: "`@media screen and (max-width: 768px)` 구문은 화면 너비가 768픽셀 이하일 때 `body`의 배경색을 `lightblue`로 설정하는 CSS 규칙을 정의합니다.",
        isCorrect: true,
      },
      {
        text: "미디어 쿼리는 오직 인쇄 매체에만 사용되므로, 스크린에 대한 스타일 규칙을 정의할 수 없습니다.",
        isCorrect: false,
      },
      {
        text: "`@media screen and (max-width: 768px)` 구문은 모든 미디어 유형에 대해 항상 적용되어야 하는 글로벌 스타일을 정의합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "`@media screen and (max-width: 768px)` 구문은 화면 너비가 768픽셀 이하일 때 `body`의 배경색을 `lightblue`로 설정하는 CSS 규칙을 정의합니다.",
    explanation:
      "미디어 쿼리를 사용하여 반응형 웹 디자인에서 특정 조건에서만 적용되는 CSS 규칙을 정의할 수 있습니다. 위의 코드 예시에서 `@media screen and (max-width: 768px)`는 '화면 유형이 스크린이고, 너비가 최대 768픽셀인 경우'를 의미합니다. 이 조건이 만족될 때, `body` 요소에 대한 배경색을 `lightblue`로 설정하는 규칙이 적용됩니다. 이러한 방식으로 미디어 쿼리를 사용하면 다양한 화면 크기와 장치에 따라 콘텐츠의 레이아웃과 스타일을 동적으로 조정할 수 있으며, 이는 사용자 경험을 크게 향상시킬 수 있습니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "반응형 웹 디자인에서 모바일 기기에 최적화된 뷰포트 설정을 위해 HTML 문서의 `<head>` 섹션에 추가해야 하는 코드는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "<meta name='viewport' content='user-scalable=no, width=device-width'>",
        isCorrect: false,
      },
      {
        text: "<meta name='viewport' content='width=1024'>",
        isCorrect: false,
      },
      {
        text: "<meta name='viewport' content='width=device-width, initial-scale=1'>",
        isCorrect: true,
      },
      {
        text: "<meta name='viewport' content='width=device-width, maximum-scale=1'>",
        isCorrect: false,
      },
    ],
    answer:
      "<meta name='viewport' content='width=device-width, initial-scale=1'>",
    explanation:
      "반응형 웹 디자인에서는 `<meta name='viewport' content='width=device-width, initial-scale=1'>` 태그를 사용하여 뷰포트를 설정하는 것이 일반적입니다. 이 태그는 웹 페이지가 사용자의 기기에 따라 콘텐츠 너비를 조정하고, 초기 확대 레벨을 1.0(100%)으로 설정하도록 합니다. 이를 통해 모바일 기기에서 콘텐츠가 화면에 맞게 적절히 보여지도록 최적화됩니다. 사용자 확대/축소를 방지하는 'user-scalable=no' 설정은 접근성 측면에서 권장되지 않으며, 고정된 뷰포트 너비(예: 'width=1024')는 다양한 디바이스의 화면 크기를 고려하지 않는 것이므로 적합하지 않습니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "웹 페이지가 다양한 장치에서 콘텐츠를 유동적으로 표시하도록 `<meta>` 태그를 활용해 뷰포트를 설정하는 방법에 대해 설명하십시오. 아래 코드 예시가 올바르게 뷰포트를 설정하고 있는지 판단하고, 그 이유를 설명하십시오.",
    code: `
      <meta name="viewport" content="width=device-width, initial-scale=1">
    `,
    answerOptions: [
      {
        text: "예, 이 `<meta>` 태그는 뷰포트의 너비를 장치의 화면 너비에 맞추고, 페이지의 초기 확대 비율을 1로 설정합니다.",
        isCorrect: true,
      },
      {
        text: "아니요, 이 `<meta>` 태그는 고정된 너비의 레이아웃을 만들기 때문에 반응형 웹 디자인에 적합하지 않습니다.",
        isCorrect: false,
      },
      {
        text: "예, 하지만 `initial-scale=1`은 필요 없으며 `width=device-width`만 있으면 충분합니다.",
        isCorrect: false,
      },
      {
        text: "아니요, `initial-scale=1`은 사용자가 확대/축소를 할 수 없게 하므로 접근성에 문제가 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "예, 이 `<meta>` 태그는 뷰포트의 너비를 장치의 화면 너비에 맞추고, 페이지의 초기 확대 비율을 1로 설정합니다.",
    explanation:
      '반응형 웹 디자인에서 `<meta name="viewport" content="width=device-width, initial-scale=1">`는 매우 중요한 설정입니다. 이 태그는 뷰포트의 너비를 각 장치의 화면 너비에 맞추도록 지시하며, 초기 확대 비율을 1로 설정하여 사용자가 웹 페이지를 처음 볼 때, 확대되거나 축소되지 않은 기본 뷰를 제공합니다. 이는 다양한 크기의 디스플레이에서 웹 페이지가 적절히 보이도록 보장하며, 사용자의 확대/축소 기능에 영향을 주지 않습니다. 따라서 이 설정은 반응형 웹 디자인을 위한 필수적인 구성 요소입니다.',
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
];
