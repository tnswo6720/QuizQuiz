// questions1.js
export const typescriptCodeTypescriptBoard = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "타입스크립트에서 이벤트 핸들러 함수의 매개변수 타입을 지정하는 방법은 무엇인가요?",
    code: `
    import { useState } from "react";
    import type { ChangeEvent } from "react";
  
    export default function BoardWrite() {
      const [writer, setWriter] = useState("");
  
      const onChangeWriter = ______ {
        setWriter(event.target.value);
      };
  
      return (
        <div>
          <input onChange={onChangeWriter} />
        </div>
      );
    }
    `,
    answerOptions: [
      ["(event) =>"],
      ["(event: ChangeEvent<HTMLInputElement>) =>"],
      ["(event: Event) =>"],
      ["(event: InputEvent) =>"],
    ],
    answer: ["(event: ChangeEvent<HTMLInputElement>) =>"],
    explanation:
      "타입스크립트에서는 이벤트 핸들러 함수의 매개변수에 타입을 지정해야 합니다. 입력 이벤트의 경우 'ChangeEvent<HTMLInputElement>' 타입을 사용합니다.",
    subject: "typescript",
    subSubject: "typescriptboard",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "타입스크립트에서 함수의 반환 타입을 지정하는 방법은 무엇인가요?",
    code: `
    import { useMutation } from "@apollo/client";
    import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
    import { useRouter } from "next/router";
    import { useState } from "react";
  
    export default function BoardWrite() {
      const router = useRouter();
      const [writer, setWriter] = useState("");
      const [나의함수] = useMutation(나의그래프큐엘셋팅);
  
      const onClickSubmit = async ______ {
        const result = await 나의함수({
          variables: {
            writer: writer
          },
        });
        router.push(\`/section09/09-04-boards/\${result.data.createBoard.number}\`);
      };
  
      return (
        <div>
          <button onClick={onClickSubmit}>Submit</button>
        </div>
      );
    }
    `,
    answerOptions: [
      ["(): void =>"],
      ["(): Promise<void> =>"],
      ["(): Promise<any> =>"],
      ["(): any =>"],
    ],
    answer: ["(): Promise<void> =>"],
    explanation:
      "타입스크립트에서는 함수의 반환 타입을 지정해야 합니다. 비동기 함수의 경우, 반환 타입은 'Promise'이며, 이 함수가 반환값을 가지지 않는 경우 'void'를 사용하여 'Promise<void>' 타입을 지정합니다.",
    subject: "typescript",
    subSubject: "typescriptboard",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "타입스크립트에서 변수의 타입을 명시적으로 지정하는 방법은 무엇인가요?",
    code: `
    import { useRouter } from "next/router";
    import type { IMyvariables } from "./BoardWrite.types";
  
    export default function BoardWrite() {
      const router = useRouter();
  
      const onClickUpdate = async () => {
        ______ myvariables = {
          number: Number(router.query.number),
        };
  
        // ... 나머지 코드 ...
      };
  
      // ... 나머지 코드 ...
    }
    `,
    answerOptions: [
      ["let myvariables: IMyvariables ="],
      ["const myvariables: IMyvariables ="],
      ["var myvariables: IMyvariables ="],
      ["myvariables: IMyvariables ="],
    ],
    answer: ["const myvariables: IMyvariables ="],
    explanation:
      "타입스크립트에서는 변수를 선언할 때 그 변수의 타입을 지정할 수 있습니다. 이때, '변수명: 타입 =' 형식을 사용하며, 변경되지 않는 변수는 'const'를 사용하여 선언합니다.",
    subject: "typescript",
    subSubject: "typescriptboard",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "타입스크립트에서, 리액트 컴포넌트의 props의 타입을 지정하는 방법은 무엇인가요?",
    code: `
    import { useState } from "react";
    import type { IBoardWriteProps } from "./BoardWrite.types";
  
    export default function BoardWrite(______) {
      const [writer, setWriter] = useState("");
  
      // ... 나머지 코드 ...
    }
    `,
    answerOptions: [
      ["props: IBoardWriteProps"],
      ["props = IBoardWriteProps"],
      ["props == IBoardWriteProps"],
      ["props === IBoardWriteProps"],
    ],
    answer: ["props: IBoardWriteProps"],
    explanation:
      "타입스크립트에서는 리액트 컴포넌트의 props의 타입을 지정할 수 있습니다. 이때, 'props: 타입' 형식을 사용합니다.",
    subject: "typescript",
    subSubject: "typescriptboard",
    quizType: "coding",
  },
];
