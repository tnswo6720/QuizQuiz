// questions1.js
export const exam1 = [
  // 질문 데이터...
  {
    type: "short-answer",
    questionText:
      "당신의 직무 목표를 위해 당신이 수행해야 하는 직무에 대해 Description을 작성해보세요.",
    code: "",
    answerOptions: [
      {
        text: "HTML, CSS, JavaScript와 같은 프론트엔드 기술을 사용하여 사용자 경험을 최적화합니다. React.js를 사용하여 동적인 웹 페이지를 구축하고 유지보수합니다. UX/UI 디자이너와 협업하여 사용자 중심의 디자인을 실현하고, 백엔드 개발자와 협업하여 데이터를 웹사이트에 효과적으로 표현합니다.",
        isCorrect: true,
      },
    ],
    answer:
      "HTML, CSS, JavaScript와 같은 프론트엔드 기술을 사용하여 사용자 경험을 최적화합니다. React.js를 사용하여 동적인 웹 페이지를 구축하고 유지보수합니다. UX/UI 디자이너와 협업하여 사용자 중심의 디자인을 실현하고, 백엔드 개발자와 협업하여 데이터를 웹사이트에 효과적으로 표현합니다.",
    explanation:
      "직무 Description은 직무 목표를 달성하기 위해 수행해야 하는 업무에 대한 세부적인 설명입니다. 이는 본인의 역할과 책임, 사용하는 기술, 협업하는 파트너 등을 포함할 수 있습니다.",
    subject: "exam",
    subSubject: "직무",
    quizType: "short-answer",
  },
  {
    type: "short-answer",
    questionText:
      "현재 진행 중인 프로젝트에서 당신이 수행하고 있는 업무와 사용하고 있는 기술 스택(AS IS)에 대해 설명해보세요.",
    code: "",
    answerOptions: [
      {
        text: "현재 React.js를 주로 사용하여 동적인 웹 페이지를 개발하고 있습니다. 상태 관리를 위해 Redux를 사용하고, 스타일링에는 Emotion/styled를 사용하여 구현하고 있습니다. 백엔드와의 연동을 위해 RESTful API를 사용하며, 데이터 요청 시 Axios를 사용합니다. 간단한 백엔드 시스템에 대한 이해가 있으나, 보다 깊이 있는 지식을 획득하고자 합니다.",
        isCorrect: true,
      },
    ],
    answer:
      "현재 React.js를 주로 사용하여 동적인 웹 페이지를 개발하고 있습니다. 상태 관리를 위해 Redux를 사용하고, 스타일링에는 Emotion/styled를 사용하여 구현하고 있습니다. 백엔드와의 연동을 위해 RESTful API를 사용하며, 데이터 요청 시 Axios를 사용합니다. 간단한 백엔드 시스템에 대한 이해가 있으나, 보다 깊이 있는 지식을 획득하고자 합니다.",
    explanation:
      "AS IS Description은 현재 수행 중인 업무와 사용 중인 기술 스택을 포함합니다.",
    subject: "exam",
    subSubject: "직무",
    quizType: "short-answer",
  },
  {
    type: "short-answer",
    questionText:
      "향후 당신이 목표로 하는 업무 및 필요한 기술 스택(TO BE)에 대해 설명해보세요.",
    code: "",
    answerOptions: [
      {
        text: "백엔드 시스템의 설계와 구현에 대한 이해를 바탕으로, 전체 웹 어플리케이션의 흐름과 구조를 파악하고 이를 프론트엔드 개발에 반영할 수 있습니다.  Express.js와 같은 백엔드 기술에 능숙하며, SQL 데이터베이스 시스템을 활용해 데이터를 관리할 수 있습니다.",
        isCorrect: true,
      },
    ],
    answer:
      "백엔드 시스템의 설계와 구현에 대한 이해를 바탕으로, 전체 웹 어플리케이션의 흐름과 구조를 파악하고 이를 프론트엔드 개발에 반영할 수 있습니다. Express.js와 같은 백엔드 기술에 능숙하며, SQL 데이터베이스 시스템을 활용해 데이터를 관리할 수 있습니다.",
    explanation:
      "TO BE Description은 향후 당신이 목표로 하는 업무와 필요한 기술 스택을 포함합니다.",
    subject: "exam",
    subSubject: "직무",
    quizType: "short-answer",
  },

  {
    type: "short-answer",
    questionText:
      "현재의 상태(AS IS)에서 목표 상태(TO BE)로 이동하기 위한 동작(Transformation Action)을 설명해보세요.",
    code: "",
    answerOptions: [
      {
        text: "백엔드에서 강의를 통해 실습을 통한 학습을 진행하고 실제 프로젝트에 적용해보고 데이터 저장과 조회 방법에 대해 학습을 진행하고 백엔드와 연동하는 것도 진행, 이후 프론트와 백엔드를 완전히 연동해 웹 애플리케이션의 흐름을 전체적으로 파악해보려고 합니다",
        isCorrect: true,
      },
    ],
    answer:
      "백엔드에서 강의를 통해 실습을 통한 학습을 진행하고 실제 프로젝트에 적용해보고 데이터 저장과 조회 방법에 대해 학습을 진행하고 백엔드와 연동하는 것도 진행, 이후 프론트와 백엔드를 완전히 연동해 웹 애플리케이션의 흐름을 전체적으로 파악해보려고 합니다",
    explanation:
      "Transformation Action은 현재 상태에서 목표 상태로 나아가기 위한 구체적인 행동 계획을 포함합니다.",
    subject: "exam",
    subSubject: "직무",
    quizType: "short-answer",
  },
  {
    type: "short-answer",
    questionText: "동양미래대 졸업생들의 직무사례는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "동양미래대의 졸업생들은 다양한 직무에서 활동하고 있습니다. 예를 들어, 일부 졸업생은 반도체 공정 개발 분야에서 활동하고 있으며, KT DS에서 일하고 있습니다. 또한, 대기업에서 은행의 디지털 직군으로 활동하거나, 소프트웨어 검증(QA) 분야에서 일하고 있는 졸업생도 있습니다.",
        isCorrect: true,
      },
    ],
    answer:
      "동양미래대의 졸업생들은 다양한 직무에서 활동하고 있습니다. 예를 들어, 일부 졸업생은 반도체 공정 개발 분야에서 활동하고 있으며, KT DS에서 일하고 있습니다. 또한, 대기업에서 은행의 디지털 직군으로 활동하거나, 소프트웨어 검증(QA) 분야에서 일하고 있는 졸업생도 있습니다.",
    explanation:
      "동양미래대의 졸업생들은 다양한 분야에서 활동하며, 그들의 경험은 현재 학생들에게 다양한 직무에 대한 이해를 제공합니다.",
    subject: "exam",
    subSubject: "졸업생 직무사례",
    quizType: "short-answer",
  },
];
