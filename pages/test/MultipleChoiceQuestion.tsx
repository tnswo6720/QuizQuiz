import React from "react";

function MultipleChoiceQuestion() {
  return (
    <div>
      <h1>문제를 입력해주세요.</h1>
      <form>
        <label htmlFor="questionText">문제:</label>
        <textarea id="questionText" name="questionText" required />
        <br />

        <label htmlFor="code">코드:</label>
        <textarea id="code" name="code" required />
        <br />

        <label htmlFor="answerOptions">선택지:</label>
        <textarea id="answerOptions" name="answerOptions" required />
        <br />

        <label htmlFor="answer">정답:</label>
        <textarea id="answer" name="answer" required />
        <br />

        <label htmlFor="explanation">해설:</label>
        <textarea id="explanation" name="explanation" required />
        <br />

        <label htmlFor="subject">주제:</label>
        <input type="text" id="subject" name="subject" required />
        <br />

        <label htmlFor="subSubject">세부주제:</label>
        <input type="text" id="subSubject" name="subSubject" required />
        <br />

        <label htmlFor="quizType">문제유형:</label>
        <input type="text" id="quizType" name="quizType" required />
        <br />

        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default MultipleChoiceQuestion;
