import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button, CodeBlock } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "리스트를 렌더링할 때 각 아이템에 고유한 key를 부여하는 이유는 무엇인가요?",
      code: "",
      answerOptions: [
        "성능 최적화를 위해",
        "리스트 아이템을 스타일링하기 위해",
        "리스트 아이템을 정렬하기 위해",
        "리스트 아이템을 이벤트 핸들링하기 위해",
      ],
      answer: "성능 최적화를 위해",
      explanation:
        "React는 key를 통해 아이템의 변경, 추가, 삭제를 파악합니다. 이를 통해 불필요한 렌더링을 줄이고 성능을 최적화합니다. 따라서 key는 고유하고 안정적인 값을 사용하는 것이 좋습니다.",
      explanationCode: `
{fruits.map((fruit) => (
  <div key={fruit.id}> {/* 고유하고 안정적인 값을 key로 사용 */}
    {fruit.name}
  </div>
))}
      `,
    },
    {
      questionText:
        "React에서 Fragment를 사용하는 이유와 key를 부여하는 방법을 설명하세요.",
      code: `
import { Fragment } from "react";

{fruits.map((fruit) => (
  <Fragment key={fruit.id}>
    <p>{fruit.name}</p>
    <p>{fruit.color}</p>
  </Fragment>
))}
      `,
      answerOptions: [
        "Fragment는 여러 요소를 그룹화하며, 추가적인 노드를 DOM에 추가하지 않는다. Fragment에 key를 부여하려면 `<Fragment key={value}>`와 같이 사용한다.",
        "Fragment는 단일 요소를 그룹화하며, 추가적인 노드를 DOM에 추가하지 않는다. Fragment에 key를 부여하려면 `<Fragment key={value}>`와 같이 사용한다.",
        "Fragment는 여러 요소를 그룹화하며, 추가적인 노드를 DOM에 추가한다. Fragment에 key를 부여하려면 `<Fragment key={value}>`와 같이 사용한다.",
        "Fragment는 단일 요소를 그룹화하며, 추가적인 노드를 DOM에 추가한다. Fragment에 key를 부여하려면 `<Fragment key={value}>`와 같이 사용한다.",
      ],
      answer:
        "Fragment는 여러 요소를 그룹화하며, 추가적인 노드를 DOM에 추가하지 않는다. Fragment에 key를 부여하려면 `<Fragment key={value}>`와 같이 사용한다.",
      explanation:
        "Fragment는 여러 요소를 그룹화하고 추가적인 노드를 DOM에 추가하지 않는 React의 기능입니다. 따라서 `<div>`를 사용하여 감싸면서 추가적인 DOM 노드를 생성하고 싶지 않은 경우에 사용하면 좋습니다. Fragment에 key를 부여하려면 `<Fragment key={value}>`와 같이 사용할 수 있습니다.",
      explanationCode: `
import { Fragment } from "react";

{data?.fetchBoards.map((el, index) => (
  <Fragment key={index}>
    {/* ... */}
  </Fragment>
))}
      `,
    },
    {
      questionText:
        "다음 코드에서 `deleteBoard` 함수는 어떤 역할을 하는지, 그리고 `refetchQueries` 옵션의 역할은 무엇인지 설명하시오.",
      code: `
const onClickDelete = (event) => {
  deleteBoard({
    variables: {
      number: Number(event.target.id),
    },
    refetchQueries: [{ query: FETCH_BOARDS }],
  });
};
      `,
      answerOptions: [
        "`deleteBoard` 함수는 게시글을 삭제하고, `refetchQueries` 옵션은 삭제 후 쿼리를 다시 실행하여 UI를 갱신한다.",
        "`deleteBoard` 함수는 게시글을 삭제하고, `refetchQueries` 옵션은 삭제 후 쿼리를 중단하여 UI를 갱신한다.",
        "`deleteBoard` 함수는 게시글을 삭제하지 않고, `refetchQueries` 옵션은 삭제 후 쿼리를 다시 실행하여 UI를 갱신한다.",
        "`deleteBoard` 함수는 게시글을 삭제하지 않고, `refetchQueries` 옵션은 삭제 후 쿼리를 중단하여 UI를 갱신한다.",
      ],
      answer:
        "`deleteBoard` 함수는 게시글을 삭제하고, `refetchQueries` 옵션은 삭제 후 쿼리를 다시 실행하여 UI를 갱신한다.",
      explanation:
        "`deleteBoard` 함수는 주어진 게시글 번호에 해당하는 게시글을 삭제하는 역할을 하고, `refetchQueries` 옵션은 삭제 후에 원래의 쿼리를 다시 실행하여 최신 데이터로 UI를 갱신하는 역할을 합니다.",
    },
    {
      questionText:
        "React에서 `key` 속성의 역할과 중요성을 설명하고, 왜 `index`를 `key`로 사용하는 것이 권장되지 않는지 설명하시오.",
      code: `
{data?.fetchBoards.map((el, index) => (
  <div key={el.number}> {/* 이 부분 */}
    {/* ... */}
  </div>
))}
      `,
      answerOptions: [
        "`key` 속성은 React가 요소를 식별하고 렌더링 성능을 최적화하는 데 사용되며, `index`를 `key`로 사용하면 요소의 순서가 변경될 때 문제가 발생할 수 있다.",
        "`key` 속성은 React가 요소를 식별하고 렌더링 성능을 최적화하는 데 사용되며, `index`를 `key`로 사용하면 요소의 순서가 변경될 때 문제가 발생하지 않는다.",
        "`key` 속성은 React가 요소를 식별하고 렌더링 성능을 최적화하는 데 사용되지 않으며, `index`를 `key`로 사용하면 요소의 순서가 변경될 때 문제가 발생할 수 있다.",
        "`key` 속성은 React가 요소를 식별하고 렌더링 성능을 최적화하는 데 사용되지 않으며, `index`를 `key`로 사용하면 요소의 순서가 변경될 때 문제가 발생하지 않는다.",
      ],
      answer:
        "`key` 속성은 React가 요소를 식별하고 렌더링 성능을 최적화하는 데 사용되며, `index`를 `key`로 사용하면 요소의 순서가 변경될 때 문제가 발생할 수 있다.",
      explanation:
        "`key` 속성은 React가 요소를 식별하고 렌더링 성능을 최적화하는 데 사용됩니다. 리스트의 요소가 변경, 추가, 삭제될 때 `key` 속성을 통해 React는 어떤 요소를 변경, 추가, 삭제해야 하는지 쉽게 알 수 있습니다. 그러나 `index`를 `key`로 사용하면 요소의 순서가 변경될 때 `key` 값도 변경되므로, React는 변경된 `key`를 갖는 요소를 새 요소로 간주하고 불필요하게 렌더링을 수행하게 됩니다. 따라서 가능한 한 요소의 내용이나 속성을 기반으로 한 고유한 `key` 값을 사용하는 것이 권장됩니다.",
    },
    {
      questionText:
        "React의 `Fragment`는 무엇이며, 어떤 상황에서 사용하면 좋은지 설명하시오.",
      code: `
    import { Fragment } from "react";
    
    {data?.fetchBoards.map((el, index) => (
      <Fragment key={index}>
        {/* ... */}
      </Fragment>
    ))}
      `,
      answerOptions: [
        "`Fragment`는 여러 요소를 그룹화하는데 사용되며, 추가적인 노드를 DOM에 추가하지 않는다. 따라서 리스트나 테이블 등에서 여러 요소를 그룹화할 때 사용하면 좋다.",
        "`Fragment`는 단일 요소를 그룹화하는데 사용되며, 추가적인 노드를 DOM에 추가하지 않는다. 따라서 리스트나 테이블 등에서 단일 요소를 그룹화할 때 사용하면 좋다.",
        "`Fragment`는 여러 요소를 그룹화하는데 사용되며, 추가적인 노드를 DOM에 추가한다. 따라서 리스트나 테이블 등에서 여러 요소를 그룹화할 때 사용하면 좋다.",
        "`Fragment`는 단일 요소를 그룹화하는데 사용되며, 추가적인 노드를 DOM에 추가한다. 따라서 리스트나 테이블 등에서 단일 요소를 그룹화할 때 사용하면 좋다.",
      ],
      answer:
        "`Fragment`는 여러 요소를 그룹화하는데 사용되며, 추가적인 노드를 DOM에 추가하지 않는다. 따라서 리스트나 테이블 등에서 여러 요소를 그룹화할 때 사용하면 좋다.",
      explanation:
        "`Fragment`는 여러 요소를 그룹화하고 추가적인 노드를 DOM에 추가하지 않는 React의 기능입니다. 따라서 `<div>`를 사용하여 감싸면서 추가적인 DOM 노드를 생성하고 싶지 않은 경우에 사용하면 좋습니다.",
    },
    {
      questionText:
        "React의 `Fragment`에 `key`를 부여하는 방법은 무엇인지 설명하시오.",
      code: `
    import { Fragment } from "react";
    
    {data?.fetchBoards.map((el, index) => (
      <Fragment key={index}>
        {/* ... */}
      </Fragment>
    ))}
      `,
      answerOptions: [
        "`Fragment`에 `key`를 부여하려면 `<Fragment key={value}>`와 같이 사용한다.",
        "`Fragment`에 `key`를 부여하려면 `<Fragment value={key}>`와 같이 사용한다.",
        "`Fragment`에 `key`를 부여하려면 `<Fragment key={key}>`와 같이 사용한다.",
        "`Fragment`에 `key`를 부여하려면 `<Fragment value={value}>`와 같이 사용한다.",
      ],
      answer:
        "`Fragment`에 `key`를 부여하려면 `<Fragment key={value}>`와 같이 사용한다.",
      explanation:
        "`Fragment`에 `key`를 부여하려면 `<Fragment key={value}>`와 같이 사용할 수 있습니다. `key`는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다.",
    },

    // 추가 문제를 넣을 수 있습니다.
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(initialQuestions).map(
      (question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      })
    );
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleSubmit = () => {
    const formattedUserAnswer = userAnswer.replace(/\s/g, "").toLowerCase();
    const formattedCorrectAnswer = questions[currentQuestion].answer
      .replace(/\s/g, "")
      .toLowerCase();

    setIsCorrect(formattedUserAnswer === formattedCorrectAnswer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
  };

  return (
    <Wrapper>
      {questions.length > 0 ? (
        <>
          <Section>
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <CodeBlock>{questions[currentQuestion].code}</CodeBlock>
          </Section>

          {isSubmitted && (
            <Section>
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <pre>{questions[currentQuestion].explanationCode}</pre>
              {currentQuestion < questions.length - 1 && (
                <Button onClick={handleNext}>다음 문제</Button>
              )}
            </Section>
          )}

          <Section>
            <h2>선택지</h2>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <Button onClick={handleSubmit}>제출</Button>
          </Section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default Quiz;
