import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button, CodeBlock } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "자바스크립트에서 객체의 속성은 어떤 형태로 정의하는가?",
      code: "",
      answerOptions: ["키-값 쌍", "배열", "변수", "함수"],
      answer: "키-값 쌍",
      explanation:
        "자바스크립트에서 객체의 속성은 '키: 값' 형태로 정의합니다. 이때, 키는 문자열이며 값은 어떤 자료형이든 될 수 있습니다.",
      explanationCode: `const car = {
          make: 'Toyota', // "make"는 키, "Toyota"는 값
          model: 'Camry', // "model"은 키, "Camry"는 값
          year: 2020, // "year"는 키, 2020은 값
        };`,
    },
    // 메서드에 관한 문제
    {
      questionText: "자바스크립트에서 객체의 메서드는 어떻게 표현하는가?",
      code: "",
      answerOptions: [
        "함수로 표현한다",
        "변수로 표현한다",
        "배열로 표현한다",
        "객체로 표현한다",
      ],
      answer: "함수로 표현한다",
      explanation:
        "자바스크립트에서 객체의 메서드는 함수로 표현합니다. 이때, 함수는 객체의 행동을 정의하는데 사용됩니다.",
      explanationCode: `const dog = {
          name: 'Buddy',
          breed: 'Golden Retriever',
          speak: function() { // "speak"는 키, function() {...}는 값이며, 이 함수는 메서드라고 부릅니다.
            return 'Woof!';
          }
        };`,
    },
    // 프로토타입에 관한 문제
    {
      questionText:
        "자바스크립트에서 프로토타입 메서드는 어떤 용도로 사용하는가?",
      code: "",
      answerOptions: [
        "객체의 속성을 추가하는데 사용한다",
        "객체의 메서드를 추가하는데 사용한다",
        "객체를 삭제하는데 사용한다",
        "객체를 복사하는데 사용한다",
      ],
      answer: "객체의 메서드를 추가하는데 사용한다",
      explanation:
        "자바스크립트에서 프로토타입 메서드는 'prototype' 속성을 사용하여 객체에 메서드를 추가하는데 사용됩니다.",
      explanationCode: `function Dog(name, breed) {
          this.name = name;
          this.breed = breed;
        }

        Dog.prototype.speak = function() {
          return 'Woof!';
        }

        const dog = new Dog('Buddy', 'Golden Retriever');
        console.log(dog.speak()); // Output: Woof!`,
    },
    {
      questionText:
        "자바스크립트에서 이미 생성된 객체의 속성을 수정하거나 추가하려면 어떻게 해야 하나요?",
      code: "",
      answerOptions: [
        "새로운 객체를 생성한다",
        "객체의 속성에 직접 값을 할당한다",
        "객체의 속성을 삭제한다",
        "객체를 배열로 변환한다",
      ],
      answer: "객체의 속성에 직접 값을 할당한다",
      explanation:
        "자바스크립트에서 이미 생성된 객체의 속성을 수정하거나 추가하려면, 해당 속성에 직접 값을 할당하면 됩니다.",
      explanationCode: `const car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2020
      };

      car.year = 2021; // 기존 속성 수정
      car.color = 'red'; // 새 속성 추가`,
    },
    // 함수를 객체의 메서드로 사용하는 방법에 관한 문제
    {
      questionText:
        "자바스크립트에서 함수를 객체의 메서드로 사용하려면 어떤 형식으로 작성해야 하나요?",
      code: "",
      answerOptions: [
        "키: 값 형식으로 작성한다",
        "키-값 쌍으로 작성한다",
        "키만 작성한다",
        "값만 작성한다",
      ],
      answer: "키: 값 형식으로 작성한다",
      explanation:
        "자바스크립트에서 함수를 객체의 메서드로 사용하려면, '키: 값' 형식으로 작성해야 합니다. 여기서 '키'는 메서드 이름이고, '값'은 함수입니다.",
      explanationCode: `const dog = {
        name: 'Buddy',
        breed: 'Golden Retriever',
        speak: function() { // "speak"는 키, function() {...}는 값이며, 이 함수는 메서드로 사용됩니다.
          return 'Woof!';
        }
      };`,
    },
    // 프로토타입 체인에 관한 문제
    {
      questionText: "자바스크립트에서 프로토타입 체인이란 무엇인가요?",
      code: "",
      answerOptions: [
        "객체의 구조를 연결하는 체인",
        "객체의 속성을 연결하는 체인",
        "객체의 메서드를 연결하는 체인",
        "객체와 그 프로토타입 사이의 연결",
      ],
      answer: "객체와 그 프로토타입 사이의 연결",
      explanation:
        "프로토타입 체인은 객체와 그 프로토타입 사이의 연결을 의미합니다. 이 체인을 통해 객체는 프로토타입의 속성과 메서드에 접근할 수 있습니다.",
      explanationCode: `function Dog(name, breed) {
        this.name = name;
        this.breed = breed;
      }

      Dog.prototype.speak = function() {
        return 'Woof!';
      }

      const dog = new Dog('Buddy', 'Golden Retriever');
      console.log(dog.speak()); // "Woof!"
      // dog 객체는 speak 메서드를 직접 가지고 있지 않지만, 프로토타입 체인을 통해 Dog.prototype.speak에 접근할 수 있습니다.`,
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
