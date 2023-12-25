// questions2.js
export const typescriptNotionPagination = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "다음 TypeScript 코드는 Apollo Client를 사용하여 페이지네이션을 구현하고 있습니다. 주석의 내용에 관련된 문제로, 'refetch' 함수의 역할에 대한 설명 중 옳은 것을 고르세요.",
    code: `
import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql\`
  query fetchBoards($page: Int) {
    fetchBoard(page: $page) {
      _id
      writer
      title
      contents
    }
  }
\`;

export default function PaginationPage(): JSX.Element {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLInputElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
    `,
    answerOptions: [
      {
        text: "'refetch'는 페이지네이션을 가능하게 하는 함수입니다.",
        isCorrect: false,
      },
      {
        text: "'refetch'는 백엔드에서 페이지당 게시물 수를 제한하는 함수입니다.",
        isCorrect: false,
      },
      {
        text: "'refetch'는 특정 쿼리를 다시 실행하는 함수로, 새로운 변수를 인자로 받아 동일한 쿼리를 다른 조건으로 다시 실행할 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "'refetch'는 Apollo Client에서 데이터를 직접 요청하는 함수입니다.",
        isCorrect: false,
      },
    ],
    answer:
      "'refetch'는 특정 쿼리를 다시 실행하는 함수로, 새로운 변수를 인자로 받아 동일한 쿼리를 다른 조건으로 다시 실행할 수 있습니다.",
    explanation:
      "'refetch' 함수는 Apollo Client에서 제공하는 기능으로, 특정 쿼리를 다시 실행하는 역할을 합니다. 이 함수는 새로운 변수를 인자로 받아, 원래 쿼리를 다시 실행할 때 이 변수를 사용합니다. 이렇게 함으로써, 동일한 쿼리를 다른 조건으로 다시 실행할 수 있습니다. 따라서 'refetch'는 페이지네이션을 직접 가능하게 하는 함수가 아니며, 백엔드에서 페이지당 게시물 수를 제한하는 함수도 아닙니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 TypeScript 코드는 Apollo Client를 사용하여 페이지네이션을 구현하고 있습니다. 사용자가 페이지 번호를 클릭하면 어떤 동작이 수행되는지 올바른 순서대로 선택하세요.",
    code: `
import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql\`
  query fetchBoards($page: Int) {
    fetchBoard(page: $page) {
      _id
      writer
      title
      contents
    }
  }
\`;

export default function PaginationPage(): JSX.Element {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLInputElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
    `,
    answerOptions: [
      {
        text: "onClickPage 함수 호출 -> refetch 함수 실행 -> FETCH_BOARDS 쿼리 재실행 -> 새 페이지 데이터 렌더링",
        isCorrect: true,
      },
      {
        text: "onClickPage 함수 호출 -> FETCH_BOARDS 쿼리 재실행 -> refetch 함수 실행 -> 새 페이지 데이터 렌더링",
        isCorrect: false,
      },
      {
        text: "FETCH_BOARDS 쿼리 재실행 -> onClickPage 함수 호출 -> refetch 함수 실행 -> 새 페이지 데이터 렌더링",
        isCorrect: false,
      },
      {
        text: "FETCH_BOARDS 쿼리 재실행 -> refetch 함수 실행 -> onClickPage 함수 호출 -> 새 페이지 데이터 렌더링",
        isCorrect: false,
      },
    ],
    answer:
      "onClickPage 함수 호출 -> refetch 함수 실행 -> FETCH_BOARDS 쿼리 재실행 -> 새 페이지 데이터 렌더링",
    explanation:
      "사용자가 페이지 번호를 클릭하면, 먼저 onClickPage 함수가 호출됩니다. 그 다음, 이 함수 내부에서 refetch 함수가 실행되는데, 이 함수가 FETCH_BOARDS 쿼리를 다시 실행합니다. 그리고 이 쿼리의 결과로 새로운 페이지의 데이터가 불러와져 화면에 렌더링됩니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 JavaScript 코드는 페이지네이션 버튼을 생성하는 과정을 보여줍니다. 코드가 밑에서부터 위로 개선되면서 어떤 점이 좋아졌는지 선택하세요.",
    code: `
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}
      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    `,
    answerOptions: [
      {
        text: "코드의 재사용성이 향상되었습니다.",
        isCorrect: false,
      },
      {
        text: "코드의 가독성이 향상되었습니다.",
        isCorrect: true,
      },
      {
        text: "코드의 실행 속도가 향상되었습니다.",
        isCorrect: false,
      },
      {
        text: "코드의 안정성이 향상되었습니다.",
        isCorrect: false,
      },
    ],
    answer: "코드의 가독성이 향상되었습니다.",
    explanation:
      "코드가 개선되면서 반복적인 코드를 map 함수를 이용하여 간결하게 표현하였습니다. 이로 인해 코드의 가독성이 향상되었습니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 TypeScript와 React 코드는 페이지네이션 기능을 구현한 것입니다. 'onClickNextPage' 함수가 호출되었을 때, 어떤 동작이 수행되는지 선택해주세요.",
    questionImage: "",
    code: `
      const onClickNextPage = (): void => {
        setStartPage(startPage + 10);
        void refetch({ page: startPage + 10 });
      };
    `,
    answerOptions: [
      {
        text: "현재 페이지 번호에 10을 더하고, 해당 페이지의 데이터를 불러옵니다.",
        isCorrect: true,
      },
      {
        text: "현재 페이지 번호에 10을 더하고, 해당 페이지의 데이터를 저장합니다.",
        isCorrect: false,
      },
      {
        text: "현재 페이지 번호에 10을 뺀 페이지의 데이터를 불러옵니다.",
        isCorrect: false,
      },
      {
        text: "현재 페이지 번호에 10을 뺀 페이지의 데이터를 저장합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "현재 페이지 번호에 10을 더하고, 해당 페이지의 데이터를 불러옵니다.",
    explanation:
      "'onClickNextPage' 함수는 'startPage' 상태 값을 10 증가시키고, 'refetch' 함수를 호출하여 새 페이지 번호에 해당하는 데이터를 불러옵니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 TypeScript와 React 코드는 페이지네이션 기능을 구현한 것입니다. 이 코드의 전체적인 동작 흐름에 대한 가장 정확한 설명은 무엇인가요?",
    questionImage: "",
    code: `
      const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
      };
    
      const onClickPrevPage = (): void => {
        setStartPage(startPage - 10);
        void refetch({ page: startPage - 10 });
      };
    
      const onClickNextPage = (): void => {
        setStartPage(startPage + 10);
        void refetch({ page: startPage + 10 });
      };
    
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}
        <span onClick={onClickPrevPage}>이전 페이지</span>
        {new Array(10).fill("철수").map((_, index) => (
          <span
            key={index + startPage}
            id={String(index + startPage)}
            onClick={onClickPage}
          >
            {index + startPage}
          </span>
        ))}
        <span onClick={onClickNextPage}>다음 페이지</span>
      </div>
    `,
    answerOptions: [
      {
        text: "페이지 번호를 클릭하면 해당 페이지의 데이터를 불러오고, '이전 페이지'와 '다음 페이지' 버튼을 통해 페이지 번호를 조정할 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "페이지 번호를 클릭하면 해당 페이지의 데이터를 저장하고, '이전 페이지'와 '다음 페이지' 버튼을 통해 페이지 번호를 조정할 수 있습니다.",
        isCorrect: false,
      },
      {
        text: "'이전 페이지'와 '다음 페이지' 버튼만을 통해 페이지 번호를 조정하고 데이터를 불러올 수 있습니다.",
        isCorrect: false,
      },
      {
        text: "페이지 번호를 클릭하면 해당 페이지의 데이터를 불러오지만, '이전 페이지'와 '다음 페이지' 버튼은 페이지 번호를 조정하는 기능만 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "페이지 번호를 클릭하면 해당 페이지의 데이터를 불러오고, '이전 페이지'와 '다음 페이지' 버튼을 통해 페이지 번호를 조정할 수 있습니다.",
    explanation:
      "이 코드는 페이지네이션을 구현한 것으로, 사용자가 페이지 번호를 클릭하면 'onClickPage' 함수가 실행되어 해당 페이지의 데이터를 불러옵니다. 또한 '이전 페이지'와 '다음 페이지' 버튼을 통해 'onClickPrevPage'와 'onClickNextPage' 함수를 실행하여 페이지 번호를 조정하고, 조정된 페이지의 데이터를 불러옵니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 자바스크립트 코드에서 startPage 상태 변수와 lastPage 상수의 역할은 무엇인가요?",
    code: `
      const [startPage, setStartPage] = useState(1);
      const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
      const onClickPrevPage = (): void => {
        if (startPage === 1) return;
        setStartPage(startPage - 10);
        void refetch({ page: startPage - 10 });
      };
      const onClickNextPage = (): void => {
        if (startPage + 10 <= lastPage) {
          setStartPage(startPage + 10);
          void refetch({ page: startPage + 10 });
        }
      };
    `,
    answerOptions: [
      {
        text: "현재 보여주고 있는 페이지 단위를 관리하고, 마지막 페이지 번호를 계산",
        isCorrect: true,
      },
      {
        text: "전체 페이지의 개수를 관리하고, 첫 페이지 번호를 계산",
        isCorrect: false,
      },
      {
        text: "각 페이지의 게시글 개수를 관리하고, 첫 페이지 번호를 계산",
        isCorrect: false,
      },
      {
        text: "현재 보여주는 게시글의 개수를 관리하고, 마지막 페이지 번호를 계산",
        isCorrect: false,
      },
    ],
    answer:
      "현재 보여주고 있는 페이지 단위를 관리하고, 마지막 페이지 번호를 계산",
    explanation:
      "startPage 상태 변수는 현재 보여주고 있는 페이지 단위를 관리하는 역할을 합니다. lastPage 상수는 전체 게시글 수를 페이지당 게시글 수로 나누어 올림하여 마지막 페이지 번호를 계산합니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 자바스크립트 코드에서 onClickPage 함수의 역할은 무엇인가요?",
    code: `
      const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
      };
    `,
    answerOptions: [
      {
        text: "클릭한 페이지 번호에 해당하는 데이터를 다시 가져옴",
        isCorrect: true,
      },
      {
        text: "클릭한 페이지 번호를 삭제함",
        isCorrect: false,
      },
      {
        text: "클릭한 페이지 번호를 수정함",
        isCorrect: false,
      },
      {
        text: "클릭한 페이지 번호를 저장함",
        isCorrect: false,
      },
    ],
    answer: "클릭한 페이지 번호에 해당하는 데이터를 다시 가져옴",
    explanation:
      "onClickPage 함수는 클릭한 페이지 번호에 해당하는 데이터를 다시 가져오는 역할을 합니다. 이를 위해 refetch 함수를 사용하며, refetch의 인자로 클릭한 페이지 번호를 넘겨줍니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 자바스크립트 코드에서 startPage와 lastPage 변수를 사용하여 페이지네이션을 구현한 원리는 무엇인가요?",
    code: `
      const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
      const onClickPrevPage = (): void => {
        if (startPage === 1) return;
        setStartPage(startPage - 10);
        void refetch({ page: startPage - 10 });
      };
      const onClickNextPage = (): void => {
        if (startPage + 10 <= lastPage) {
          setStartPage(startPage + 10);
          void refetch({ page: startPage + 10 });
        }
      };
    `,
    answerOptions: [
      {
        text: "10개의 페이지를 한 단위로 처리하여, 이전과 다음 버튼을 클릭하면 10페이지씩 이동",
        isCorrect: true,
      },
      {
        text: "각 페이지당 게시글의 개수를 10으로 고정하여 이전과 다음 버튼을 클릭하면 10개의 게시글을 이동",
        isCorrect: false,
      },
      {
        text: "startPage와 lastPage를 더하여 총 페이지 수를 계산",
        isCorrect: false,
      },
      {
        text: "startPage를 lastPage로 설정하여 마지막 페이지로 이동",
        isCorrect: false,
      },
    ],
    answer:
      "10개의 페이지를 한 단위로 처리하여, 이전과 다음 버튼을 클릭하면 10페이지씩 이동",
    explanation:
      "이 코드에서는 10개의 페이지를 한 단위로 처리하고 있습니다. 이전 버튼을 클릭하면 startPage에서 10을 빼고, 다음 버튼을 클릭하면 startPage에 10을 더하여 10페이지씩 이동하는 방식으로 페이지네이션을 구현하였습니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드 조각에서, `ParentComponent`가 `ChildComponentA`와 `ChildComponentB`에 상태를 전달하는 방식은 무엇인가요?",
    code: `
      function ParentComponent() {
        const [sharedState, setSharedState] = useState(initialState);

        return (
          <>
            <ChildComponentA sharedState={sharedState} />
            <ChildComponentB sharedState={sharedState} setSharedState={setSharedState} />
          </>
        );
      }
    `,
    answerOptions: [
      {
        text: "Props를 통해 전달",
        isCorrect: true,
      },
      {
        text: "Context를 통해 전달",
        isCorrect: false,
      },
      {
        text: "Redux를 통해 전달",
        isCorrect: false,
      },
      {
        text: "Local Storage를 통해 전달",
        isCorrect: false,
      },
    ],
    answer: "Props를 통해 전달",
    explanation:
      "이 예시에서 `ParentComponent`는 `sharedState`라는 상태를 가지고 있고, 이를 `ChildComponentA`와 `ChildComponentB`에 props를 통해 전달하고 있습니다. 이는 리프팅 스테이트(Lifting State Up)의 전형적인 예시입니다.",
    subject: "react",
    subSubject: "lifting-state",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드 조각에서, 어떤 컴포넌트가 상태 변경 함수를 받아오는가요?",
    code: `
      function ParentComponent() {
        const [sharedState, setSharedState] = useState(initialState);

        return (
          <>
            <ChildComponentA sharedState={sharedState} />
            <ChildComponentB sharedState={sharedState} setSharedState={setSharedState} />
          </>
        );
      }
    `,
    answerOptions: [
      {
        text: "`ChildComponentB`",
        isCorrect: true,
      },
      {
        text: "`ChildComponentA`",
        isCorrect: false,
      },
      {
        text: "`ParentComponent`",
        isCorrect: false,
      },
      {
        text: "둘 다",
        isCorrect: false,
      },
    ],
    answer: "`ChildComponentB`",
    explanation:
      "`ChildComponentB`는 `setSharedState`라는 상태 변경 함수를 props로 받아오고 있습니다. 이를 통해 `ChildComponentB`는 상태를 변경할 수 있습니다.",
    subject: "react",
    subSubject: "pagination",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드 조각에서, 리프팅 스테이트(Lifting State Up) 패턴의 목적은 무엇인가요?",
    code: `
      function ParentComponent() {
        const [sharedState, setSharedState] = useState(initialState);

        return (
          <>
            <ChildComponentA sharedState={sharedState} />
            <ChildComponentB sharedState={sharedState} setSharedState={setSharedState} />
          </>
        );
      }
    `,
    answerOptions: [
      {
        text: "여러 컴포넌트가 동일한 상태를 공유하도록 함",
        isCorrect: true,
      },
      {
        text: "각 컴포넌트가 독립적인 상태를 가지도록 함",
        isCorrect: false,
      },
      {
        text: "상태를 전역적으로 관리하도록 함",
        isCorrect: false,
      },
      {
        text: "상태를 로컬 스토리지에 저장하도록 함",
        isCorrect: false,
      },
    ],
    answer: "여러 컴포넌트가 동일한 상태를 공유하도록 함",
    explanation:
      "리프팅 스테이트(Lifting State Up) 패턴의 주요 목적은 여러 컴포넌트가 동일한 상태를 공유하도록 하는 것입니다. 이 패턴을 통해, 상태 변경이 한 컴포넌트의 동작에 다른 컴포넌트의 렌더링을 트리거할 수 있습니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
];
