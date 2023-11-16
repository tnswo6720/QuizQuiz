import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "'forEach'와 'map' 메소드의 주요 차이점은 무엇인가요?",
      code: "", // 문제에 사용될 코드를 넣습니다.
      answerOptions: [
        "둘 다 배열의 각 요소에 함수를 적용하지만, 'forEach'는 새로운 배열을 반환하고 'map'은 반환하지 않는다.",
        "둘 다 배열의 각 요소에 함수를 적용하지만, 'map'은 새로운 배열을 반환하고 'forEach'는 반환하지 않는다.",
        "'forEach'는 배열의 각 요소에 함수를 적용하지만, 'map'은 그렇지 않다.",
        "'map'은 배열의 각 요소에 함수를 적용하지만, 'forEach'는 그렇지 않다.",
      ],
      answer:
        "둘 다 배열의 각 요소에 함수를 적용하지만, 'map'은 새로운 배열을 반환하고 'forEach'는 반환하지 않는다.",
      explanation:
        "'forEach'와 'map' 메소드는 모두 배열의 각 요소에 함수를 적용합니다. 하지만 'map' 메소드는 함수를 적용한 결과를 모아 새로운 배열을 반환하고, 'forEach' 메소드는 아무것도 반환하지 않습니다. ",
      explanationCode: `// 'map' 메소드 사용 예시
      const array1 = [1, 2, 3, 4, 5];
      const newArray1 = array1.map(num => num * 2);
      console.log(newArray1); // [2, 4, 6, 8, 10] 출력
      console.log(array1);    // [1, 2, 3, 4, 5] 출력, 원본 배열은 변하지 않습니다.
      
      // 'forEach' 메소드 사용 예시
      const array2 = [1, 2, 3, 4, 5];
      array2.forEach((num, index) => {
        array2[index] = num * 2; // 원본 배열의 요소를 직접 수정합니다.
      });
      console.log(array2); // [2, 4, 6, 8, 10] 출력`,
    },
    // 추가 문제를 넣을 수 있습니다.
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setQuestions(shuffleArray(initialQuestions));
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
