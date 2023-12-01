import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "CSS에서 이미지 크기를 조절하려면 어떤 속성을 사용해야 하나요?",
      code: "",
      answerOptions: [
        "img-size",
        "size",
        "width & height",
        "img-width & img-height",
      ],
      answer: "width & height",
      explanation:
        "CSS에서 이미지의 크기를 조절하려면 'width'와 'height' 속성을 사용합니다. 이 속성들은 이미지의 가로 및 세로 크기를 지정하는데 사용됩니다.",
      explanationCode: `
      /* CSS 코드 예시 */
      img {
        width: 300px;
        height: 200px;
      }
      `,
    },
    {
      questionText:
        "CSS에서 배경 이미지를 설정하려면 어떤 속성을 사용해야 하나요?",
      code: "",
      answerOptions: [
        "background-img",
        "background-image",
        "bg-image",
        "bg-img",
      ],
      answer: "background-image",
      explanation:
        "CSS에서 배경 이미지를 설정하려면 'background-image' 속성을 사용합니다. 이 속성은 요소의 배경에 이미지를 설정하는데 사용됩니다.",
      explanationCode: `
      /* CSS 코드 예시 */
      .example {
        background-image: url('image.jpg');
      }
      `,
    },
    {
      questionText:
        "CSS에서 배경 이미지를 요소에 맞게 확대/축소하려면 어떤 속성 값을 사용해야 하나요?",
      code: "",
      answerOptions: [
        "background-size: contain;",
        "background-size: cover;",
        "background-size: full;",
        "background-size: auto;",
      ],
      answer: "background-size: cover;",
      explanation:
        "'background-size: cover;'는 배경 이미지를 요소의 너비와 높이에 딱 맞게 확대/축소합니다. 이미지의 가로세로 비율은 유지되며, 이미지가 요소를 완전히 덮도록 확대/축소됩니다. 따라서 이미지의 일부가 잘릴 수 있습니다.",
      explanationCode: `
      /* CSS 코드 예시 */
      .example {
        background-image: url('image.jpg');
        background-size: cover;
      }
      `,
    },
    {
      questionText:
        "CSS에서 배경 이미지를 요소 내부에 완전히 표시하려면 어떤 속성 값을 사용해야 하나요?",
      code: "",
      answerOptions: [
        "background-size: contain;",
        "background-size: cover;",
        "background-size: full;",
        "background-size: auto;",
      ],
      answer: "background-size: contain;",
      explanation:
        "'background-size: contain;'는 배경 이미지를 요소 내부에 완전히 표시하도록 확대/축소합니다. 이미지의 가로세로 비율은 유지되며, 이미지 전체가 요소 내에 보이도록 크기가 조절됩니다. 따라서 요소의 일부가 이미지로 덮이지 않을 수 있습니다.",
      explanationCode: `
      /* CSS 코드 예시 */
      .example {
        background-image: url('image.jpg');
        background-size: contain;
      }
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
            <pre>{questions[currentQuestion].code}</pre>
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
