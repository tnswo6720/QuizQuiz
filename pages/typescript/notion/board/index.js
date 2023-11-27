import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "`BoardWrite` 컴포넌트의 `isEdit` 속성이 `false`로 설정되었을 때, 이 컴포넌트는 어떠한 동작을 수행하게 됩니까?",
      code: `
        export default function GraphqlMutationPage() {
          return (
            <div>
              <div>########여기는 페이지입니다</div>
              <BoardWrite isEdit={false} />
              <div>########여기는 페이지입니다</div>
            </div>
          );
        }
      `,
      answerOptions: [
        "게시글 작성",
        "게시글 수정",
        "게시글 삭제",
        "게시글 조회",
      ],
      answer: "게시글 작성",
      explanation:
        "'isEdit' prop이 'false'로 설정될 때 'BoardWrite' 컴포넌트는 게시글 작성 모드가 됩니다.",
    },
    {
      questionText:
        "`onClickUpdate` 함수가 호출될 때, 이 함수는 어떠한 동작을 수행하게 됩니까?",
      code: `
        const onClickUpdate = async () => {
          const result = await updateBoard({
            variables: {
              number: Number(router.query.number),
              writer: writer,
              title: title,
              contents: contents,
            },
          });
    
          router.push('/section09/09-03-boards/+{result.data.updateBoard.number}');
        };
      `,
      answerOptions: [
        "게시글 작성 후 해당 게시글로 이동",
        "게시글 수정 후 해당 게시글로 이동",
        "게시글 삭제 후 메인 페이지로 이동",
        "게시글 조회 후 해당 게시글로 이동",
      ],
      answer: "게시글 수정 후 해당 게시글로 이동",
      explanation:
        "'onClickUpdate' 함수는 게시글을 수정하고, 수정된 게시글의 페이지로 이동하는 동작을 수행합니다.",
    },
    {
      questionText:
        "`BlueButton` 컴포넌트가 클릭되었을 때, `isEdit` 속성이 `true`로 설정되어 있으면 어떤 함수가 호출되나요?",
      code: `
        <BlueButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"} 하기
        </BlueButton>
      `,
      answerOptions: [
        "onClickUpdate",
        "onClickSubmit",
        "onChangeWriter",
        "onChangeTitle",
      ],
      answer: "onClickUpdate",
      explanation:
        "'isEdit' 속성이 'true'일 때 'onClickUpdate' 함수가 호출됩니다.",
    },
    {
      questionText:
        "`onClickSubmit` 함수가 호출되었을 때, 이 함수는 어떠한 동작을 수행하게 됩니까?",
      code: `
        const onClickSubmit = async () => {
          const result = await 나의함수({
            variables: {
              writer: writer,
              title: title,
              contents: contents,
            },
          });
          console.log(result);
          router.push('/section09/09-03-boards/+{result.data.createBoard.number}');
        };
      `,
      answerOptions: [
        "게시글 작성 후 해당 게시글로 이동",
        "게시글 수정 후 해당 게시글로 이동",
        "게시글 삭제 후 메인 페이지로 이동",
        "게시글 조회 후 해당 게시글로 이동",
      ],
      answer: "게시글 작성 후 해당 게시글로 이동",
      explanation:
        "`onClickSubmit` 함수는 게시글을 작성하고, 작성된 게시글의 페이지로 이동하는 동작을 수행합니다.",
    },
    {
      questionText:
        "`onClickMove` 함수가 호출될 때, 이 함수는 어떠한 동작을 수행하게 됩니까?",
      code: `
        const onClickMove = () => {
          router.push('/section09/09-03-boards/+{router.query.number}/edit');
        };
      `,
      answerOptions: [
        "게시글 작성 페이지로 이동",
        "게시글 수정 페이지로 이동",
        "게시글 삭제 페이지로 이동",
        "게시글 조회 페이지로 이동",
      ],
      answer: "게시글 수정 페이지로 이동",
      explanation:
        "`onClickMove` 함수는 게시글 수정 페이지로 이동하는 동작을 수행합니다.",
    },
    {
      questionText:
        "`isEdit` 속성이 `true`로 설정되었을 때, 어떤 동작을 수행하게 됩니까?",
      code: `
        export default function GraphqlMutationPage() {
          return (
            <div>
              <div>########여기는 페이지입니다</div>
              <BoardWrite isEdit={true} />
              <div>########여기는 페이지입니다</div>
            </div>
          );
        }
      `,
      answerOptions: [
        "게시글 작성",
        "게시글 수정",
        "게시글 삭제",
        "게시글 조회",
      ],
      answer: "게시글 수정",
      explanation:
        "`isEdit` 속성이 `true`로 설정될 때, `BoardWrite` 컴포넌트는 게시글 수정 모드가 됩니다.",
    },
    {
      questionText: "`onChangeWriter` 함수는 어떤 동작을 수행하게 됩니까?",
      code: `
        const onChangeWriter = (event) => {
          setWriter(event.target.value);
        };
      `,
      answerOptions: [
        "게시글 작성자 정보를 업데이트",
        "게시글 제목을 업데이트",
        "게시글 내용을 업데이트",
        "게시글 번호를 업데이트",
      ],
      answer: "게시글 작성자 정보를 업데이트",
      explanation:
        "`onChangeWriter` 함수는 사용자의 입력을 받아 게시글 작성자 정보를 업데이트하는 동작을 수행합니다.",
    },

    // 기존의 문제들...
  ];

  // 추가 문제를 넣을 수 있습니다.

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
    setIsCorrect(userAnswer === questions[currentQuestion].answer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
  };

  return (
    <div className="app">
      {questions.length > 0 ? (
        <>
          <div className="question-section">
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </div>

          <div className="answer-section">
            <h2>선택지</h2>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>제출</button>
          </div>
          {isSubmitted && (
            <div className="explanation-section">
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <pre>{questions[currentQuestion].explanationCode}</pre>{" "}
              {/* 설명에 대한 예시 코드를 보여줍니다. */}
              {currentQuestion < questions.length - 1 && (
                <button onClick={handleNext}>다음 문제</button>
              )}
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;

// 보드에서 삭제를 하고 화면을 다시 그리는 것과
// 게시글에 키를 주는 것,
// index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨
// 즉 유일하지 않음
// 리액트에는 프래그먼트라는게 있음
// 특별한 이유가 없으면 Fragment로 감싸자 <div />는 1개 더 그려야되서 조금 느려짐
// 프래그먼트에 key를 입력하는 방법? <Fragment key= {1} />
