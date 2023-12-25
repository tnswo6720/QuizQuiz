// questions2.js
export const typescriptNotionInfiniteScroller = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "자바스크립트에서 스프레드 연산자(...)을 사용하여 객체를 복사하는 경우, 어떤 유형의 복사가 이루어지는가?",
    code: `
    const original = { a: 1, b: 2 };
    const copied = { ...original };
    `,
    answerOptions: [
      {
        text: "깊은 복사(Deep Copy)",
        isCorrect: false,
      },
      {
        text: "얕은 복사(Shallow Copy)",
        isCorrect: true,
      },
      {
        text: "복사가 아닌 참조",
        isCorrect: false,
      },
      {
        text: "부분 복사(Partial Copy)",
        isCorrect: false,
      },
    ],
    answer: "얕은 복사(Shallow Copy)",
    explanation:
      "자바스크립트에서 스프레드 연산자(...)를 사용하여 객체를 복사하면 얕은 복사(Shallow Copy)가 이루어집니다. 이는 복사된 객체의 속성이 원본 객체의 속성을 참조하지 않지만, 속성의 값이 객체인 경우 그 객체는 참조형태로 복사되어, 이 객체를 변경하면 원본 객체에도 영향을 미칩니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드 예시 중에서 깊은 복사(Deep Copy)를 수행하지 않는 코드는 무엇인가?",
    code: `
    // Code 1
    const original1 = { a: 1, b: 2 };
    const copied1 = JSON.parse(JSON.stringify(original1));

    // Code 2
    const original2 = { a: 1, b: 2 };
    const copied2 = Object.assign({}, original2);

    // Code 3
    const _ = require('lodash');
    const original3 = { a: 1, b: 2 };
    const copied3 = _.cloneDeep(original3);
    `,
    answerOptions: [
      {
        text: "Code 1",
        isCorrect: false,
      },
      {
        text: "Code 2",
        isCorrect: true,
      },
      {
        text: "Code 3",
        isCorrect: false,
      },
    ],
    answer: "Code 2",
    explanation:
      "Object.assign 메서드는 얕은 복사(Shallow Copy)를 수행하는 방법으로, 깊은 복사를 원하는 경우에는 적합하지 않습니다. 반면에 Code 1의 JSON.stringify와 JSON.parse 메서드를 사용하는 방법과 Code 3의 lodash 라이브러리의 _.cloneDeep 함수를 사용하는 방법은 깊은 복사를 수행합니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "당신은 웹 개발을 진행하고 있습니다. 사용자가 '수정하기' 버튼을 눌렀을 때 텍스트 입력 필드가 나타나도록 만들고 싶습니다. 이를 위해 React에서 제공하는 어떤 기능을 사용해야 할까요?",
    code: "",
    answerOptions: [
      {
        text: "React Router",
        isCorrect: false,
      },
      {
        text: "React Redux",
        isCorrect: false,
      },
      {
        text: "React useState",
        isCorrect: true,
      },
      {
        text: "React useContext",
        isCorrect: false,
      },
    ],
    answer: "React useState",
    explanation:
      "React의 useState 함수를 사용하면 컴포넌트 내에서 동적인 상태를 관리할 수 있습니다. '수정하기' 버튼을 눌렀을 때 텍스트 입력 필드가 나타나도록 만들려면, useState를 사용하여 버튼이 눌렸는지 여부를 나타내는 상태를 생성하고, 이 상태에 따라 텍스트 입력 필드의 렌더링을 조건부로 처리하면 됩니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 '수정하기' 버튼을 누르면 텍스트 입력 필드가 나타나지만, 현재는 수정한 내용을 저장할 수 없습니다. 이 문제를 해결하기 위해 어떤 방법을 사용해야 할까요?",
    code: `
    import { useState } from "react";

    export default function CommentItem(props: any): JSX.Element {
      const [isEdit, setIsEdit] = useState(false);

      const onClickEdit = (): void => {
        setIsEdit(true);
      };
      return (
        <div>
          {!isEdit ? (
            <div>
              <span style={{ margin: "10px" }}>{props.el.title}</span>
              <span style={{ margin: "10px" }}>{props.el.writer}</span>
              <button onClick={onClickEdit}>수정하기</button>
            </div>
          ) : (
            <input type="text" />
          )}
        </div>
      );
    }
    `,
    answerOptions: [
      {
        text: "텍스트 입력 필드의 onChange 이벤트를 핸들링하는 함수를 추가한다.",
        isCorrect: true,
      },
      {
        text: "isEdit 상태를 false로 변경하는 함수를 추가한다.",
        isCorrect: false,
      },
      {
        text: "React Router를 사용하여 페이지를 새로고침한다.",
        isCorrect: false,
      },
      {
        text: "React useContext를 사용하여 전역 상태를 변경한다.",
        isCorrect: false,
      },
    ],
    answer: "텍스트 입력 필드의 onChange 이벤트를 핸들링하는 함수를 추가한다.",
    explanation:
      "텍스트 입력 필드의 onChange 이벤트를 핸들링하는 함수를 추가하여 사용자가 입력한 내용을 상태로 관리하면, 수정한 내용을 저장할 수 있게 됩니다. 이를 위해 React의 useState 함수를 사용하여 사용자가 입력한 내용을 저장할 상태를 추가하고, 이 상태를 업데이트하는 함수를 텍스트 입력 필드의 onChange 이벤트 핸들러로 설정하면 됩니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 map 함수를 사용하여 `CommentItem` 컴포넌트를 렌더링하고 있습니다. 그런데 이 경우, 동일한 key를 가진 여러 요소가 있을 때 발생할 수 있는 문제는 무엇인가요?",
    code: `
    /*
    import { useQuery, gql } from "@apollo/client";
    import type {
      IQuery,
      IQueryFetchBoardsArgs,
    } from "../../../src/commons/types/generated/types";
  
    import CommentItem from "../../../src/components/units/16-comment-item";
  
    const FETCH_BOARDS = gql\`
      query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
          _id
          writer
          title
          contents
        }
      }
    \`;
  
    export default function StaticRoutingMovedPage(): JSX.Element {
      const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
      );
  
      return (
        <div>
          {data?.fetchBoards.map((el) => (
            <CommentItem key={el._id} el={el} />
          ))}
        </div>
      );
    }
    */
    `,
    answerOptions: [
      {
        text: "React가 어떤 항목을 변경, 추가 또는 삭제해야 하는지 판단할 수 없어 성능이 저하될 수 있다.",
        isCorrect: true,
      },
      {
        text: "모든 항목이 동일한 키를 가지므로, map 함수가 모든 항목을 순회하지 않고 첫 번째 항목만을 렌더링한다.",
        isCorrect: false,
      },
      {
        text: "모든 항목이 동일한 키를 가지므로, React가 중복 항목을 자동으로 제거한다.",
        isCorrect: false,
      },
      {
        text: "key 속성은 React 내부에서만 사용되므로, 사용자가 직접 접근할 수 없다.",
        isCorrect: false,
      },
    ],
    answer:
      "React가 어떤 항목을 변경, 추가 또는 삭제해야 하는지 판단할 수 없어 성능이 저하될 수 있다.",
    explanation:
      "React는 리스트를 렌더링할 때 key를 사용하여 어떤 항목을 변경, 추가 또는 삭제해야 하는지 판단합니다. 따라서 각 항목에 고유한 key를 부여하지 않으면, React는 이 작업을 제대로 수행하지 못해 성능이 저하될 수 있습니다. 이 코드에서는 각 `CommentItem`에 `el._id`를 key로 부여하여 이 문제를 방지하고 있습니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드는 React 컴포넌트 내에서 사용자의 입력값을 관리하는 함수 onChangeInputs에 대한 내용입니다.\n\njavascript\nconst onChangeInputs = (event) => {\n  setInputs((prev) => ({\n    ...prev,\n    [event.target.id]: event.target.value,\n  }));\n};\n\n이 함수에 대한 설명 중 가장 정확한 것은 무엇인가요?",
    code: "const onChangeInputs = (event) => {\n  setInputs((prev) => ({\n    ...prev,\n    [event.target.id]: event.target.value,\n  }));\n};",
    answerOptions: [
      {
        text: "onChangeInputs 함수는 setInputs 함수를 호출하여 inputs 상태를 업데이트합니다. 이 때, event.target.id를 키로, event.target.value를 값으로 사용합니다.",
        isCorrect: true,
      },
      {
        text: "onChangeInputs 함수는 event.target.value를 키로, event.target.id를 값으로 사용하여 inputs 상태를 업데이트합니다.",
        isCorrect: false,
      },
      {
        text: "onChangeInputs 함수는 event.target.id와 event.target.value를 사용하지 않고, inputs 상태를 업데이트합니다.",
        isCorrect: false,
      },
      {
        text: "onChangeInputs 함수는 inputs 상태를 업데이트하지 않고, event.target.id와 event.target.value만을 출력합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "onChangeInputs 함수는 setInputs 함수를 호출하여 inputs 상태를 업데이트합니다. 이 때, event.target.id를 키로, event.target.value를 값으로 사용합니다.",
    explanation:
      "onChangeInputs 함수는 입력항목의 값이 변경될 때마다 호출됩니다. 이 함수 내에서는 setInputs 함수를 호출하여 inputs 상태를 업데이트합니다. 이 때, event.target.id를 키로, event.target.value를 값으로 사용하여 해당 입력항목의 값을 상태에 반영합니다. 따라서, 각 입력항목의 값이 상태에 정확하게 반영되도록 관리할 수 있습니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
];
