// questions2.js
export const typescriptCodePagination = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "Apollo Client를 사용하여 페이지네이션을 구현하는 코드를 완성하세요. 빈칸에 알맞은 코드를 채워넣으세요.",
    code: `
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql\`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
    }
  }
\`;

export default function PaginationPage() {
  const { data, ______ } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    ______({ page: Number(event.target.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, idx) => (
        <button key={idx} id={idx+1} onClick={onClickPage}>
          {idx+1}
        </button>
      ))}
    </div>
  );
}
    `,
    answerOptions: [
      ["refetch", "refetch"],
      ["fetchMore", "fetchMore"],
      ["loadMore", "loadMore"],
      ["getData", "getData"],
    ],
    answer: ["refetch", "refetch"],
    explanation:
      "useQuery는 data와 refetch를 반환합니다. refetch는 쿼리를 다시 실행하는 함수로, 클릭 이벤트가 발생할 때 페이지 번호를 인자로 받아 해당 페이지의 데이터를 다시 불러옵니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },

  {
    type: "fill-in-the-blank",
    questionText:
      "페이지네이션을 구현하는 코드의 일부입니다. 페이지 버튼을 생성하는 부분의 빈칸을 채워주세요.",
    code: `
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql\`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
    }
  }
\`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, idx) => (
        <button key={______} id={______} onClick={onClickPage}>
          {idx+1}
        </button>
      ))}
    </div>
  );
}
    `,
    answerOptions: [
      ["idx", "idx+1"],
      ["idx+1", "idx"],
      ["idx-1", "idx"],
      ["idx", "idx-1"],
    ],
    answer: ["idx", "idx+1"],
    explanation:
      "페이지 버튼을 생성하는 부분에서 key와 id는 각 버튼을 유일하게 식별하는 값을 나타냅니다. 여기에서는 idx와 idx+1을 사용하였습니다.key={idx}: 이 부분은 React에서 배열로 생성되는 요소들은 각각 고유한 key를 가져야 한다는 규칙 때문입니다. key는 각 요소를 식별하는 역할을 하며, React가 효율적으로 렌더링을 수행할 수 있도록 돕습니다. 이 경우 idx는 map 함수의 인덱스로, 각 버튼에 대해 고유한 값을 제공합니다. id={idx+1}: 이 부분은 페이지 번호를 나타내기 위함입니다. 일반적으로 페이지 번호는 1부터 시작하므로, 0부터 시작하는 idx에 1을 더하여 페이지 번호를 표현하였습니다. 이 id값은 버튼 클릭 시 실행되는 onClickPage 함수에 전달되어, 해당 페이지의 데이터를 불러오는 데 사용됩니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
];
