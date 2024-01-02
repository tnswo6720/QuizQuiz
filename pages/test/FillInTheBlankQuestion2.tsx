import React, { useState, useEffect } from "react";

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

  const [step, setStep] = useState(1);

  useEffect(() => {
    let newOptions = [...quiz.answerOptions];
    newOptions[0] = { ...newOptions[0], option: quiz.questionText };
    setQuiz({ ...quiz, answerOptions: newOptions });
  }, [quiz.questionText]);

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
    setStep(1);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
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
            <button onClick={() => setStep(2)}>다음</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label>문제:</label>
            <textarea name="questionText" onChange={handleChange} />
            <label>코드:</label>
            <textarea name="code" onChange={handleChange} />
            <button onClick={() => setStep(3)}>다음</button>
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
                  onChange={(e) =>
                    handleAnswerOptionsChange(index, e.target.value)
                  }
                />
                <label>정답:</label>
                <input
                  type="checkbox"
                  checked={option.isCorrect}
                  onChange={() => handleCorrectChange(index)}
                />
                {index > 0 && (
                  <button onClick={() => deleteOption(index)}>
                    선택지 삭제
                  </button>
                )}
              </div>
            ))}
            <button onClick={addOption}>선택지 추가</button>
            <button onClick={() => setStep(4)}>다음</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <label>해설:</label>
            <textarea name="explanation" onChange={handleChange} />
            <button onClick={() => setStep(5)}>다음</button>
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
            <p>해설: {quiz.explanation}</p>
            <button onClick={submitQuiz}>제출</button>
          </div>
        )}
      </div>
      <div style={{ marginLeft: "50px" }}>
        <h3>현재 문제 구성</h3>
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
        <p>해설: {quiz.explanation}</p>
      </div>
    </div>
  );
}

export default QuizCreationPage;
