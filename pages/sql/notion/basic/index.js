import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 문제 1
    {
      questionText: "데이터는 왜 초기화되는가?",
      code: "",
      answerOptions: [
        "데이터는 프로그램이 재시작될 때마다 RAM에서 초기화된다",
        "데이터는 프로그램이 종료될 때마다 HDD/SSD에서 초기화된다",
        "데이터는 프로그램이 실행될 때마다 RAM에서 초기화된다",
        "데이터는 프로그램이 실행될 때마다 HDD/SSD에서 초기화된다",
      ],
      answer: "데이터는 프로그램이 재시작될 때마다 RAM에서 초기화된다",
      explanation:
        "RAM에 저장된 데이터는 전원이 꺼지거나 프로그램이 재시작될 때 초기화됩니다. 이는 RAM이 휘발성 메모리라서 전원이 공급되지 않으면 정보를 유지할 수 없기 때문입니다.",
      explanationCode: "",
    },

    // 문제 2
    {
      questionText: "RAM을 사용하는 이유는 무엇인가?",
      code: "",
      answerOptions: [
        "데이터를 빠르게 읽고 쓸 수 있기 때문에",
        "데이터를 영구적으로 저장하기 위해서",
        "데이터를 안전하게 보관하기 위해서",
        "데이터를 원격으로 접근할 수 있기 때문에",
      ],
      answer: "데이터를 빠르게 읽고 쓸 수 있기 때문에",
      explanation:
        "RAM은 비휘발성 메모리인 HDD/SSD보다 데이터를 훨씬 빠르게 읽고 쓸 수 있습니다. 따라서 프로그램이 실행 중인 동안 필요한 데이터는 RAM에 저장하여 빠른 데이터 접근을 가능하게 합니다.",
      explanationCode: "",
    },

    // 문제 3
    {
      questionText: "SQL의 약자는 무엇인가?",
      code: "",
      answerOptions: [
        "Structured Query Language",
        "Simple Query Language",
        "Structured Question Language",
        "Simple Question Language",
      ],
      answer: "Structured Query Language",
      explanation:
        "SQL은 Structured Query Language의 약자로, 관계형 데이터베이스에서 데이터를 관리하기 위한 표준 언어입니다.",
      explanationCode: "",
    },

    // 문제 4
    {
      questionText: "SQL의 DELETE 문은 어떤 기능을 수행하는가?",
      code: "",
      answerOptions: [
        "데이터베이스에서 특정 데이터를 검색",
        "데이터베이스에서 특정 데이터를 삭제",
        "데이터베이스에서 특정 데이터를 수정",
        "데이터베이스에 새로운 데이터를 추가",
      ],
      answer: "데이터베이스에서 특정 데이터를 삭제",
      explanation:
        "SQL의 DELETE 문은 데이터베이스에서 특정 데이터를 삭제하는 기능을 수행합니다. DELETE 문을 사용하면 WHERE 절에 지정된 조건을 만족하는 모든 행이 삭제됩니다.",
      explanationCode: "",
    },

    // 문제 5
    {
      questionText: "SQL의 UPDATE 문은 어떤 기능을 수행하는가?",
      code: "",
      answerOptions: [
        "데이터베이스에서 특정 데이터를 검색",
        "데이터베이스에서 특정 데이터를 삭제",
        "데이터베이스에서 특정 데이터를 수정",
        "데이터베이스에 새로운 데이터를 추가",
      ],
      answer: "데이터베이스에서 특정 데이터를 수정",
      explanation:
        "SQL의 UPDATE 문은 데이터베이스에서 특정 데이터를 수정하는 기능을 수행합니다. UPDATE 문을 사용하면 WHERE 절에 지정된 조건을 만족하는 모든 행의 데이터를 수정할 수 있습니다.",
      explanationCode: "",
    },

    // 문제 6
    {
      questionText: "SQL의 INSERT 문은 어떤 기능을 수행하는가?",
      code: "",
      answerOptions: [
        "데이터베이스에서 특정 데이터를 검색",
        "데이터베이스에서 특정 데이터를 삭제",
        "데이터베이스에서 특정 데이터를 수정",
        "데이터베이스에 새로운 데이터를 추가",
      ],
      answer: "데이터베이스에 새로운 데이터를 추가",
      explanation:
        "SQL의 INSERT 문은 데이터베이스에 새로운 데이터를 추가하는 기능을 수행합니다. INSERT 문을 사용하면 새로운 행을 테이블에 추가할 수 있습니다.",
      explanationCode: "",
    },

    // 문제 7
    {
      questionText: "SQL의 SELECT 문은 어떤 기능을 수행하는가?",
      code: "",
      answerOptions: [
        "데이터베이스에서 특정 데이터를 검색",
        "데이터베이스에서 특정 데이터를 삭제",
        "데이터베이스에서 특정 데이터를 수정",
        "데이터베이스에 새로운 데이터를 추가",
      ],
      answer: "데이터베이스에서 특정 데이터를 검색",
      explanation:
        "SQL의 SELECT 문은 데이터베이스에서 특정 데이터를 검색하는 기능을 수행합니다. SELECT 문을 사용하면 FROM 절에 지정된 테이블에서 특정 컬럼의 데이터를 검색할 수 있습니다.",
      explanationCode: "",
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
