// questions2.js
export const typescriptNotionErrorSolution = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "타입스크립트와 함께 리액트를 사용할 때, props로 전달되는 데이터의 타입을 미리 정의하지 않으면 어떤 문제가 발생하고 이를 해결하기 위한 방법은 무엇인가요?",
    code: `
    import React from 'react';

    type Props = {
      name: string;
      age: number;
    };

    export default function MyComponent({ name, age }: Props) {
      return (
        <div>
          <p>{name}</p>
          <p>{age}</p>
        </div>
      );
    };
    `,
    answerOptions: [
      {
        text: "타입 오류가 발생할 수 있으며, 이를 해결하기 위해 타입스크립트의 type을 사용해 props의 타입을 미리 정의해야 한다.",
        isCorrect: true,
      },
      {
        text: "런타임 에러가 발생할 수 있으며, 이를 해결하기 위해 'try-catch' 문을 사용해야 한다.",
        isCorrect: false,
      },
      {
        text: "컴파일 오류가 발생할 수 있으며, 이를 해결하기 위해 JavaScript를 사용해야 한다.",
        isCorrect: false,
      },
      {
        text: "메모리 누수가 발생할 수 있으며, 이를 해결하기 위해 'useEffect' 훅을 사용해야 한다.",
        isCorrect: false,
      },
    ],
    answer:
      "타입 오류가 발생할 수 있으며, 이를 해결하기 위해 타입스크립트의 type을 사용해 props의 타입을 미리 정의해야 한다.",
    explanation:
      "타입스크립트와 함께 리액트를 사용할 때, props로 전달되는 데이터의 타입을 미리 정의하지 않으면 타입 오류가 발생할 수 있습니다. 이를 해결하기 위해 타입스크립트의 type을 사용해 props의 타입을 미리 정의할 수 있습니다.",
    subject: "typescript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 타입스크립트 오류가 발생하고 있습니다. 무엇이 문제이고, 어떻게 수정해야 하나요?",
    code: `
    import React from 'react';

    interface Props {
      name: string;
      age: number;
    };

    export default function MyComponent({ name, age }: Props) {
      return (
        <div>
          <p>{name}</p>
          <p>{age}</p>
          <p>{location}</p>
        </div>
      );
    };
    `,
    answerOptions: [
      {
        text: "`location`이 정의되지 않았으며, Props 인터페이스에 `location: string;`을 추가해야 한다.",
        isCorrect: true,
      },
      {
        text: "`name`이 정의되지 않았으며, Props 인터페이스에 `name: string;`을 추가해야 한다.",
        isCorrect: false,
      },
      {
        text: "`age`이 정의되지 않았으며, Props 인터페이스에 `age: number;`을 추가해야 한다.",
        isCorrect: false,
      },
      {
        text: "`React`가 정의되지 않았으며, import 구문에 `React`를 추가해야 한다.",
        isCorrect: false,
      },
    ],
    answer:
      "`location`이 정의되지 않았으며, Props 인터페이스에 `location: string;`을 추가해야 한다.",
    explanation:
      "코드에서 `location`이 정의되지 않아 타입스크립트 오류가 발생합니다. 이를 해결하기 위해 Props 인터페이스에 `location: string;`을 추가해야 합니다.",
    subject: "typescript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 타입스크립트 오류가 발생하고 있습니다. 무엇이 문제이고, 어떻게 수정해야 하나요?",
    code: `
    import React from 'react';

    type Props = {
      name: string;
      age: number;
    }

    export default function MyComponent({ name, age, location }: Props) {
      return (
        <div>
          <p>{name}</p>
          <p>{age}</p>
          <p>{location}</p>
        </div>
      );
    };
    `,
    answerOptions: [
      {
        text: "`location`이 정의되지 않았으며, Props 타입에 `location?: string;`을 추가해야 한다.",
        isCorrect: true,
      },
      {
        text: "`name`이 정의되지 않았으며, Props 타입에 `name?: string;`을 추가해야 한다.",
        isCorrect: false,
      },
      {
        text: "`age`이 정의되지 않았으며, Props 타입에 `age?: number;`을 추가해야 한다.",
        isCorrect: false,
      },
      {
        text: "`React`가 정의되지 않았으며, import 구문에 `React`를 추가해야 한다.",
        isCorrect: false,
      },
    ],
    answer:
      "`location`이 정의되지 않았으며, Props 타입에 `location?: string;`을 추가해야 한다.",
    explanation:
      "코드에서 `location`이 정의되지 않아 타입스크립트 오류가 발생합니다. 이를 해결하기 위해 Props 타입에 `location?: string;`을 추가해야 합니다. 이렇게 하면 `location` prop는 선택적이게 되어, 전달되지 않아도 오류가 발생하지 않습니다.",
    subject: "typescript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 타입스크립트 오류가 발생하고 있습니다. 무엇이 문제이고, 어떻게 수정해야 하나요?",
    code: `
    import React from 'react';

    type Props = {
      name: string;
      age: number;
      location?: string;
    }

    export default function MyComponent({ name, age, location }: Props) {
      let newAge: number = age + 'years old';
      return (
        <div>
          <p>뤼튼</p>
          <p>{newAge}</p>
          <p>{location}</p>
        </div>
      );
    };
    `,
    answerOptions: [
      {
        text: "`newAge`는 숫자 타입으로 선언되었지만 문자열을 할당하려고 하므로 오류가 발생하며, `let newAge: string = age + 'years old';`로 수정해야 한다.",
        isCorrect: true,
      },
      {
        text: "`age`는 숫자 타입이므로 문제가 없으며, 오류가 발생하는 부분은 다른 곳이다.",
        isCorrect: false,
      },
      {
        text: "`location`이 정의되지 않았으며, Props 타입에 `location: string;`을 추가해야 한다.",
        isCorrect: false,
      },
      {
        text: "`name`이 정의되지 않았으며, Props 타입에 `name: string;`을 추가해야 한다.",
        isCorrect: false,
      },
    ],
    answer:
      "`newAge`는 숫자 타입으로 선언되었지만 문자열을 할당하려고 하므로 오류가 발생하며, `let newAge: string = age + 'years old';`로 수정해야 한다.",
    explanation:
      "`newAge`는 숫자 타입으로 선언되었지만, 숫자와 문자열의 연산 결과인 문자열을 할당하려고 해서 타입스크립트 오류가 발생합니다. 이를 해결하기 위해 `let newAge: string = age + 'years old';`로 수정해야 합니다.",
    subject: "typescript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 타입스크립트 오류가 발생하고 있습니다. 무엇이 문제이고, 어떻게 수정해야 하나요?",
    code: `
    import React from 'react';

    type Props = {
      name: string;
      age: number;
      location?: string;
    }

    export default function MyComponent({ name, age, location }: Props) {
      let newAge: number = age + 'years old';
      return (
        <div>
          <p>뤼튼</p>
          <p>{newAge}</p>
          <p>{location}</p>
        </div>
      );
    };
    `,
    answerOptions: [
      {
        text: "`newAge`는 숫자 타입으로 선언되었지만 문자열을 할당하려고 하므로 오류가 발생하며, `let newAge: string = age + 'years old';`로 수정해야 한다.",
        isCorrect: true,
      },
      {
        text: "`age`는 숫자 타입이므로 문제가 없으며, 오류가 발생하는 부분은 다른 곳이다.",
        isCorrect: false,
      },
      {
        text: "`location`이 정의되지 않았으며, Props 타입에 `location: string;`을 추가해야 한다.",
        isCorrect: false,
      },
      {
        text: "`name`이 정의되지 않았으며, Props 타입에 `name: string;`을 추가해야 한다.",
        isCorrect: false,
      },
    ],
    answer:
      "`newAge`는 숫자 타입으로 선언되었지만 문자열을 할당하려고 하므로 오류가 발생하며, `let newAge: string = age + 'years old';`로 수정해야 한다.",
    explanation:
      "`newAge`는 숫자 타입으로 선언되었지만, 숫자와 문자열의 연산 결과인 문자열을 할당하려고 해서 타입스크립트 오류가 발생합니다. 이를 해결하기 위해 `let newAge: string = age + 'years old';`로 수정해야 합니다.",
    subject: "typescript",
    subSubject: "error",
    quizType: "coding",
  },
];
