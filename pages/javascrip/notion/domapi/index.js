import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button, CodeBlock } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "아래 코드는 무엇을 하는 코드인가요?",
      code: `
        const element = document.querySelector('div');
        element.classList.add('new-class');
      `,
      answerOptions: [
        "div 태그를 선택하여 'new-class'라는 클래스를 추가한다.",
        "'new-class'라는 ID를 가진 요소를 선택한다.",
        "'new-class'라는 이름의 새로운 div 요소를 생성한다.",
        "div 태그를 선택하여 'new-class'라는 클래스를 제거한다.",
      ],
      answer: "div 태그를 선택하여 'new-class'라는 클래스를 추가한다.",
      explanation:
        "이 코드는 DOM에서 div 태그를 선택하여 'new-class'라는 클래스를 추가하는 기능을 수행합니다.",
    },
    {
      questionText: "아래 코드는 무엇을 하는 코드인가요?",
      code: `
        fetch('https://api.example.com/data')
          .then(response => response.json())
          .then(data => console.log(data));
      `,
      answerOptions: [
        "서버로부터 데이터를 받아와 콘솔에 출력한다.",
        "서버에 데이터를 보낸다.",
        "서버로부터 데이터를 받아와 'data'라는 이름의 새로운 파일을 생성한다.",
        "'https://api.example.com/data' URL을 콘솔에 출력한다.",
      ],
      answer: "서버로부터 데이터를 받아와 콘솔에 출력한다.",
      explanation:
        "이 코드는 Fetch API를 사용하여 서버로부터 데이터를 받아와 콘솔에 출력하는 기능을 수행합니다.",
    },
    {
      questionText: "아래 코드는 무엇을 하는 코드인가요?",
      code: `
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            console.log(xhr.responseText);
          }
        };
        xhr.open('GET', 'https://api.example.com/data');
        xhr.send();
      `,
      answerOptions: [
        "서버로부터 데이터를 받아와 콘솔에 출력한다.",
        "서버에 데이터를 보낸다.",
        "서버로부터 데이터를 받아와 '4'라는 이름의 새로운 파일을 생성한다.",
        "'https://api.example.com/data' URL을 콘솔에 출력한다.",
      ],
      answer: "서버로부터 데이터를 받아와 콘솔에 출력한다.",
      explanation:
        "이 코드는 XMLHttpRequest 객체를 사용하여 서버로부터 데이터를 받아와 콘솔에 출력하는 기능을 수행합니다.",
    },
    {
      questionText: "아래 코드는 무엇을 하는 코드인가요?",
      code: `
        const element = document.querySelector('div');
        element.innerText = 'Hello, World!';
      `,
      answerOptions: [
        "div 태그를 선택하여 텍스트를 'Hello, World!'로 변경한다.",
        "div 태그를 선택하여 'Hello, World!'라는 클래스를 추가한다.",
        "'Hello, World!'라는 이름의 새로운 div 요소를 생성한다.",
        "div 태그를 선택하여 'Hello, World!'라는 ID를 추가한다.",
      ],
      answer: "div 태그를 선택하여 텍스트를 'Hello, World!'로 변경한다.",
      explanation:
        "이 코드는 DOM에서 div 태그를 선택하여 텍스트를 'Hello, World!'로 변경하는 기능을 수행합니다.",
    },
    {
      questionText: "아래 코드는 무엇을 하는 코드인가요?",
      code: `
        const element = document.querySelector('div');
        const parent = element.parentNode;
        parent.removeChild(element);
      `,
      answerOptions: [
        "div 태그를 선택하여 부모 요소로부터 제거한다.",
        "div 태그를 선택하여 부모 요소를 제거한다.",
        "'div'라는 ID를 가진 요소를 부모 요소로부터 제거한다.",
        "div 태그를 선택하여 부모 요소로부터 'element'라는 ID를 제거한다.",
      ],
      answer: "div 태그를 선택하여 부모 요소로부터 제거한다.",
      explanation:
        "이 코드는 DOM에서 div 태그를 선택하여 부모 요소로부터 제거하는 기능을 수행합니다.",
    },
    {
      questionText: "아래 코드는 무엇을 하는 코드인가요?",
      code: `
        fetch('https://api.example.com/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ key: 'value' })
        });
      `,
      answerOptions: [
        "서버에 'key: value' 데이터를 보낸다.",
        "서버로부터 데이터를 받아와 콘솔에 출력한다.",
        "서버에 'key: value' 데이터를 보내고, 응답을 콘솔에 출력한다.",
        "서버로부터 'key: value' 데이터를 받아온다.",
      ],
      answer: "서버에 'key: value' 데이터를 보낸다.",
      explanation:
        "이 코드는 Fetch API를 사용하여 서버에 'key: value' 형태의 데이터를 보내는 기능을 수행합니다.",
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
              <CodeBlock>
                {questions[currentQuestion].explanationCode}
              </CodeBlock>
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
