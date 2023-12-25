// questions1.js
export const typescriptCodeBasic = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "React에서 인피니티 스크롤을 구현하기 위해 사용하는 hook은 무엇이며, 댓글을 수정하는 함수를 호출할 때 사용하는 React hook은 무엇인가요?",
    code: `
      const {
        data,
        fetchMore
      } = useQuery(______, {
        variables: { page: 1 },
      });
  
      const [______] = useMutation(UPDATE_COMMENT);
    `,
    answerOptions: [
      ["FETCH_COMMENTS", "useUpdateComment"],
      ["useScroll", "useEditComment"],
      ["FETCH_COMMENTS", "useMutation"],
      ["useInfiniteScroll", "useEditComment"],
    ],
    answer: ["FETCH_COMMENTS", "useMutation"],
    explanation:
      "React에서 인피니티 스크롤을 구현하기 위해 'useQuery' hook를 사용하며, 이때 'FETCH_COMMENTS'와 같은 쿼리를 인자로 전달합니다. 댓글을 수정하는 함수를 호출할 때는 'useMutation' hook를 사용하며, 이때 'UPDATE_COMMENT'와 같은 뮤테이션을 인자로 전달합니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "React에서 상태를 관리하려면 어떤 Hook을 사용하고, 이 Hook을 사용할 때 초기 상태를 어떻게 설정하나요? 또한, 상태를 업데이트하기 위해서는 어떤 함수를 호출해야 하나요?",
    code: `
      import { ______ } from "react";
  
      export default function CommentItem(props: any): JSX.Element {
        const [isEdit, setIsEdit] = ______(______);
  
        const onClickEdit = (): void => {
          ______(______);
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
      ["useEffect", "useState", "false", "setIsEdit", "true"],
      ["useState", "useState", "false", "setIsEdit", "true"],
      ["useState", "useState", "false", "setIsEdit", "false"],
      ["useEffect", "useState", "false", "setIsEdit", "false"],
    ],
    answer: ["useState", "useState", "false", "setIsEdit", "true"],
    explanation:
      "React에서 상태를 관리하기 위해 'useState' Hook을 사용합니다. 'useState' Hook을 사용할 때는 인자로 초기 상태 값을 전달합니다. 이 경우 초기 상태는 'false'입니다. 상태를 업데이트하기 위해서는 'useState'가 반환하는 상태 설정 함수를 호출하며, 이 경우 'setIsEdit' 함수를 호출하여 상태를 'true'로 업데이트합니다.",
    subject: "react",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "React와 Apollo Client를 이용하여 인피니티 스크롤을 구현할 때, `fetchMore` 함수에서 `updateQuery` 옵션은 다음 중 어떤 역할을 하는가?",
    code: `
  void fetchMore({
    variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (fetchMoreResult.fetchBoards === undefined) {
        return {
          fetchBoards: [...prev.fetchBoards],
        };
      }
      return {
        fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
      };
    },
  });
    `,
    answerOptions: [
      {
        text: "`updateQuery`는 새로운 데이터를 기존 데이터에 추가하는 역할을 한다.",
        isCorrect: true,
      },
      {
        text: "`updateQuery`는 새로운 데이터를 기존 데이터로 대체하는 역할을 한다.",
        isCorrect: false,
      },
      {
        text: "`updateQuery`는 새로운 데이터를 서버에 저장하는 역할을 한다.",
        isCorrect: false,
      },
      {
        text: "`updateQuery`는 새로운 데이터를 사용자에게 보여주는 역할을 한다.",
        isCorrect: false,
      },
    ],
    answer:
      "`updateQuery`는 새로운 데이터를 기존 데이터에 추가하는 역할을 한다.",
    explanation:
      "`fetchMore` 함수의 `updateQuery` 옵션은 기존의 쿼리 결과(`prev`)와 새로 불러온 결과(`fetchMoreResult`)를 받아서, 새로운 쿼리 결과를 반환하는 함수입니다. 이 때, 새로운 결과는 기존 결과와 새로 불러온 결과를 합친 것입니다. 따라서 `updateQuery`는 새로운 데이터를 기존 데이터에 추가하는 역할을 합니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "React에서 `react-infinite-scroller` 라이브러리를 사용하여 인피니티 스크롤을 구현할 때, `useWindow={false}` 속성은 어떤 역할을 하는가?",
    code: `
  <InfiniteScroll
    pageStart={0}
    loadMore={onLoadMore}
    hasMore={true}
    useWindow={false}
  >
    {/* contents */}
  </InfiniteScroll>
    `,
    answerOptions: [
      {
        text: "`useWindow={false}`는 스크롤 이벤트를 윈도우 객체가 아닌 InfiniteScroll 컴포넌트 자체에 바인딩한다.",
        isCorrect: true,
      },
      {
        text: "`useWindow={false}`는 스크롤 이벤트를 윈도우 객체에 바인딩한다.",
        isCorrect: false,
      },
      {
        text: "`useWindow={false}`는 윈도우 객체의 스크롤을 비활성화한다.",
        isCorrect: false,
      },
      {
        text: "`useWindow={false}`는 InfiniteScroll 컴포넌트의 스크롤을 비활성화한다.",
        isCorrect: false,
      },
    ],
    answer:
      "`useWindow={false}`는 스크롤 이벤트를 윈도우 객체가 아닌 InfiniteScroll 컴포넌트 자체에 바인딩한다.",
    explanation:
      "`react-infinite-scroller` 라이브러리의 `useWindow` 속성은 스크롤 이벤트를 어디에 바인딩할지 결정합니다. `useWindow={true}` (또는 속성이 생략된 경우)라면 스크롤 이벤트는 윈도우 객체에 바인딩되고, `useWindow={false}`라면 스크롤 이벤트는 InfiniteScroll 컴포넌트 자체에 바인딩됩니다. 따라서 `useWindow={false}`는 스크롤 이벤트를 윈도우 객체가 아닌 InfiniteScroll 컴포넌트 자체에 바인딩합니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "`react-infinite-scroller` 라이브러리를 사용하여 인피니티 스크롤을 구현할 때, `hasMore={true}` 속성은 어떤 역할을 하는가?",
    code: `
  <InfiniteScroll
    pageStart={0}
    loadMore={onLoadMore}
    hasMore={true}
    useWindow={false}
  >
    {/* contents */}
  </InfiniteScroll>
    `,
    answerOptions: [
      {
        text: "`hasMore={true}`는 더 이상 로드할 데이터가 없음을 의미한다.",
        isCorrect: false,
      },
      {
        text: "`hasMore={true}`는 더 이상 로드할 데이터가 있음을 의미한다.",
        isCorrect: true,
      },
      {
        text: "`hasMore={true}`는 스크롤이 끝에 도달했음을 의미한다.",
        isCorrect: false,
      },
      {
        text: "`hasMore={true}`는 스크롤이 시작점에 위치해 있음을 의미한다.",
        isCorrect: false,
      },
    ],
    answer: "`hasMore={true}`는 더 이상 로드할 데이터가 있음을 의미한다.",
    explanation:
      "`react-infinite-scroller` 라이브러리의 `hasMore` 속성은 더 이상 로드할 데이터가 있는지 여부를 결정합니다. `hasMore={true}`라면 더 로드할 데이터가 있음을, `hasMore={false}`라면 더 이상 로드할 데이터가 없음을 의미합니다. 따라서 `hasMore={true}`는 더 이상 로드할 데이터가 있음을 의미합니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "`react-infinite-scroller` 라이브러리를 사용하여 인피니티 스크롤을 구현할 때, `loadMore={onLoadMore}` 속성은 어떤 역할을 하는가?",
    code: `
  <InfiniteScroll
    pageStart={0}
    loadMore={onLoadMore}
    hasMore={true}
    useWindow={false}
  >
    {/* contents */}
  </InfiniteScroll>
    `,
    answerOptions: [
      {
        text: "`loadMore={onLoadMore}`는 스크롤이 끝에 도달할 때 실행되는 함수를 지정한다.",
        isCorrect: true,
      },
      {
        text: "`loadMore={onLoadMore}`는 스크롤이 시작할 때 실행되는 함수를 지정한다.",
        isCorrect: false,
      },
      {
        text: "`loadMore={onLoadMore}`는 스크롤이 중간에 있을 때 실행되는 함수를 지정한다.",
        isCorrect: false,
      },
      {
        text: "`loadMore={onLoadMore}`는 스크롤이 멈출 때 실행되는 함수를 지정한다.",
        isCorrect: false,
      },
    ],
    answer:
      "`loadMore={onLoadMore}`는 스크롤이 끝에 도달할 때 실행되는 함수를 지정한다.",
    explanation:
      "`react-infinite-scroller` 라이브러리의 `loadMore` 속성은 스크롤이 끝에 도달했을 때 실행되는 함수를 지정합니다. 이 함수는 추가적인 데이터를 불러오는 로직을 포함하게 됩니다. 따라서 `loadMore={onLoadMore}`는 스크롤이 끝에 도달할 때 실행되는 함수를 지정합니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 `fetchMoreResult.fetchBoards === undefined` 분기점은 어떤 이유로 나뉘었을까?",
    code: `
  updateQuery: (prev, { fetchMoreResult }) => {
    if (fetchMoreResult.fetchBoards === undefined) {
      return {
        fetchBoards: [...prev.fetchBoards],
      };
    }
    return {
      fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
    };
  }
    `,
    answerOptions: [
      {
        text: "`fetchMoreResult.fetchBoards`가 `undefined`일 경우, 더 이상 불러올 데이터가 없음을 의미한다.",
        isCorrect: true,
      },
      {
        text: "`fetchMoreResult.fetchBoards`가 `undefined`일 경우, 쿼리 결과가 오류를 발생시켰음을 의미한다.",
        isCorrect: false,
      },
      {
        text: "`fetchMoreResult.fetchBoards`가 `undefined`일 경우, 쿼리가 아직 완료되지 않았음을 의미한다.",
        isCorrect: false,
      },
      {
        text: "`fetchMoreResult.fetchBoards`가 `undefined`일 경우, 이전 쿼리 결과를 유지하기 위함이다.",
        isCorrect: false,
      },
    ],
    answer:
      "`fetchMoreResult.fetchBoards`가 `undefined`일 경우, 더 이상 불러올 데이터가 없음을 의미한다.",
    explanation:
      "이 코드는 더 많은 데이터를 불러오는 쿼리 결과를 처리하는 부분입니다. `fetchMoreResult.fetchBoards`가 `undefined`일 경우, 이는 더 이상 불러올 데이터가 없음을 의미하며, 이전의 데이터를 그대로 반환합니다. 그렇지 않다면, 새로 불러온 데이터와 이전 데이터를 합쳐서 반환합니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드의 `variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 }` 부분은 어떤 역할을 하는가?",
    code: `
  variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 }
    `,
    answerOptions: [
      {
        text: "현재 페이지의 다음 페이지 번호를 계산하여 변수로 설정한다.",
        isCorrect: true,
      },
      {
        text: "현재 페이지의 이전 페이지 번호를 계산하여 변수로 설정한다.",
        isCorrect: false,
      },
      {
        text: "현재 페이지의 번호를 계산하여 변수로 설정한다.",
        isCorrect: false,
      },
      {
        text: "전체 페이지의 수를 계산하여 변수로 설정한다.",
        isCorrect: false,
      },
    ],
    answer: "현재 페이지의 다음 페이지 번호를 계산하여 변수로 설정한다.",
    explanation:
      "`data?.fetchBoards.length ?? 10` 부분은 `fetchBoards`의 길이를 가져오되, 이 값이 없다면 기본적으로 10을 사용하도록 합니다. 이 값을 10으로 나누고 (`/ 10`), 올림처리 (`Math.ceil`) 한 후 1을 더해주어 (`+ 1`) 다음 페이지의 번호를 계산합니다. 이를 `page`라는 변수로 설정하여, 다음 쿼리에서 사용합니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
];
