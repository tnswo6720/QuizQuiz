// questions1.js
export const typescriptCodeMap = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "배열의 각 요소를 화면에 출력하기 위해 map 함수를 사용하는 코드를 완성하세요.",
    code: `
    const FRUITS = [
      { number: 1, title: "레드향" },
      { number: 2, title: "샤인머스켓" },
      { number: 3, title: "산청딸기" },
      { number: 4, title: "한라봉" },
      { number: 5, title: "사과" },
      { number: 6, title: "애플망고" },
      { number: 7, title: "딸기" },
      { number: 8, title: "천혜향" },
      { number: 9, title: "과일선물세트" },
      { number: 10, title: "귤" },
    ];
  
    export default function MapFruitsPage() {
      const fruits = _______.map((el) => (
        <div>
          {el.number} {el.title}
        </div>
      ));
  
      return (
        <div>
          {fruits}
        </div>
      );
    }
    `,
    answerOptions: [
      ["FRUITS"],
      ["FRUITS.title"],
      ["FRUITS.number"],
      ["FRUITS.map"],
    ],
    answer: ["FRUITS"],
    explanation:
      "map 함수는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과를 모아 새로운 배열을 반환합니다. 이 경우 FRUITS 배열의 각 요소에 대해 JSX를 반환하는 함수를 호출하므로, 'FRUITS'를 사용해야 합니다.",
    subject: "typescript",
    subSubject: "map",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "GraphQL을 이용하여 받아온 데이터를 map을 이용하여 화면에 출력하는 코드를 완성하세요.",
    code: `
    import { useQuery, gql } from "@apollo/client";
  
    const FETCH_BOARDS = gql\`
      query {
        fetchBoards {
          number
          writer
          title
          contents
        }
      }
    \`;
  
    export default function StaticRoutingMovedPage() {
      const { data } = useQuery(FETCH_BOARDS);
  
      return (
        <div>
          {______?.______.map((el) => (
            <div>
              <span>
                <input type="checkbox" />
              </span>
              <span style={{ margin: "10px" }}>{el.number}</span>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <span style={{ margin: "10px" }}>{el.writer}</span>
            </div>
          ))}
        </div>
      );
    }
    `,
    answerOptions: [
      ["data", "fetchBoards"],
      ["data", "number"],
      ["data", "writer"],
      ["data", "title"],
    ],
    answer: ["data", "fetchBoards"],
    explanation:
      "GraphQL 요청의 결과는 'data'에 저장되며, 요청한 필드는 'data' 객체의 하위 속성으로 접근할 수 있습니다. 따라서 'fetchBoards' 데이터에 접근하려면 'data?.fetchBoards'를 사용해야 합니다.",
    subject: "typescript",
    subSubject: "map",
    quizType: "coding",
  },
];
