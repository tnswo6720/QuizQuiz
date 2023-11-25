import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText:
        "CSS에서 <a> 태그에 'nofollow' 값을 가지는 'rel' 속성을 선택하는 선택자는 무엇일까요?",
      code: `
      a[______="nofollow"] {
        color: green;
      }
      `,
      answerOptions: ["href", "rel", "class", "id"],
      answer: "rel",
      explanation:
        "'rel' 속성은 링크의 관계를 나타내는 속성입니다. 'nofollow'는 검색 엔진이 이 링크를 따라가지 않도록 지시하는 값입니다.",
    },
    {
      questionText:
        "CSS에서 <a> 태그에 마우스 커서가 올라갔을 때 스타일을 적용하는 가상 클래스 선택자는 무엇일까요?",
      code: `
      a:______ {
        color: blue;
      }
      `,
      answerOptions: ["link", "visited", "hover", "focus"],
      answer: "hover",
      explanation:
        "':hover'는 마우스 커서가 요소 위에 있을 때 적용되는 가상 클래스 선택자입니다.",
    },
    {
      questionText:
        "<p> 태그의 내용 앞에 콘텐트를 삽입하는 가상 요소 선택자는 무엇일까요?",
      code: `
      p::______ {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: black;
      }
      `,
      answerOptions: ["before", "after", "first-letter", "first-line"],
      answer: "before",
      explanation:
        "'::before'는 선택한 요소의 내용 앞에 콘텐트를 삽입하는 가상 요소 선택자입니다.",
    },
    {
      questionText:
        "div 태그의 텍스트를 가운데 정렬하는 CSS 속성은 무엇일까요?",
      code: `
      div {
        ______: center;
      }
      `,
      answerOptions: ["text-align", "margin", "padding", "border"],
      answer: "text-align",
      explanation:
        "'text-align' 속성은 텍스트의 수평 정렬을 설정합니다. 'center' 값은 텍스트를 가운데 정렬합니다.",
    },
    {
      questionText:
        "<p> 태그의 텍스트 색상을 빨간색으로 설정하는 CSS 값은 무엇일까요?",
      code: `
      p {
        color: ______;
      }
      `,
      answerOptions: ["red", "bold", "underline", "italic"],
      answer: "red",
      explanation:
        "'color' 속성은 텍스트의 색상을 설정합니다. 'red'는 빨간색을 의미합니다.",
    },
    {
      questionText:
        "CSS에서 <div> 태그에 'myClass'라는 클래스를 선택하는 선택자는 무엇일까요?",
      code: `
      ______ .myClass {
        background-color: lightblue;
      }
      `,
      answerOptions: ["#", ".", "*", "div"],
      answer: "div",
      explanation:
        "'div'는 HTML의 div 태그를 선택하는 선택자입니다. '.myClass'와 함께 사용하면, div 태그 중 'myClass' 클래스를 가진 요소를 선택하게 됩니다.",
    },
    {
      questionText:
        "CSS에서 <a> 태그를 클릭했을 때 스타일을 적용하는 가상 클래스 선택자는 무엇일까요?",
      code: `
      a:______ {
        color: darkblue;
      }
      `,
      answerOptions: ["link", "visited", "hover", "active"],
      answer: "active",
      explanation:
        "':active'는 사용자가 요소를 활성화했을 때 적용되는 가상 클래스 선택자입니다. 주로 링크나 버튼을 클릭하는 동안에 스타일을 적용할 때 사용합니다.",
    },
    {
      questionText:
        "<p> 태그의 첫 번째 줄에 스타일을 적용하는 가상 요소 선택자는 무엇일까요?",
      code: `
      p::______ {
        font-weight: bold;
      }
      `,
      answerOptions: ["before", "after", "first-letter", "first-line"],
      answer: "first-line",
      explanation:
        "'::first-line'는 선택한 요소의 첫 번째 줄에 스타일을 적용하는 가상 요소 선택자입니다.",
    },
    {
      questionText:
        "div 태그의 테두리 색상을 검은색으로 설정하는 CSS 속성은 무엇일까요?",
      code: `
      div {
        ______: black;
      }
      `,
      answerOptions: [
        "text-color",
        "background-color",
        "border-color",
        "font-color",
      ],
      answer: "border-color",
      explanation:
        "'border-color' 속성은 요소의 테두리 색상을 설정합니다. 'black' 값은 테두리 색상을 검은색으로 설정합니다.",
    },
    {
      questionText:
        "<p> 태그의 글자 크기를 16픽셀로 설정하는 CSS 값은 무엇일까요?",
      code: `
      p {
        font-size: ______;
      }
      `,
      answerOptions: ["16px", "16%", "16em", "16pt"],
      answer: "16px",
      explanation:
        "'font-size' 속성은 텍스트의 크기를 설정합니다. '16px'는 텍스트 크기를 16픽셀로 설정하는 값입니다.",
    },
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
