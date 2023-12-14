// questions1.js
export const cssNotionbasic = [
  // 질문 데이터...
  // basic
  // basic
  {
    type: "multiple-choice",
    questionText: "다음 중 CSS의 아이디 선택자에 대한 올바른 설명은 무엇인가?",
    questionImage:
      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg", // 이미지 URL 추
    code: `
      const promise = new Promise((resolve, reject) => {
        const success = true;
        if (success) {
          resolve('Operation Successful');
        } else {
          reject('Operation Failed');
        }
      });
    
      promise.then((message) => {
        console.log(message);
      }).catch((message) => {
        console.error(message);
      });
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
    subject: "test",
    subSubject: "test",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 진힐라와의 전투에서 영혼을 회수하고 무한 물약을 사용할 수 있도록 하는 방법에 대한 설명으로 올바른 것은 무엇인가요?",
    questionImage:
      "https://i.namu.wiki/i/uzWKygLKDcVCt_4emJcwM25v8d0y2JIOpQ-Gs6yCyR0k-WDlbzeioc6gSeJJRtI6SZGf8bpQrOh3V4VIQMNKkQ.gif",
    answerOptions: [
      {
        text: "제단을 부수면 빨간색 해골 문양이 나타나고, 이후 5초 동안 물약을 무한으로 사용할 수 있다.",
        isCorrect: false,
      },
      {
        text: "제단을 부수면 초록색 해골 문양이 나타나고, 이후 5초 동안 물약을 무한으로 사용할 수 있다.",
        isCorrect: false,
      },
      {
        text: "제단을 부수면 무한 물약 사용이 가능한 빨간색에서 초록색으로 변경되는 해골 문양이 나타난다. 이후 5초 동안 체력 소모 스킬을 사용하고 물약을 마셔 체력을 유지해야 한다.",
        isCorrect: true,
      },
      {
        text: "제단을 부수면 무한 물약 사용이 가능한 빨간색에서 초록색으로 변경되는 해골 문양이 나타난다. 하지만 제단에 힐라가 부딪히면 제단이 사라져 무한 물약 사용이 불가능해진다.",
        isCorrect: false,
      },
    ],
    answer:
      "제단을 부수면 무한 물약 사용이 가능한 빨간색에서 초록색으로 변경되는 해골 문양이 나타난다. 이후 5초 동안 체력 소모 스킬을 사용하고 물약을 마셔 체력을 유지해야 한다.",
    explanation:
      "제단을 부수면 영혼을 회수하고 무한 물약 사용이 가능한 빨간색에서 초록색으로 변경되는 해골 문양이 나타납니다. 이후 5초 동안 체력 소모하는 스킬을 사용하고 물약을 마셔 체력을 유지해야 합니다. 이를 통해 보스와의 전투를 유리하게 진행할 수 있습니다.",
    subject: "maplestory",
    subSubject: "진힐라",
    quizType: "strategy",
  },
];
