// questions2.js
export const typescriptNotionUtilityType = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText: "TypeScript의 'keyof' 유틸리티 타입의 역할은 무엇인가요?",
    code: `
      type User = {
        name: string;
        age: number;
      };
    
      type UserKeys = keyof User; // 'name' | 'age'
    `,
    answerOptions: [
      {
        text: "객체의 모든 속성 값을 유니온 타입으로 반환한다.",
        isCorrect: false,
      },
      {
        text: "객체의 모든 속성 이름들을 유니온 타입으로 반환한다.",
        isCorrect: true,
      },
      {
        text: "객체의 특정 속성의 타입을 반환한다.",
        isCorrect: false,
      },
      {
        text: "객체의 속성 개수를 반환한다.",
        isCorrect: false,
      },
    ],
    answer: "객체의 모든 속성 이름들을 유니온 타입으로 반환한다.",
    explanation:
      "'keyof' 유틸리티 타입은 TypeScript에서 제공하는 특수한 유틸리티 타입 중 하나로, 객체 타입의 모든 속성 이름들을 문자열 리터럴 유니온 타입으로 반환합니다. 이를 통해 객체의 속성 이름들을 타입으로 사용할 수 있게 됩니다.",
    subject: "typescript",
    subSubject: "Utility Types",
    quizType: "coding",
  },
  {
    "type": "multiple-choice",
    "questionText": "TypeScript의 'Record' 유틸리티 타입의 역할은 무엇인가요?",
    "code": `
      type PageInfo = Record<string, number>;
  
      let page: PageInfo = {
        total: 100,
        current: 1,
        next: 2,
      };
    `,
    "answerOptions": [
      {
        "text": "특정 타입의 속성을 가진 객체 타입을 생성한다.",
        "isCorrect": true
      },
      {
        "text": "객체의 모든 속성 값을 유니온 타입으로 반환한다.",
        "isCorrect": false
      },
      {
        "text": "객체의 모든 속성 이름들을 유니온 타입으로 반환한다.",
        "isCorrect": false
      },
      {
        "text": "객체의 특정 속성의 타입을 반환한다.",
        "isCorrect": false
      }
    ],
    "answer": "특정 타입의 속성을 가진 객체 타입을 생성한다.",
    "explanation":
      "'Record' 유틸리티 타입은 TypeScript에서 제공하는 특별한 유틸리티 타입 중 하나로, 특정 타입의 속성을 가진 객체 타입을 생성할 수 있게 해줍니다. 'Record<K, T>'는 'K' 타입의 모든 속성 키를 가지고, 각각의 속성이 'T' 타입 값을 가지는 객체 타입을 생성합니다. 위의 코드 예시에서 PageInfo는 Record<string, number> 타입이며, 이는 모든 속성 키가 문자열이고, 각각의 속성 값이 숫자인 객체의 타입을 나타냅니다. 따라서 page 객체는 total, current, next라는 속성 키를 가지고 있고, 각 속성의 값은 숫자입니다.",
    "subject": "typescript",
    "subSubject": "Utility Types",
    "quizType": "coding"
  }
  
];
