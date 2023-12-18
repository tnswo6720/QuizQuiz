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
    answer: ["idx", "idx+1"],
    explanation:
      "페이지 버튼을 생성하는 부분에서 key와 id는 각 버튼을 유일하게 식별하는 값을 나타냅니다. 여기에서는 idx와 idx+1을 사용하였습니다.",
    subject: "typescript",
    subSubject: "pagination",
    quizType: "coding",
  },
];
