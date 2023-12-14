// questions2.js
export const typescriptNotionEventBubbling = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 'input' 태그를 클릭했을 때, 어떤 alert 메시지가 보여질까요?",
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
    
        const onClickAlert = (event: React.MouseEvent<HTMLInputElement>) => {
          alert(event.currentTarget.id);
        };
    
        const qqq = () => {
          alert("클릭 타이틀");
        };
    
        return (
          <div>
            {data?.fetchBoards.map((el: any) => (
              <div id={el.writer} onClick={onClickAlert}>
                <span>
                  <input type="checkbox" onClick={qqq} />
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
      {
        text: "클릭 타이틀",
        isCorrect: false,
      },
      {
        text: "el.writer 값",
        isCorrect: false,
      },
      {
        text: "클릭 타이틀, 그리고 el.writer 값",
        isCorrect: true,
      },
      {
        text: "아무런 메시지도 보여지지 않는다",
        isCorrect: false,
      },
    ],
    answer: "클릭 타이틀, 그리고 el.writer 값",
    explanation:
      "이벤트 버블링으로 인해 'input' 태그의 onClick 이벤트가 발생하면 '클릭 타이틀'이 먼저 alert로 띄어지고, 이후 상위 요소인 'div' 태그의 onClick 이벤트가 발생하여 'el.writer' 값이 alert로 띄어집니다. 이 경우, 'el.writer'는 해당 div 요소의 id 값을 나타냅니다.",
    subject: "typescript",
    subSubject: "eventbubbling",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 'button' 태그를 클릭했을 때, 출력되는 alert 메시지 순서는 어떻게 될까요?",
    code: `
      function EventCapturingExample() {
        const handleParentClick = () => {
          alert('Parent clicked');
        };
    
        const handleChildClick = () => {
          alert('Child clicked');
        };
    
        return (
          <div onClickCapture={handleParentClick}>
            <button onClick={handleChildClick}>Click me</button>
          </div>
        );
      }
    `,
    answerOptions: [
      "Child clicked, 그리고 Parent clicked",
      "Parent clicked, 그리고 Child clicked",
    ],
    answer: "Parent clicked, 그리고 Child clicked",
    explanation:
      "이벤트 캡쳐링은 이벤트가 가장 상위의 요소에서 시작하여 실제 이벤트가 발생한 요소까지 이벤트를 전파하는 단계를 말합니다. 이 경우, 'div' 태그에 'onClickCapture' 이벤트 핸들러가 연결되어 있으므로, 'button' 태그를 클릭했을 때 'div' 태그의 'onClickCapture' 이벤트 핸들러가 먼저 실행됩니다. 그 다음으로 'button' 태그의 'onClick' 이벤트 핸들러가 실행됩니다. 따라서 'Parent clicked'가 먼저 출력되고, 그 다음으로 'Child clicked'가 출력됩니다.",
    subject: "typescript",
    subSubject: "eventbubbling",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드에서 'button' 태그를 클릭했을 때, 출력되는 alert 메시지는 무엇인가요?",
    code: `
      function EventTargetExample() {
        const handleClick = (event) => {
          alert(event.currentTarget.id);
        };
    
        return (
          <div id="parentID">
            <button id="buttonID" onClick={handleClick}>Click me</button>
          </div>
        );
      }
    `,
    answerOptions: ["parentID", "buttonID", "undefined", "Click me"],
    answer: "buttonID",
    explanation:
      "이벤트 객체의 'currentTarget' 속성은 이벤트 핸들러가 연결된 요소를 가리킵니다. 따라서 'button' 태그의 onClick 이벤트 핸들러에서 'event.currentTarget.id'를 출력하면, 'button' 태그의 id인 'buttonID'가 출력됩니다.",
    subject: "typescript",
    subSubject: "eventbubbling",
    quizType: "coding",
  },
];
