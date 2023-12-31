import React, { useState } from "react";

import {
  Button,
  Container,
  QuizCreationSection,
  QuizPreviewSection,
  Section,
  SectionContent,
  SectionTitle,
} from "./StyledComponents";

function QuizCreationPage() {
  const subjects = {
    주제1: ["소주제1", "소주제2", "소주제3"],
    주제2: ["소주제4", "소주제5", "소주제6"],
  };

  const [quiz, setQuiz] = useState({
    subject: "주제1",
    subSubject: "",
    questionText: "",
    code: "",
    answerOptions: Array(1).fill({ option: "", isCorrect: true }),
  });

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleAnswerOptionsChange = (index, value) => {
    let newOptions = [...quiz.answerOptions];
    newOptions[index] = { ...newOptions[index], option: value };
    setQuiz({ ...quiz, answerOptions: newOptions });
  };

  const handleCorrectChange = (index) => {
    let newOptions = quiz.answerOptions.map((option, idx) =>
      idx === index
        ? { ...option, isCorrect: true }
        : { ...option, isCorrect: false }
    );

    setCorrectAnswer(newOptions[index].option);
    setQuiz({ ...quiz, answerOptions: newOptions });
  };

  const addOption = () => {
    setQuiz({
      ...quiz,
      answerOptions: [...quiz.answerOptions, { option: "", isCorrect: false }],
    });
  };

  const deleteOption = (index) => {
    let newOptions = [...quiz.answerOptions];
    newOptions.splice(index, 1);
    setQuiz({ ...quiz, answerOptions: newOptions });
  };

  const submitQuiz = () => {
    alert("문제를 생성하시겠습니까?");
    setQuiz({
      subject: "주제1",
      subSubject: "",
      questionText: "",
      code: "",
      answerOptions: Array(1).fill({ option: "", isCorrect: true }),
    });
    setCorrectAnswer("");
    setStep(1);
  };
  return (
    <Container>
      <QuizCreationSection>
        {step === 1 && (
          <div>
            <label>대주제:</label>
            <select name="subject" onChange={handleChange}>
              {Object.keys(subjects).map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <label>소주제:</label>
            <select name="subSubject" onChange={handleChange}>
              {subjects[quiz.subject].map((subSubject, index) => (
                <option key={index} value={subSubject}>
                  {subSubject}
                </option>
              ))}
            </select>
            <Button onClick={() => setStep(2)}>다음</Button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label>문제:</label>
            <textarea name="questionText" onChange={handleChange} />
            <label>코드:</label>
            <textarea name="code" onChange={handleChange} />
            <Button onClick={() => setStep(3)}>다음</Button>
          </div>
        )}
        {step === 3 && (
          <div>
            {quiz.answerOptions.map((option, index) => (
              <div key={index}>
                <label>선택지 {index + 1}:</label>
                <input
                  type="text"
                  value={option.option}
                  onChange={(e) => {
                    handleAnswerOptionsChange(index, e.target.value);
                    if (option.isCorrect) setCorrectAnswer(e.target.value);
                  }}
                />
                <label>정답:</label>
                <input
                  type="checkbox"
                  checked={option.isCorrect}
                  onChange={() => handleCorrectChange(index)}
                />
                {index > 0 && (
                  <Button onClick={() => deleteOption(index)}>
                    선택지 삭제
                  </Button>
                )}
              </div>
            ))}
            <Button onClick={addOption}>선택지 추가</Button>
            <Button onClick={() => setStep(4)}>다음</Button>
          </div>
        )}
        {step === 4 && (
          <div>
            <label>해설:</label>
            <textarea name="explanation" onChange={handleChange} />
            <Button onClick={() => setStep(5)}>다음</Button>
          </div>
        )}
        {step === 5 && (
          <div>
            <h3>문제 확인</h3>
            <p>대주제: {quiz.subject}</p>
            <p>소주제: {quiz.subSubject}</p>
            <p>문제: {quiz.questionText}</p>
            <p>코드: {quiz.code}</p>
            {quiz.answerOptions.map((option, index) => (
              <div key={index}>
                <p>
                  선택지 {index + 1}: {option.option}
                </p>
                <p>정답: {option.isCorrect ? "예" : "아니오"}</p>
              </div>
            ))}
            <p>정답: {correctAnswer}</p>
            <p>해설: {quiz.explanation}</p>
            <Button onClick={submitQuiz}>제출</Button>
          </div>
        )}
      </QuizCreationSection>
      {step < 5 && (
        <QuizPreviewSection>
          <h3>현재 문제 구성</h3>
          <Section>
            <SectionTitle>대주제</SectionTitle>
            <SectionContent>주제2</SectionContent>
          </Section>

          <Section>
            <SectionTitle>소주제</SectionTitle>
            <SectionContent>소주제5</SectionContent>
          </Section>

          <Section>
            <SectionContent>문제: {quiz.questionText}</SectionContent>
          </Section>

          <Section>
            <SectionContent>코드: {quiz.code}</SectionContent>
          </Section>

          {quiz.answerOptions.map((option, index) => (
            <div key={index}>
              <Section>
                <SectionContent>
                  선택지 {index + 1}: {option.option}
                </SectionContent>
              </Section>

              <Section>
                <SectionContent>
                  정답: {option.isCorrect ? "예" : "아니오"}
                </SectionContent>
              </Section>
            </div>
          ))}

          <Section>
            <SectionContent>해설: {quiz.explanation}</SectionContent>
          </Section>

          <Section>
            <SectionContent>정답: {correctAnswer}</SectionContent>
          </Section>
        </QuizPreviewSection>
      )}
    </Container>
  );
}

export default QuizCreationPage;
