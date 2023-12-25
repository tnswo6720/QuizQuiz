import React, { useState } from "react";
import { Form, Label, Input, TextArea, Button } from "./StyledComponets";

type Quiz = {
  type: string;
  questionText: string;
  code: string;
  answer: string;
  explanation: string;
  subject: string;
  subSubject: string;
  quizType: string;
};

const QuizForm: React.FC = () => {
  const [quiz, setQuiz] = useState<Quiz>({
    type: "",
    questionText: "",
    code: "",
    answer: "",
    explanation: "",
    subject: "",
    subSubject: "",
    quizType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(quiz);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        유형:
        <Input
          type="text"
          name="type"
          value={quiz.type}
          onChange={handleChange}
        />
      </Label>
      <Label>
        문제 텍스트:
        <Input
          type="text"
          name="questionText"
          value={quiz.questionText}
          onChange={handleChange}
        />
      </Label>
      <Label>
        코드:
        <TextArea name="code" value={quiz.code} onChange={handleChange} />
      </Label>
      <Label>
        답안:
        <Input
          type="text"
          name="answer"
          value={quiz.answer}
          onChange={handleChange}
        />
      </Label>
      <Label>
        설명:
        <TextArea
          name="explanation"
          value={quiz.explanation}
          onChange={handleChange}
        />
      </Label>
      <Label>
        주제:
        <Input
          type="text"
          name="subject"
          value={quiz.subject}
          onChange={handleChange}
        />
      </Label>
      <Label>
        소주제:
        <Input
          type="text"
          name="subSubject"
          value={quiz.subSubject}
          onChange={handleChange}
        />
      </Label>
      <Label>
        퀴즈 유형:
        <Input
          type="text"
          name="quizType"
          value={quiz.quizType}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">제출</Button>
    </Form>
  );
};

export default QuizForm;
