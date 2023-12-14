// questions1.js
export const typescriptCodeBoard = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "React에서 props 값에 따라 다른 내용을 렌더링하려면 어떤 방법을 사용해야 하나요?",
    code: `
    export default function BoardComponent(props) {
      return (
        <>
          <h1>{props.isEdit ? "수정" : ______}페이지</h1>
          제목: <input type="text" /> <br></br>
          내용: <input type="text" /> <br></br>
          <button>{props.isEdit ? "수정" : "등록"}하기</button>
        </>
      );
    }
    `,
    answerOptions: [['"등록"'], ['"생성"'], ['"추가"'], ['"삽입"']],
    answer: ['"등록"'],
    explanation:
      "React에서 조건에 따라 다른 내용을 렌더링하려면 삼항 연산자를 사용할 수 있습니다. 여기에서는 'props.isEdit'의 값이 참일 경우 '수정', 거짓일 경우 '등록'을 렌더링합니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "React 컴포넌트에서 props의 값을 참조하려면 어떻게 해야 하나요?",
    code: `
    export default function BoardComponent(props) {
      return (
        <>
          <h1>{______.isEdit ? "수정" : "등록"}페이지</h1>
          제목: <input type="text" /> <br></br>
          내용: <input type="text" /> <br></br>
          <button>{props.isEdit ? "수정" : "등록"}하기</button>
        </>
      );
    }
    `,
    answerOptions: [["props"], ["state"], ["context"], ["ref"]],
    answer: ["props"],
    explanation:
      "React 컴포넌트에서 부모 컴포넌트로부터 받은 props의 값을 참조하려면 'props' 키워드를 사용합니다. 여기에서는 'props.isEdit'를 통해 'isEdit' 값에 접근하고 있습니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "React 컴포넌트에서 입력 필드를 렌더링하려면 어떤 태그를 사용해야 하나요?",
    code: `
    export default function BoardComponent(props) {
      return (
        <>
          <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
          제목: <______ type="text" /> <br></br>
          내용: <input type="text" /> <br></br>
          <button>{props.isEdit ? "수정" : "등록"}하기</button>
        </>
      );
    }
    `,
    answerOptions: [["input"], ["textarea"], ["select"], ["button"]],
    answer: ["input"],
    explanation:
      "React에서 사용자의 입력을 받기 위해 'input' 태그를 사용합니다. 'type' 속성은 입력 필드의 유형을 결정합니다. 여기에서는 'text'로 설정되어 있어 텍스트를 입력받는 필드를 렌더링합니다.",
    subject: "typescript",
    subSubject: "board",
    quizType: "coding",
  },
];
