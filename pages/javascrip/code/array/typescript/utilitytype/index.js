// questions1.js
export const typescriptCodeUtilitytype = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 원래 타입의 모든 속성을 선택적으로 만드는 유틸리티 타입을 찾아내세요.",
    code: `
    export interface IProfile {
      name: string;
      age: number;
      school: string;
      hobby?: string;
    }
  
    type aaa = ______<IProfile>;
    `,
    answerOptions: [["Partial"], ["Required"], ["Pick"], ["Omit"]],
    answer: ["Partial"],
    explanation:
      "TypeScript의 'Partial' 유틸리티 타입은 원래 타입의 모든 속성을 선택적으로 만듭니다.",
    subject: "typescript",
    subSubject: "utilitytype",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 원래 타입의 모든 선택적 속성을 필수로 만드는 유틸리티 타입을 찾아내세요.",
    code: `
    export interface IProfile {
      name: string;
      age: number;
      school: string;
      hobby?: string;
    }
  
    type bbb = ______<IProfile>;
    `,
    answerOptions: [["Partial"], ["Required"], ["Pick"], ["Omit"]],
    answer: ["Required"],
    explanation:
      "TypeScript의 'Required' 유틸리티 타입은 원래 타입의 모든 선택적 속성을 필수로 만듭니다.",
    subject: "typescript",
    subSubject: "utilitytype",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 원래 타입에서 특정 속성만 선택하여 새로운 타입을 만드는 유틸리티 타입을 찾아내세요.",
    code: `
    export interface IProfile {
      name: string;
      age: number;
      school: string;
      hobby?: string;
    }
  
    type ccc = ______<IProfile, "name" | "age">;
    `,
    answerOptions: [["Partial"], ["Required"], ["Pick"], ["Omit"]],
    answer: ["Pick"],
    explanation:
      "TypeScript의 'Pick' 유틸리티 타입은 원래 타입에서 특정 속성만 선택하여 새로운 타입을 만듭니다.",
    subject: "typescript",
    subSubject: "utilitytype",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 원래 타입에서 특정 속성을 제외하고 새로운 타입을 만드는 유틸리티 타입을 찾아내세요.",
    code: `
    export interface IProfile {
      name: string;
      age: number;
      school: string;
      hobby?: string;
    }
  
    type ddd = ______<IProfile, "school">;
    `,
    answerOptions: [["Partial"], ["Required"], ["Pick"], ["Omit"]],
    answer: ["Omit"],
    explanation:
      "TypeScript의 'Omit' 유틸리티 타입은 원래 타입에서 특정 속성을 제외하고 새로운 타입을 만듭니다.",
    subject: "typescript",
    subSubject: "utilitytype",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 키-값 쌍으로 객체 타입을 생성하는 유틸리티 타입을 찾아내세요.",
    code: `
    export interface IProfile {
      name: string;
      age: number;
      school: string;
      hobby?: string;
    }
  
    type eee = "철수" | "영희" | "훈이";
    type fff = ______<eee, IProfile>;
    `,
    answerOptions: [["Partial"], ["Required"], ["Pick"], ["Omit"], ["Record"]],
    answer: ["Record"],
    explanation:
      "TypeScript의 'Record' 유틸리티 타입은 키-값 쌍으로 객체 타입을 생성합니다.",
    subject: "typescript",
    subSubject: "utilitytype",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 객체의 속성 이름들을 유니온 타입으로 반환하는 유틸리티 타입을 찾아내세요.",
    code: `
    export interface IProfile {
      name: string;
      age: number;
      school: string;
      hobby?: string;
    }
  
    type ggg = ______<IProfile>;
    `,
    answerOptions: [
      ["Partial"],
      ["Required"],
      ["Pick"],
      ["Omit"],
      ["Record"],
      ["keyof"],
    ],
    answer: ["keyof"],
    explanation:
      "TypeScript의 'keyof' 유틸리티 타입은 객체의 속성 이름들을 유니온 타입으로 반환합니다.",
    subject: "typescript",
    subSubject: "utilitytype",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 선언 병합(Declaration Merging)을 가능하게 하는 구문을 찾아내세요.",
    code: `
    ______ IProfile {
      name: string;
      age: number;
      school: string;
      hobby?: string;
    }
  
    ______ IProfile {
      candy: number;
    }
    `,
    answerOptions: [["type"], ["interface"]],
    answer: ["interface"],
    explanation:
      "TypeScript의 'interface'는 선언 병합(Declaration Merging)을 가능하게 합니다. 반면에 'type'은 선언 병합을 지원하지 않습니다.",
    subject: "typescript",
    subSubject: "utilitytype",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 모든 속성을 선택적으로 만들어 사용할 수 있게 하는 유틸리티 타입을 찾아내세요.",
    code: `
    export interface IProfile {
      name: string;
      age: number;
      school: string;
      hobby?: string;
      candy: number;
    }
  
    let profile: ______<IProfile> = {
      candy: 10,
    };
    `,
    answerOptions: [
      ["Partial"],
      ["Required"],
      ["Pick"],
      ["Omit"],
      ["Record"],
      ["keyof"],
    ],
    answer: ["Partial"],
    explanation:
      "TypeScript의 'Partial' 유틸리티 타입은 원래 타입의 모든 속성을 선택적으로 만듭니다. 따라서, 일부 속성만 포함한 객체를 만들 수 있습니다.",
    subject: "typescript",
    subSubject: "utilitytype",
    quizType: "coding",
  },
];
