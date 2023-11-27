import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "반복자(Iterator)에 대한 설명으로 옳지 않은 것은 무엇인가요?",
      code: `
        const arr = [1, 2, 3, 4, 5];
        const iterator = arr[Symbol.iterator]();
            
        console.log(iterator.next());  // { value: 1, done: false }
        console.log(iterator.next());  // { value: 2, done: false }
        `,
      answerOptions: [
        "반복자는 배열이나 그와 유사한 자료구조의 각 요소를 순차적으로 접근하는 방법을 제공한다.",
        "반복자는 next라는 메서드를 가진 객체를 반환하는 [Symbol.iterator]라는 메서드를 제공한다.",
        "반복자의 next 메서드는 현재 요소의 값을 반환하고 done 속성으로 모든 요소를 순회했는지 확인한다.",
        "반복자는 자바스크립트에서만 사용되는 개념이다.",
      ],
      answer: "반복자는 자바스크립트에서만 사용되는 개념이다.",
      explanation:
        "반복자는 자바스크립트 뿐만 아니라 여러 프로그래밍 언어에서 일반적으로 사용되는 개념입니다. 이는 컬렉션의 요소를 순차적으로 접근하고, 모든 요소를 순회했는지 확인하는 기능을 제공합니다.",
      explanationCode: `
        const arr = [1, 2, 3, 4, 5];
        const iterator = arr[Symbol.iterator]();
    
        console.log(iterator.next());  // { value: 1, done: false }
        console.log(iterator.next());  // { value: 2, done: false }
        console.log(iterator.next());  // { value: 3, done: false }
        console.log(iterator.next());  // { value: 4, done: false }
        console.log(iterator.next());  // { value: 5, done: false }
        console.log(iterator.next());  // { value: undefined, done: true }
        `,
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
